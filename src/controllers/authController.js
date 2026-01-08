import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateCode } from "../utils/generateCode.js";

export const registerUser = async (req, res) => {
  try {
    const { email, password, fullName } = req.body;

    // 1. Validate fields for email, password, and username
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    if (!username) {
      return res.status(400).json({
        success: false,
        message: "Username is required",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already in use",
      });
    }

    //Check if username already exists
    const usernameExists = await User.findOne({ username });
    if (usernameExists) {
      return res.status(409).json({
        success: false,
        message: "Username already take",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const { code, expiresAt } = generateCode();

    // 4. Create user
    const user = await User.create({
      email,
      password: hashedPassword,
      fullName,
      verificationCode: code,
      verificationCodeValidation: expiresAt.getTime(),
    });

    // 5. Create token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // 6. Respond
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        email: user.email,
        code: code,
      },
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const verifyUser = async (req, res) => {
  const { verificationCode } = req.body;

  const user = await User.findOne({ verificationCode });
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Invalid verification code",
    });
  }

  user.verified = true;
  user.verificationCode = undefined;
  user.verificationCodeValidation = undefined;
  await user.save();

  res.status(200).json({
    success: true,
    message: "User verified successfully",
  });
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Fetch user WITH password (because password select:false)
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Issue token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
