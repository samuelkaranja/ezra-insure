"use client";

export default function Hero() {
  return (
    <section className="bg-primary text-white relative overflow-hidden">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 lg:pt-30 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-xs font-medium mb-6">
            <span className="w-1 h-1 bg-gold rounded-full"></span>
            Underwritten by Britam · IRA Licensed
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
            Renting in Kenya <br />
            should feel <span className="text-gold italic">secure</span> <br />
            for everyone.
          </h1>

          {/* Description */}
          <p className="mt-6 text-white/80 max-w-lg leading-relaxed">
            EzraInsure replaces the 3-month deposit with an insurance-backed
            guarantee — protecting landlords fully while giving tenants the
            financial freedom they deserve.
          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:opacity-90">
              Check my eligibility
            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-primary transition">
              How it works
            </button>
          </div>

          {/* Divider */}
          <div className="mt-12 border-t border-white/20 pt-8 flex gap-10 flex-wrap">
            <div>
              <p className="text-3xl font-serif">KES 0</p>
              <p className="text-sm text-white/70">Deposit required</p>
            </div>

            <div>
              <p className="text-3xl font-serif">
                30 <span className="text-sm">days</span>
              </p>
              <p className="text-sm text-white/70">Claims settlement</p>
            </div>

            <div>
              <p className="text-3xl font-serif">
                2 <span className="text-sm">mo</span>
              </p>
              <p className="text-sm text-white/70">Rent coverage</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative">
          {/* Main Card */}
          <div className="bg-white text-black rounded-2xl shadow-xl overflow-hidden max-w-md ml-auto">
            {/* Top */}
            <div className="bg-primary text-white p-6 relative">
              <div className="text-xs bg-white/20 inline-block px-3 py-1 rounded-full mb-3">
                ACTIVE GUARANTEE
              </div>

              <h3 className="font-semibold">
                2-bedroom apartment <br />
                Kilimani, Nairobi
              </h3>

              <p className="text-sm text-white/80 mt-1">
                Tenancy since January 2025
              </p>

              {/* Floating badge */}
              <div className="absolute right-4 top-4 bg-white text-black px-4 py-3 rounded-xl shadow">
                <p className="font-semibold text-sm">30 days</p>
                <p className="text-xs text-gray-500">claims payout</p>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
              <div className="flex justify-between">
                <div>
                  <p className="text-xs text-gray-500">DEPOSIT REPLACED</p>
                  <p className="text-2xl font-bold text-primary">KES 90,000</p>
                  <p className="text-xs text-gray-500">freed for better use</p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-gray-500">MONTHLY PREMIUM</p>
                  <p className="font-semibold">KES 1,800</p>
                  <p className="text-xs text-gray-500">per month</p>
                </div>
              </div>

              <hr />

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Coverage</span>
                <span className="text-primary font-medium">
                  Rent · Damage · Fire
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Tenant profile</span>
                <span className="font-medium">Verified</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Support</span>
                <span className="text-gold font-medium">Up to 2 months</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Provider</span>
                <span className="font-medium">Britam Insurance</span>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4 flex justify-between items-center text-sm">
              <span className="text-primary">● Fully protected</span>
              <span className="border px-3 py-1 rounded">BRITAM</span>
            </div>
          </div>

          {/* Floating "Zero deposit" badge */}
          <div className="absolute left-0 bottom-10 bg-white text-black px-4 py-3 rounded-xl shadow">
            <p className="font-semibold">Zero</p>
            <p className="text-xs text-gray-500">deposit needed</p>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-primaryDark border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-wrap justify-between text-sm text-white/80 gap-4">
          <span>🏛 IRA Licensed</span>
          <span>🤝 Underwritten by Britam</span>
          <span>⚡ 30-Day Claims Payout</span>
          <span>📱 M-Pesa Integrated</span>
          <span>⚖️ Legal Support</span>
        </div>
      </div>
    </section>
  );
}
