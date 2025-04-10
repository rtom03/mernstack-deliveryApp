import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true, // prevent XSS attacks
    sameSite: "strict",
    secure: process.NODE_ENV !== "development",
    // secure: process.env.NODE_ENV === "production",
    sameSite: "None",
    // domain: "backend-ldk0.onrender.com",
  });

  return token;
};
