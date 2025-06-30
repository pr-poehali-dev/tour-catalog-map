export const errorHandler = (err, req, res, next) => {
  console.error("Error:", err);

  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((error) => ({
      field: error.path,
      message: error.message,
    }));

    return res.status(400).json({
      success: false,
      message: "Ошибка валидации",
      errors,
    });
  }

  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern)[0];
    return res.status(409).json({
      success: false,
      message: `${field === "email" ? "Пользователь с таким email уже существует" : "Дублирование данных"}`,
    });
  }

  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: "Неверный формат данных",
    });
  }

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Внутренняя ошибка сервера",
  });
};
