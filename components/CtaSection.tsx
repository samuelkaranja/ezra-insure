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
    <section className="bg-[#fdfafa] px-4 py-20 md:px-8">
      <div className="relative max-w-6xl mx-auto overflow-hidden rounded-4xl bg-linear-to-br from-primaryDark via-primary to-[#ea3a63]">
        {/* Decorative circles */}
        <div className="absolute -top-10 left-[24%] h-[300px] w-[300px] rounded-full bg-black/10" />
        <div className="absolute -bottom-28 right-[-60px] h-[420px] w-[420px] rounded-full bg-white/5" />

        <div className="relative z-10 grid gap-20 px-8 py-12 md:grid-cols-2 md:px-16 md:py-16 lg:px-20">
          {/* Left Content */}
          <div className="max-w-xl">
            <p className="mb-6 text-xs font-semibold tracking-[0.28em] text-white/70">
              GET STARTED TODAY
            </p>

            <h2 className="max-w-lg font-serif text-2xl leading-[1.2] text-white md:text-4xl">
              A better rental
              <br />
              experience <span className="italic text-gold">starts</span>
              <br />
              <span className="italic text-gold">here.</span>
            </h2>

            <p className="mt-8 max-w-md text-base leading-8 text-white/80">
              Join landlords and tenants across Nairobi who have moved beyond
              the deposit model. It takes under 3 minutes to find out if you
              qualify.
            </p>

            <p className="mt-10 text-xs tracking-wide text-white/45">
              Underwritten by Britam Insurance Company (Kenya) Ltd · IRA
              Licensed
            </p>
          </div>

          {/* CTA Cards */}
          <div className="flex flex-col justify-center gap-4">
            {ctaItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.title}
                  className="group flex items-center justify-between rounded-[14px] border border-white/20 bg-white/10 px-4 py-4 text-left backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-white/75">
                      <Icon size={16} strokeWidth={2.2} />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold tracking-[0.24em] text-white/60">
                        {item.label}
                      </p>

                      <p className="mt-2 text-[15px] font-semibold text-white">
                        {item.title}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className="text-white/80 transition-transform duration-300 group-hover:translate-x-1"
                    size={22}
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
