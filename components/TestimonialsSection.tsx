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
    <section className="bg-[#f6efef] py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-7 bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
              What people are saying
            </span>
          </div>

          <h2 className="font-serif text-5xl font-bold leading-tight text-black md:text-6xl">
            Real stories from
            <br />
            <span className="italic text-primary">real Kenyans.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-[28px] border border-[#f1dede] bg-white p-8 shadow-[0_4px_14px_rgba(0,0,0,0.03)]"
            >
              {/* Stars */}
              <div className="mb-6 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index} className="text-sm">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-[20px] italic leading-[1.9] text-black">
                "{testimonial.quote}"
              </p>

              {/* User */}
              <div className="mt-10 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                  {testimonial.initial}
                </div>

                <div>
                  <p className="text-base font-semibold text-black">
                    {testimonial.name}
                  </p>

                  <p className="text-sm text-[#8d7b7b]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
