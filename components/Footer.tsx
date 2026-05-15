import Link from "next/link";

const footerLinks = {
  products: [
    "Tenant guarantee",
    "Landlord protection",
    "Household contents",
    "Fire insurance",
    "Deposit-free listings",
  ],
  company: ["About us", "Careers", "Press", "Partners", "Contact"],
  support: [
    "File a claim",
    "Help centre",
    "Policy documents",
    "+254 700 000 000",
  ],
};

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-primary bg-[linear-gradient(160deg,#1a080e_0%,#2d0414_100%)] text-[#ffffff61]">
      <div className="mx-auto max-w-7xl pt-14 px-10 pb-8 ">
        {/* Top Grid */}
        <div className="grid gap-14 md:grid-cols-[1.3fr_0.7fr_0.7fr_0.7fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
                <span className="font-serif text-xl font-bold text-white">
                  E
                </span>
              </div>

              <span className="font-serif text-3xl font-semibold tracking-tight">
                <span className="text-white">Ezra</span>
                <span className="text-gold">Insure</span>
              </span>
            </Link>

            <p className="mt-8 max-w-sm text-[13px] leading-8 text-white/55">
              Kenya&apos;s rental guarantee platform — replacing cash deposits
              with insurance-backed protection for landlords and tenants.
            </p>

            <p className="mt-4 text-[11px] leading-6 text-white/30">
              EzraInsure Ltd · Licensed by the Insurance Regulatory Authority of
              Kenya (IRA) · All insurance products underwritten by Britam
              Insurance Company (Kenya) Ltd.
            </p>
          </div>

          {/* Products */}
          <FooterColumn title="Products">
            {footerLinks.products.map((item) => (
              <FooterLink key={item} href="#">
                {item}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Company */}
          <FooterColumn title="Company">
            {footerLinks.company.map((item) => (
              <FooterLink key={item} href="#">
                {item}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Support */}
          <FooterColumn title="Support">
            {footerLinks.support.map((item) => (
              <FooterLink key={item} href="#">
                {item}
              </FooterLink>
            ))}
          </FooterColumn>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-5 text-sm text-white/35 md:flex-row md:items-center md:justify-between">
            <p>© 2025 EzraInsure Ltd. All rights reserved. Nairobi, Kenya.</p>

            <div className="flex flex-wrap items-center gap-8">
              <Link
                href="#"
                className="transition-colors duration-200 hover:text-white/70"
              >
                Privacy
              </Link>

              <Link
                href="#"
                className="transition-colors duration-200 hover:text-white/70"
              >
                Terms
              </Link>

              <Link
                href="#"
                className="transition-colors duration-200 hover:text-white/70"
              >
                Cookies
              </Link>

              <Link
                href="#"
                className="transition-colors duration-200 hover:text-white/70"
              >
                Regulatory Disclosures
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-white/35">
        {title}
      </h3>

      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="text-[15px] text-white/45 transition-colors duration-200 hover:text-white"
    >
      {children}
    </Link>
  );
}
