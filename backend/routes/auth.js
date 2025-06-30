import express from "express";
import rateLimit from "express-rate-limit";
import { registerUser, checkEmail } from "../controllers/authController.js";
import {
  validateRegistration,
  handleValidationErrors,
} from "../middleware/validation.js";

const router = express.Router();

const registrationLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    message: "Слишком много попыток регистрации. Попробуйте позже.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const emailCheckLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 20,
  message: {
    success: false,
    message: "Слишком много запросов. Попробуйте позже.",
  },
});

router.post(
  "/register",
  registrationLimiter,
  validateRegistration,
  handleValidationErrors,
  registerUser,
);

router.get("/check-email/:email", emailCheckLimiter, checkEmail);

export default router;
