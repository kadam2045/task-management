import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(2, "minimum 8 charcter"),
});

export const registerSchema = z.object({
  name: z.string().min(1, "name is required"),
  email: z.string().trim().email(),
  password: z.string().min(2, "minimum 8 charcter"),
});
