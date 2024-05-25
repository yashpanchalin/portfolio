import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: "Invalid E-mail Address" }),
  message: z.string(),
});
