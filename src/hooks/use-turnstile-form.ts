import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { verifyTurnstile } from "../lib/turnstile.functions";

export function useTurnstileForm(action: "contact" | "assessment") {
  const [sent, setSent] = useState(false);
  const [token, setToken] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [widgetVersion, setWidgetVersion] = useState(0);
  const verify = useServerFn(verifyTurnstile);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    setError("");
    if (!token) {
      setError("Please complete the security check before submitting.");
      return;
    }
    const website = String(new FormData(event.currentTarget).get("website") ?? "");
    setBusy(true);
    try {
      const result = await verify({ data: { token, action, website } });
      if (result.verified) setSent(true);
      else setError("The security check could not be verified. Please try again.");
    } catch {
      setError("The security check is unavailable. Please try again shortly.");
    } finally {
      setToken("");
      setWidgetVersion((version) => version + 1);
      setBusy(false);
    }
  }

  return { sent, busy, error, widgetVersion, setToken, submit };
}