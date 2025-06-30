import bcrypt from "bcrypt";
import User from "../models/User.js";

const SALT_ROUNDS = parseInt(process.env.BCRYPT_SALT_ROUNDS) || 12;

export const registerUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Пользователь с таким email уже существует",
      });
    }

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    const user = new User({
      email,
      passwordHash,
      isActivated: false,
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "Пользователь успешно зарегистрирован",
      data: {
        id: user._id,
        email: user.email,
        isActivated: user.isActivated,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const checkEmail = async (req, res, next) => {
  try {
    const { email } = req.params;

    const user = await User.findOne({ email });

    res.json({
      success: true,
      exists: !!user,
    });
  } catch (error) {
    next(error);
  }
};
