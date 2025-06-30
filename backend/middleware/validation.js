import { body, validationResult } from "express-validator";

export const validateRegistration = [
  body("email")
    .isEmail()
    .withMessage("Неверный формат email")
    .normalizeEmail()
    .trim(),

  body("password")
    .isLength({ min: 8 })
    .withMessage("Пароль должен содержать минимум 8 символов")
    .matches(/[A-Z]/)
    .withMessage("Пароль должен содержать хотя бы одну заглавную букву")
    .matches(/[a-z]/)
    .withMessage("Пароль должен содержать хотя бы одну строчную букву")
    .matches(/\d/)
    .withMessage("Пароль должен содержать хотя бы одну цифру")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("Пароль должен содержать хотя бы один специальный символ"),

  body("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Пароли не совпадают");
    }
    return true;
  }),
];

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Ошибка валидации",
      errors: errors.array().map((error) => ({
        field: error.path,
        message: error.msg,
      })),
    });
  }

  next();
};
