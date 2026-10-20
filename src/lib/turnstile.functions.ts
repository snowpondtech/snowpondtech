import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { checkTurnstile } from "./turnstile.server";

export const verifyTurnstile = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => z.object({
    token: z.string().max(2048),
    action: z.enum(["contact", "assessment"]),
    website: z.string().max(2048),
  }).parse(input))
  .handler(async ({ data }) => {
    if (data.website) return { verified: false };
    const secret = process.env["TURNSTILE_SECRET_KEY"];
    if (!secret) return { verified: false };
    return { verified: await checkTurnstile(data.token, data.action, secret) };
  });