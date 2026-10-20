export async function checkTurnstile(
  token: string,
  action: "contact" | "assessment",
  secret: string,
  request: typeof fetch = fetch,
): Promise<boolean> {
  if (!token.trim() || token.length > 2048 || !secret) return false;
  try {
    const response = await request("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: new URLSearchParams({ secret, response: token }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return false;
    const result: { success?: boolean; action?: string; hostname?: string } = await response.json();
    const hosts = [
      "snowpondtech.com", "www.snowpondtech.com", "snowpondtech.lovable.app",
      "id-preview--4ca4e842-2ec2-43c9-aeba-79b5ae58afc8.lovable.app", "localhost",
    ];
    return result.success === true && result.action === action &&
      typeof result.hostname === "string" && hosts.includes(result.hostname);
  } catch {
    return false;
  }
}