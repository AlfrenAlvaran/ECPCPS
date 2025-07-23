import rateLimiter from "express-rate-limit";
export const loginLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 10,
  message: "Too many login attempts. Try again later",
  standardHeaders: true,
  legacyHeaders: false,
});
