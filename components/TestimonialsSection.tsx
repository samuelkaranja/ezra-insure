"use client";

const testimonials = [
  {
    id: 1,
    name: "Amina W.",
    role: "Tenant · Westlands, Nairobi",
    initial: "A",
    quote:
      "I had KES 80,000 tied up in deposits across two previous rentals. With EzraInsure I moved into my new place without touching my savings. I wish this existed years ago.",
  },
  {
    id: 2,
    name: "James K.",
    role: "Landlord · 4 units, South C",
    initial: "J",
    quote:
      "My previous tenant left damage the deposit barely covered. EzraInsure paid the full claim in three weeks. The inspection process has transformed how I manage my properties.",
  },
  {
    id: 3,
    name: "Faith M.",
    role: "Property Agent · Nairobi",
    initial: "F",
    quote:
      "As a property agent, EzraInsure removed the biggest friction in every deal — the deposit negotiation. My listings fill faster and landlords trust the process.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[linear-gradient(135deg,#ffe5e8_0%,#fff5f6_100%)] py-16 md:py-24 px-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="max-w-2xl text-left">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-7 bg-[#c8001a]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#c8001a]">
              What people are saying
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#1a080e]">
            Real stories from
            <br />
            <span className="italic text-[#c8001a]">real Kenyans.</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl border border-[#c8001a1f] bg-white p-6 md:p-8 shadow-[0_2px_8px_#c8001a12] hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="mb-6 flex gap-1 text-[#d4a017]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index} className="text-[12px]">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-[15px] italic leading-[1.8] text-[#1a080e]">
                "{testimonial.quote}"
              </p>

              {/* User Identity */}
              <div className="mt-10 flex items-center gap-4">
                <div className="flex w-[40px] h-[40px] shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#8f0012] to-[#c8001a] text-[14px] font-semibold text-white">
                  {testimonial.initial}
                </div>

                <div>
                  <p className="text-[14px] font-semibold text-[#1a080e]">
                    {testimonial.name}
                  </p>
                  <p className="text-[12px] text-[#7a4452]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
