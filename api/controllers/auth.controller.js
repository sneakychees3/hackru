import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res, next) => {
  const { username, password } = req.body;
  const hashedPass = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, password: hashedPass });
  try {
    await newUser.save();
    res.status(201).json("user made");
  } catch (e) {
    res.status(500).json(e);
    next(e);
  }
};
