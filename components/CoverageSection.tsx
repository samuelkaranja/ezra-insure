"use client";

import { useState } from "react";
import {
  Ban,
  Camera,
  IdCard,
  House,
  ShieldAlert,
  ShieldCheck,
  BadgeDollarSign,
  Flame,
  Gavel,
  TrendingDown,
} from "lucide-react";

const tenantFeatures = [
  {
    icon: Ban,
    title: "No deposit required",
    description:
      "Pay a small monthly premium. Keep your capital liquid and working for you.",
    color: "text-primary",
    bg: "bg-red-50",
  },
  {
    icon: Camera,
    title: "Fair move-out process",
    description:
      "Timestamped digital inspections — no surprise deductions at the end of your tenancy.",
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
  {
    icon: IdCard,
    title: "Portable tenant profile",
    description:
      "Build a verified rental reputation that travels with you to every future home.",
    color: "text-gold",
    bg: "bg-yellow-50",
  },
  {
    icon: House,
    title: "Household contents cover",
    description:
      "Your belongings protected against fire, theft, and accidental damage.",
    color: "text-primary",
    bg: "bg-red-50",
  },
  {
    icon: ShieldAlert,
    title: "Rent support safety net",
    description:
      "Up to 2 months coverage if you face unexpected financial difficulty.",
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
];

const landlordFeatures = [
  {
    icon: ShieldCheck,
    title: "Verified damage cover",
    description:
      "Structured inspections create a tamper-proof, audit-ready record at move-in and move-out.",
    color: "text-primary",
    bg: "bg-red-50",
  },
  {
    icon: BadgeDollarSign,
    title: "Up to 2 months missed rent",
    description:
      "Protection against tenant default — claims settled within 30 days, guaranteed.",
    color: "text-gold",
    bg: "bg-yellow-50",
  },
  {
    icon: Flame,
    title: "Fire & structural insurance",
    description:
      "Property coverage that goes beyond anything a cash deposit could offer.",
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
  {
    icon: Gavel,
    title: "Legal & eviction support",
    description:
      "Assistance during prolonged eviction proceedings with optional payout extension.",
    color: "text-primary",
    bg: "bg-red-50",
  },
  {
    icon: TrendingDown,
    title: "Lower vacancy rates",
    description:
      "No deposit barrier means tenants move in faster and tenancies last longer.",
    color: "text-gold",
    bg: "bg-yellow-50",
  },
];

export default function CoverageSection() {
  const [activeTab, setActiveTab] = useState<"tenant" | "landlord">("tenant");

  const isTenant = activeTab === "tenant";

  const content = isTenant
    ? {
        eyebrow: "PERSONAL COVERAGE",
        title: (
          <>
            Move in without
            <br />
            the <span className="italic text-primary">financial strain.</span>
          </>
        ),
        description:
          "Raising a 3-month deposit in Nairobi means tying up KES 60,000–150,000 that could be working harder for you. With EzraInsure, that money stays free — and you build a rental track record that follows you everywhere.",
        button: "Check my eligibility",
        features: tenantFeatures,
      }
    : {
        eyebrow: "LANDLORD PROTECTION",
        title: (
          <>
            More than a deposit
            <br />
            <span className="italic text-primary">ever gave you.</span>
          </>
        ),
        description:
          "A 3-month deposit rarely covers real losses. EzraInsure replaces it with verified damage cover, missed rent protection, fire insurance, and legal support — in a Britam-backed guarantee that actually pays out.",
        button: "List my property",
        features: landlordFeatures,
      };

  return (
    <section className="bg-[#fdf9fa] py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl mb-3">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-primary"></span>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
              Coverage
            </p>
          </div>

          <h2 className="font-serif text-[36px] leading-tight text-[#1a080e]">
            Designed for
            <br />
            <span className="italic text-primary">both sides of the door.</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="mt-6 inline-flex rounded-2xl border border-[#c8001a1a] bg-[#edd0d8] p-1">
          <button
            onClick={() => setActiveTab("tenant")}
            className={`rounded-xl py-[0.65rem] px-7 text-[13px] font-medium transition-all duration-300 ${
              isTenant
                ? "bg-white text-primary shadow-sm font-bold"
                : "text-[#7a4452] hover:text-black"
            }`}
          >
            For Tenants
          </button>

          <button
            onClick={() => setActiveTab("landlord")}
            className={`rounded-xl py-[0.65rem] px-7 text-[13px] font-medium transition-all duration-300 ${
              !isTenant
                ? "bg-white text-primary shadow-sm"
                : "text-black/60 hover:text-black"
            }`}
          >
            For Landlords
          </button>
        </div>

        {/* Content */}
        <div className="mt-10 grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          {/* Left Side */}
          <div className="max-w-xl">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-primary">
              {content.eyebrow}
            </p>

            <h3 className="font-serif text-4xl leading-tight text-black md:text-[32px] font-bold">
              {content.title}
            </h3>

            <p className="mt-3 text-[14px] text-[#7a4452] font-light leading-6">
              {content.description}
            </p>

            <button className="mt-5 rounded-xl bg-[#c8001a] px-8 py-4 shadow-[0_6px_20px_rgba(200,0,26,0.28)] text-[14px] font-semibold text-white transition hover:bg-primaryDark">
              {content.button}
            </button>

            <div className="mt-6 flex items-center gap-2 text-[11px] text-[#7a4452]">
              <span className="h-px w-5 bg-black/20" />
              Underwritten by Britam Insurance
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-5">
            {content.features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="flex gap-5 rounded-xl bg-white/70 py-[1.1rem] px-5 shadow-[0_2px_8px_#c8001a12] border-[1.5px] border-[#c8001a1a] transition hover:-translate-y-1 hover:shadow-[0_8px_28px_#c8001a1f]"
                >
                  <div
                    className={`flex w-[36px] h-[36px] shrink-0 items-center justify-center rounded-xl ${feature.bg}`}
                  >
                    <Icon className={`h-3 w-3 ${feature.color}`} />
                  </div>

                  <div>
                    <h4 className="text-[13px] font-semibold text-[#1a080e]">
                      {feature.title}
                    </h4>

                    <p className="text-[12px] font-light leading-5 text-[#7a4452]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
