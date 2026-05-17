import { Search, FileText, Key } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "STEP 01",
    title: "Check eligibility",
    desc: "We assess your financial health using M-Pesa history and alternative data signals. Results in under 3 minutes — no paperwork, no waiting rooms.",
  },
  {
    icon: FileText,
    step: "STEP 02",
    title: "Premium issued",
    desc: "Instead of a 3-month lump sum, pay a small monthly premium. EzraInsure — backed by Britam — issues a formal guarantee to your landlord.",
  },
  {
    icon: Key,
    step: "STEP 03",
    title: "Move in. Both protected.",
    desc: "Digital inspections document the property. Your landlord is guaranteed. You are covered. From move-in to move-out day.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#faf2f4] py-14 md:py-20" id="how-it-works">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-10 md:mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-primary"></span>
            <p className="text-[11px] tracking-widest text-primary font-bold uppercase">
              How it works
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[36px] font-serif font-bold leading-tight text-gray-900">
            Simple, transparent,
            <br className="hidden sm:block" />
            <span className="text-primary italic">and built to last.</span>
          </h2>

          <p className="mt-4 md:mt-3 text-[#7a4452] text-[15px] font-light max-w-[500px] sm:text-base leading-relaxed">
            Three steps replace a broken deposit system with something that
            genuinely works for everyone.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm 
            hover:border-primary hover:shadow-[0_8px_25px_rgba(200,0,26,0.18)] 
            transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-[#fdeced] mb-5 sm:mb-6">
                  <Icon
                    className="w-5 h-5 text-[#c8001a] font-bold"
                    size={20}
                  />
                </div>

                {/* Step */}
                <p className="text-xs tracking-widest text-primary font-semibold mb-2">
                  {step.step}
                </p>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-serif font-medium text-[#1a080e] mb-2 sm:mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-[#7a4452] font-light leading-relaxed">
                  {step.desc}
                </p>

                {/* Background Number */}
                <span
                  className="absolute -right-2 bottom-[-2rem] sm:bottom-4 sm:right-6 
              text-[80px] sm:text-[100px] md:text-[120px] 
              font-serif text-[#c8001a] opacity-[0.05] pointer-events-none select-none"
                >
                  0{index + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
