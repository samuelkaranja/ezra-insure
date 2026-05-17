"use client";

import {
  UserCheck,
  Camera,
  Shield,
  IdCard,
  RotateCcw,
  Home,
} from "lucide-react";

const features = [
  {
    icon: UserCheck,
    step: "01 · SCREENING",
    title: "Smart tenant screening",
    desc: "M-Pesa & alternative data. Risk-based eligibility scoring in under 3 minutes.",
    color: "#ff8090",
  },
  {
    icon: Camera,
    step: "02 · DOCUMENTATION",
    title: "Digital property inspections",
    desc: "Guided photo capture with timestamped, tamper-proof move-in and move-out records.",
    color: "#ff8090",
  },
  {
    icon: Shield,
    step: "03 · UNDERWRITING",
    title: "Insurance-backed guarantees",
    desc: "Underwritten by Britam. Rent default, property damage, and fire in one policy.",
    color: "gold",
  },
  {
    icon: IdCard,
    step: "04 · IDENTITY",
    title: "Portable tenant profile",
    desc: "Your rental history and trust score travel with you across all future tenancies.",
    color: "#ff8090",
  },
  {
    icon: RotateCcw,
    step: "05 · CLAIMS",
    title: "30-day claims processing",
    desc: "A clear, structured workflow with a guaranteed 30-day payout. No ambiguity.",
    color: "#ff8090",
  },
  {
    icon: Home,
    step: "06 · LISTINGS",
    title: "Deposit-free listings",
    desc: "Browse verified homes that accept EzraInsure. Faster onboarding, no negotiations.",
    color: "gold",
  },
];

export default function PlatformSection() {
  return (
    <section
      className="bg-[linear-gradient(160deg,#1a080e_0%,#2d0414_60%,#1a080e_100%)] text-white py-16 md:py-24 px-6 md:px-12 lg:px-8"
      id="platform"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-10 md:mb-14 text-left">
          <p className="text-[10px] md:text-[11px] text-[#e8305a] font-bold tracking-[0.2em] mb-3">
            — PLATFORM
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold font-serif leading-tight">
            Everything in <br className="hidden md:block" />
            <span className="text-gold italic">one place.</span>
          </h2>

          <p className="mt-4 text-[#ffffff66] text-sm md:text-base max-w-[500px]">
            Purpose-built for the Kenyan rental market — not a workaround on an
            outdated model.
          </p>
        </div>

        {/* Grid: Stacks on mobile, 2 columns on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px border border-[#ffffff12] rounded-2xl overflow-hidden bg-[#ffffff12] backdrop-blur">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="py-10 px-8 bg-[#1a080e]/40 hover:bg-white/5 transition-colors duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-11 h-11 flex items-center justify-center rounded-xl mb-6 
                  ${
                    item.color === "gold"
                      ? "bg-gold/10 text-gold"
                      : "bg-[#e8305a]/10 text-[#e8305a]"
                  }`}
                >
                  <Icon size={22} />
                </div>

                {/* Step */}
                <p className="text-[10px] font-bold tracking-widest text-[#ffffff47] mb-2">
                  {item.step}
                </p>

                {/* Title */}
                <h3 className="text-base text-white font-bold mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#ffffff61] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
