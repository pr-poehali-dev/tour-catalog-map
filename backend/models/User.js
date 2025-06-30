import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email обязателен"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Неверный формат email"],
    },
    passwordHash: {
      type: String,
      required: [true, "Пароль обязателен"],
      minlength: [8, "Пароль должен содержать минимум 8 символов"],
    },
    isActivated: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.index({ email: 1 });

const User = mongoose.model("User", userSchema);

export default User;
