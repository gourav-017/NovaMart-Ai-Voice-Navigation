import User from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import { genToken, genToken1 } from "../config/token.js";

// =================== COOKIE OPTIONS FOR VERCEL =====================
const cookieOptions = {
  httpOnly: true,
  secure: true,       // Vercel needs HTTPS only
  sameSite: "None",   // Allow cross-site cookies
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

// =================== REGISTRATION =====================
export const registration = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "User already exist" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Enter valid Email" });

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Enter valid Email" });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: "Enter Strong Password" });

    if (password.length < 8) {
      return res.status(400).json({ message: "Enter Strong Password" });
    }

    let hashPassword = await bcrypt.hash(password, 10);

    let hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    let token = await genToken(user._id);

    res.cookie("token", token, cookieOptions);

    return res.status(201).json(user);
  } catch (error) {
    console.log("registration error");
    return res.status(500).json({ message: `registration error ${error}` });
  }
};

// =================== LOGIN =====================
export const login = async (req, res) => {
  try {
    let { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User is not Found" });
    }

    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    let token = await genToken(user._id);

    res.cookie("token", token, cookieOptions);

    return res.status(200).json(user);
  } catch (error) {
    console.log("login error");
    return res.status(500).json({ message: `Login error ${error}` });
  }
};

// =================== LOGOUT =====================
export const logOut = async (req, res) => {
  try {
    res.cookie("token", "", {
      ...cookieOptions,
      maxAge: 0,
    });

    return res.status(200).json({ message: "logOut successful" });
  } catch (error) {
    console.log("logOut error");
    return res.status(500).json({ message: `LogOut error ${error}` });
  }
};

// =================== GOOGLE LOGIN =====================
export const googleLogin = async (req, res) => {
  try {
    let { name, email } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ name, email });
    }

    let token = await genToken(user._id);

    res.cookie("token", token, cookieOptions);

    return res.status(200).json(user);
  } catch (error) {
    console.log("googleLogin error");
    return res.status(500).json({ message: `googleLogin error ${error}` });
  }
};

// =================== ADMIN LOGIN =====================
export const adminLogin = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      let token = await genToken1(email);

      res.cookie("token", token, {
        ...cookieOptions,
        maxAge: 24 * 60 * 60 * 1000,
      });

      return res.status(200).json(token);
    }

    return res.status(400).json({ message: "Invalid credentials" });
  } catch (error) {
    console.log("AdminLogin error");
    return res
      .status(500)
      .json({ message: `AdminLogin error ${error}` });
  }
};
