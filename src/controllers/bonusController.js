import Bonus from "../models/bonusModel.js";
import User from "../models/userModel.js";

export const awardBonus = async (userId, type, points, description) => {
  await Bonus.create({ user: userId, type, points, description });
  await User.findByIdAndUpdate(userId, { $inc: { totalPoints: points } });
};

export const getMyBonuses = async (req, res) => {
  const bonuses = await Bonus.find({ user: req.user.id });
  res.json(bonuses);
};
