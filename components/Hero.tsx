"use client";

import { Building, Shield, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-linear-to-br from-[#8f0012] via-[#c8001a] to-[#e8305a] text-white relative overflow-hidden">
      {/* Container with responsive padding and grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-16 lg:pt-32 lg:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT CONTENT: Centered on mobile, Left-aligned on desktop */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-[#ffffff1f] border border-[#ffffff47] py-1.5 px-4 rounded-full text-[10px] text-[#ffffffe6] font-semibold tracking-widest mb-7">
            <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
            UNDERWRITTEN BY BRITAM · IRA LICENSED
          </div>

          {/* Responsive Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white font-bold leading-[1.1] tracking-tight">
            Renting in Kenya <br />
            should feel <span className="text-gold italic">secure</span> <br />
            for everyone.
          </h1>

          {/* Description */}
          <p className="mt-6 text-base md:text-lg text-[#ffffffb3] max-w-[480px] leading-relaxed">
            EzraInsure replaces the 3-month deposit with an insurance-backed
            guarantee — protecting landlords fully while giving tenants the
            financial freedom they deserve.
          </p>

          {/* CTA Buttons: Responsive wrapping and width */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-white text-sm text-[#8f0012] font-bold py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 cursor-pointer">
              Check my eligibility
            </button>

            <button className="bg-white/10 text-sm text-white font-semibold border border-white/40 px-8 py-4 rounded-lg hover:bg-white hover:text-[#8f0012] transition-all backdrop-blur-sm cursor-pointer">
              How it works
            </button>
          </div>

          {/* Stats Divider: Horizontal scroll on small mobile */}
          <div className="mt-12 border-t border-white/20 pt-8 flex gap-8 md:gap-12 overflow-x-auto no-scrollbar w-full justify-center lg:justify-start">
            <div className="shrink-0">
              <p className="text-3xl md:text-4xl text-white font-bold font-serif">
                KES 0
              </p>
              <p className="text-[10px] text-white/60 font-medium tracking-wide uppercase">
                Deposit required
              </p>
            </div>

            <div className="shrink-0">
              <p className="text-3xl md:text-4xl text-white font-bold font-serif">
                30<span className="text-base text-gold ml-0.5">days</span>
              </p>
              <p className="text-[10px] text-white/60 font-medium tracking-wide uppercase">
                Claims payout
              </p>
            </div>

            <div className="shrink-0">
              <p className="text-3xl md:text-4xl text-white font-bold font-serif">
                2<span className="text-base text-gold ml-0.5">mo</span>
              </p>
              <p className="text-[10px] text-white/60 font-medium tracking-wide uppercase">
                Rent coverage
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT: Card and Floating Badges */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[360px] md:max-w-md animate-card-float">
            {/* Main Card */}
            <div className="bg-white text-black rounded-2xl shadow-2xl overflow-hidden z-10 relative">
              {/* Card Header */}
              <div className="bg-linear-to-br from-[#8f0012] to-[#c8001a] p-6 text-white">
                <div className="inline-flex items-center gap-2 text-[10px] bg-white/20 px-3 py-1 rounded-full mb-4">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse"></span>
                  ACTIVE GUARANTEE
                </div>
                <h3 className="text-lg font-semibold leading-snug">
                  2-bedroom apartment <br />
                  Kilimani, Nairobi
                </h3>
                <p className="text-[11px] text-white/70 mt-1">
                  Tenancy since January 2025
                </p>
              </div>

              {/* Card Body */}
              <div className="p-7 space-y-6">
                <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                  <div>
                    <p className="text-[9px] text-gray-500 font-bold tracking-widest uppercase">
                      DEPOSIT REPLACED
                    </p>
                    <p className="text-3xl text-[#c8001a] font-bold">
                      KES 90,000
                    </p>
                    <p className="text-[10px] text-gray-400">
                      freed for better use
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] text-gray-500 font-bold tracking-widest uppercase">
                      PREMIUM
                    </p>
                    <p className="text-lg text-[#1a080e] font-semibold">
                      KES 1,800
                    </p>
                    <p className="text-[10px] text-gray-400">per month</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Coverage</span>
                    <span className="text-[#c8001a] font-semibold">
                      Rent · Damage · Fire
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Tenant profile</span>
                    <span className="text-[#1a080e] font-semibold">
                      Verified
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Provider</span>
                    <span className="text-[#1a080e] font-medium">
                      Britam Insurance
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="bg-[#fff5f6] px-7 py-4 flex justify-between items-center border-t border-gray-100">
                <span className="flex items-center gap-1 text-[11px] font-bold text-[#8f0012] tracking-wider">
                  <Shield size={12} />
                  Fully protected
                </span>
                <span className="text-[10px] text-[#8f0012] font-black border-2 border-[#8f001220] px-2 py-0.5 rounded">
                  BRITAM
                </span>
              </div>
            </div>

            {/* Floating Badges: Hidden on tiny screens, absolute on larger ones */}
            <div className="hidden sm:block absolute -right-6 top-12 bg-white text-black rounded-xl px-4 py-3 shadow-xl border border-gray-100 z-20 animate-flt1">
              <div className="w-7 h-7 flex items-center justify-center bg-[#fdf5dc] rounded-md mb-1">
                <Star size={14} className="text-gold" />
              </div>
              <p className="font-bold text-sm text-[#1a080e]">30 days</p>
              <p className="text-[9px] text-gray-500 uppercase">
                Claims payout
              </p>
            </div>

            <div className="hidden sm:block absolute -left-10 bottom-12 bg-white text-black px-4 py-3 border border-gray-100 rounded-xl shadow-xl z-20 animate-flt2">
              <div className="w-7 h-7 flex items-center justify-center bg-[#fdeced] rounded-md mb-1">
                <Building size={14} className="text-[#c8001a]" />
              </div>
              <p className="text-sm text-[#1a080e] font-bold">Zero</p>
              <p className="text-[9px] text-gray-500 uppercase">
                deposit needed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Trust Strip: Responsive horizontal scroll */}
      <div className="bg-[#1a080e] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between overflow-x-auto no-scrollbar gap-8 text-[11px] font-semibold text-white/70 whitespace-nowrap uppercase tracking-widest">
          <span className="flex items-center gap-2">🏛 IRA Licensed</span>
          <span className="flex items-center gap-2">
            🤝 Underwritten by Britam
          </span>
          <span className="flex items-center gap-2">⚡ 30-Day Payout</span>
          <span className="flex items-center gap-2">📱 M-Pesa Integrated</span>
          <span className="flex items-center gap-2">⚖️ Legal Support</span>
        </div>
      </div>
    </section>
  );
}
