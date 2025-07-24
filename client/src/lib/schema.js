import { z } from "zod";

export const AuthFormSchema = (type) => {
  return z.object({
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    password: z.string().min(1, "Password is required"),
    ...(type === "sign-up" && {
      name: z.string().min(1, "Name is required"),
    }),
  });
};
