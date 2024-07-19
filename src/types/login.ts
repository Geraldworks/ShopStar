import { z } from "zod";

export const SignInSchema = z.object({
  username: z.string().min(1, "Enter your username"),
  password: z.string().min(1, "Enter your password")
});

export type TSignInSchema = z.infer<typeof SignInSchema>;

export const SignUpSchema = z
  .object({
    firstName: z.string().min(1, "First name cannot be empty").trim(),
    lastName: z.string().min(1, "Last name cannot be empty").trim(),
    username: z.string().min(6, "Username must contain at least 6 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must contain at least 8 characters"),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
  });

export type TSignUpSchema = z.infer<typeof SignUpSchema>;
