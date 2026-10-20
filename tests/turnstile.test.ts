import { test, expect } from "bun:test";
import { checkTurnstile } from "../src/lib/turnstile.server";

const reply = (result: object): typeof fetch =>
  (async () => Response.json(result)) as typeof fetch;

test("accepts verified contact challenges from the public domain", async () => {
  expect(await checkTurnstile("test-token", "contact", "test-only", reply({
    success: true, action: "contact", hostname: "snowpondtech.com",
  }))).toBe(true);
});
test("accepts verified assessment challenges", async () => {
  expect(await checkTurnstile("test-token", "assessment", "test-only", reply({
    success: true, action: "assessment", hostname: "snowpondtech.com",
  }))).toBe(true);
});
test("rejects missing tokens before contacting the provider", async () => {
  expect(await checkTurnstile("", "contact", "test-only", reply({ success: true }))).toBe(false);
});
test("rejects invalid challenges", async () => {
  expect(await checkTurnstile("invalid", "contact", "test-only", reply({ success: false }))).toBe(false);
});
test("rejects challenges issued for a different form", async () => {
  expect(await checkTurnstile("test-token", "contact", "test-only", reply({
    success: true, action: "assessment", hostname: "snowpondtech.com",
  }))).toBe(false);
});
test("rejects challenges from other hostnames", async () => {
  expect(await checkTurnstile("test-token", "contact", "test-only", reply({
    success: true, action: "contact", hostname: "example.com",
  }))).toBe(false);
});
test("fails closed when the provider is unavailable", async () => {
  const unavailable = (async () => { throw new Error("Offline"); }) as typeof fetch;
  expect(await checkTurnstile("test-token", "contact", "test-only", unavailable)).toBe(false);
});