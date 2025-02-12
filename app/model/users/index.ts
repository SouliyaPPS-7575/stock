import { z } from "zod";

export const usersSchema = z.object({
     name: z.string(),
     email: z.string().email(),
     password: z.string(),
});