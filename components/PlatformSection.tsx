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
    color: "primary",
  },
  {
    icon: Camera,
    step: "02 · DOCUMENTATION",
    title: "Digital property inspections",
    desc: "Guided photo capture with timestamped, tamper-proof move-in and move-out records.",
    color: "primary",
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
    color: "primary",
  },
  {
    icon: RotateCcw,
    step: "05 · CLAIMS",
    title: "30-day claims processing",
    desc: "A clear, structured workflow with a guaranteed 30-day payout. No ambiguity.",
    color: "primary",
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
    <section className="bg-[#0f0f0f] text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-xs tracking-[0.2em] text-primary mb-3">
            — PLATFORM
          </p>

          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            Everything in <br />
            <span className="text-gold italic">one place.</span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-xl">
            Purpose-built for the Kenyan rental market — not a workaround on an
            outdated model.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="p-8 border border-white/10 hover:bg-white/5 transition"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-lg mb-6 
                  ${
                    item.color === "gold"
                      ? "bg-gold/20 text-gold"
                      : "bg-primary/20 text-primary"
                  }`}
                >
                  <Icon size={20} />
                </div>

                {/* Step */}
                <p className="text-xs tracking-widest text-gray-500 mb-2">
                  {item.step}
                </p>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
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
