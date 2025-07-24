import { z } from "zod";

export const AuthFormSchema = (type) => {
  return z.object({
    name:
      type === "sign-in"
        ? z.string().min(1, "name is required")
        : z.string().optional(),
    password:
      type === "sign-in"
        ? z.string().min(1, "name is required")
        : z.string().optional(),
    email: z.string().min(1, "Email is required")
  });
};
