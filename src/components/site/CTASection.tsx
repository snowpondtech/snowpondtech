import { Link } from "@tanstack/react-router";
import { CalendarCheck } from "lucide-react";

export function CTASection({
  title = "Schedule Your Free Assessment",
  subtitle = "A 30-minute conversation with a Maine-based advisor — no sales pressure, no jargon. Walk away with a clear picture of where your technology is helping (and where it's holding you back).",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="hero-grid-bg text-white">
      <div className="container-page py-20 lg:py-24 text-center">
        <h2 className="mx-auto max-w-3xl text-2xl sm:text-3xl lg:text-4xl font-semibold">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-white/80 text-lg">{subtitle}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/schedule-assessment"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand-deep hover:bg-white/90"
          >
            <CalendarCheck className="h-4 w-4" /> Free Assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
