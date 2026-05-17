"use client";
import { ArrowRight, Building2, Handshake, PersonStanding } from "lucide-react";

const ctaItems = [
  {
    label: "TENANTS",
    title: "Check my eligibility",
    icon: PersonStanding,
  },
  {
    label: "LANDLORDS",
    title: "List my property",
    icon: Building2,
  },
  {
    label: "AGENTS & PARTNERS",
    title: "Explore partnerships",
    icon: Handshake,
  },
];

export default function CtaSection() {
  return (
    <section className="bg-[#fdf9fa] py-12 md:py-24 px-4 md:px-6" id="about">
      <div className="relative max-w-6xl mx-auto overflow-hidden rounded-3xl md:rounded-4xl bg-linear-to-br from-[#8f0012] via-[#c8001a] to-[#ea3a63]">
        {/* Decorative circles - Hidden on small mobile to reduce clutter */}
        <div className="hidden sm:block absolute -top-25 left-[24%] h-[320px] w-[320px] rounded-full bg-black/10" />
        <div className="absolute -bottom-28 right-[-60px] h-[300px] w-[300px] md:h-[420px] md:w-[420px] rounded-full bg-white/5" />

        <div className="relative z-10 grid gap-12 md:gap-20 px-6 py-10 md:px-16 md:py-16 lg:px-20 grid-cols-1 lg:grid-cols-2">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <p className="mb-4 md:mb-6 text-[10px] md:text-[11px] font-bold tracking-[0.18em] text-[#ffffff8c] uppercase">
              GET STARTED TODAY
            </p>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-[42px] leading-[1.15] text-white">
              A better rental
              <br className="hidden sm:block" />
              experience{" "}
              <span className="italic text-[#d4af37]">starts here.</span>
            </h2>

            <p className="mt-4 mx-auto lg:mx-0 max-w-md text-sm md:text-[15px] leading-7 md:leading-8 text-[#ffffffb3]">
              Join landlords and tenants across Nairobi who have moved beyond
              the deposit model. It takes under 3 minutes to find out if you
              qualify.
            </p>

            <p className="mt-6 text-[10px] tracking-wide text-[#ffffff66]">
              Underwritten by Britam Insurance Company (Kenya) Ltd · IRA
              Licensed
            </p>
          </div>

          {/* CTA Cards */}
          <div className="flex flex-col justify-center gap-3 md:gap-4">
            {ctaItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.title}
                  className="group flex items-center justify-between rounded-xl md:rounded-[14px] border border-white/20 bg-white/10 px-5 py-4 md:px-6 md:py-5 text-left backdrop-blur-sm transition-all duration-300 hover:bg-white/15 active:scale-[0.98]"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-white/75 shrink-0">
                      <Icon size={18} strokeWidth={2.2} />
                    </div>

                    <div>
                      <p className="text-[8px] md:text-[9px] font-bold tracking-[0.24em] text-white/60">
                        {item.label}
                      </p>

                      <p className="mt-1 text-sm md:text-[15px] font-semibold text-white">
                        {item.title}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className="text-white/80 transition-transform duration-300 group-hover:translate-x-1"
                    size={20}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
