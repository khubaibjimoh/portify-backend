export function generateCode() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const charactersLength = characters.length;

  let code = "";
  for (let i = 0; i < 6; i++) {
    code += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

  return {
    code,
    expiresAt,
  };
}
