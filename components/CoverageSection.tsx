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
            the{" "}
            <span className="italic text-primary">
              financial strain.
            </span>
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
            <span className="italic text-primary">
              ever gave you.
            </span>
          </>
        ),
        description:
          "A 3-month deposit rarely covers real losses. EzraInsure replaces it with verified damage cover, missed rent protection, fire insurance, and legal support — in a Britam-backed guarantee that actually pays out.",
        button: "List my property",
        features: landlordFeatures,
      };

  return (
    <section className="bg-[#f6f2f1] py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Coverage
          </p>

          <h2 className="font-serif text-5xl leading-tight text-black md:text-6xl">
            Designed for
            <br />
            <span className="italic text-primary">
              both sides of the door.
            </span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="mt-12 inline-flex rounded-2xl border border-primary/20 bg-[#eadcdc] p-1">
          <button
            onClick={() => setActiveTab("tenant")}
            className={`rounded-xl px-8 py-4 text-sm font-medium transition-all duration-300 ${
              isTenant
                ? "bg-white text-primary shadow-sm"
                : "text-black/60 hover:text-black"
            }`}
          >
            For Tenants
          </button>

          <button
            onClick={() => setActiveTab("landlord")}
            className={`rounded-xl px-8 py-4 text-sm font-medium transition-all duration-300 ${
              !isTenant
                ? "bg-white text-primary shadow-sm"
                : "text-black/60 hover:text-black"
            }`}
          >
            For Landlords
          </button>
        </div>

        {/* Content */}
        <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          {/* Left Side */}
          <div className="max-w-xl">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-primary">
              {content.eyebrow}
            </p>

            <h3 className="font-serif text-4xl leading-tight text-black md:text-5xl">
              {content.title}
            </h3>

            <p className="mt-8 text-lg leading-9 text-black/55">
              {content.description}
            </p>

            <button className="mt-10 rounded-2xl bg-primary px-8 py-5 text-base font-semibold text-white transition hover:bg-primaryDark">
              {content.button}
            </button>

            <div className="mt-6 flex items-center gap-2 text-sm text-black/50">
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
                  className="flex gap-5 rounded-3xl border border-black/5 bg-white/70 p-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${feature.bg}`}
                  >
                    <Icon className={`h-5 w-5 ${feature.color}`} />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-black">
                      {feature.title}
                    </h4>

                    <p className="mt-2 text-[15px] leading-7 text-black/50">
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
