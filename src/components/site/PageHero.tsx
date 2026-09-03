import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  media,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
  media?: ReactNode;
}) {
  return (
    <section className="hero-grid-bg text-white">
      <div className="container-page py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">{eyebrow}</p>
            )}
            <h1 className="mt-3 max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.05]">
              {title}
            </h1>
            {description && (
              <p className="mt-5 max-w-2xl text-lg text-white/80">{description}</p>
            )}
            {children}
          </div>
          {media && (
            <div className="relative flex items-center justify-center">
              {media}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
