import Image from "next/image";
import { assets } from "@/lib/assets";

const ifbLinks = ["Personal", "Business", "International", "About Us"];
const resourceLinks = ["Contact", "Career", "Login", "Schedule of Fees"];
const legalLinksLeft = [
  "Accessibility",
  "Sitemap",
  "Terms & Conditions",
  "Privacy Policy",
  "Security",
];
const legalLinksRight = [
  "Federal Holidays",
  "Schedule of Fees",
  "CRA Public File",
  "Affiliate Partners",
  "Coppa",
];

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: assets.icons.linkedin },
  { label: "Instagram", href: "#", icon: assets.icons.instagram },
  { label: "Facebook", href: "#", icon: assets.icons.facebook },
] as const;

function FooterLink({ children }: { children: string }) {
  return (
    <a
      href="#"
      className="font-akkurat text-[13px] leading-snug text-ifb-gray-text transition-colors hover:text-[#00539B]"
    >
      {children}
    </a>
  );
}

function FooterColumnTitle({ children }: { children: string }) {
  return (
    <h3 className="mb-3 font-akkurat text-sm font-normal text-[#00539B]">
      {children}
    </h3>
  );
}

function FooterSocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border border-black/80 transition-colors hover:border-[#00539B]"
    >
      <Image
        src={icon}
        alt=""
        width={20}
        height={20}
        className="h-5 w-5 object-contain"
        aria-hidden
      />
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-ifb-border bg-white font-akkurat">
      <div className="mx-auto w-full max-w-[1296px] px-6">
        <div className="flex h-[164px] items-center justify-between">
          <Image
            src={assets.logos.ifb}
            alt="International Finance Bank"
            width={290}
            height={89}
            className="h-[88.67px] w-[289.5px] max-w-[min(289.5px,55vw)] object-contain object-left"
          />
          <div className="flex h-[50px] w-[174px] items-center justify-end gap-3">
            {socialLinks.map((social) => (
              <FooterSocialLink
                key={social.label}
                href={social.href}
                label={social.label}
                icon={social.icon}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10 pb-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex min-h-[137px] w-full max-w-[604px] flex-wrap gap-x-[100px] gap-y-6 sm:flex-nowrap">
            <div className="shrink-0">
              <FooterColumnTitle>IFB</FooterColumnTitle>
              <ul className="space-y-2">
                {ifbLinks.map((link) => (
                  <li key={link}>
                    <FooterLink>{link}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="shrink-0">
              <FooterColumnTitle>Resources</FooterColumnTitle>
              <ul className="space-y-2">
                {resourceLinks.map((link) => (
                  <li key={link}>
                    <FooterLink>{link}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="shrink-0">
              <FooterColumnTitle>Contact Us</FooterColumnTitle>
              <ul className="space-y-2 font-akkurat text-[13px] leading-snug text-ifb-gray-text">
                <li>
                  <a
                    href="tel:3056488800"
                    className="transition-colors hover:text-[#00539B]"
                  >
                    305.648.8800
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@ifbbank.com"
                    className="transition-colors hover:text-[#00539B]"
                  >
                    info@ifbbank.com
                  </a>
                </li>
                <li>Aba Number: 067011692</li>
                <li>NMLS ID 419537</li>
              </ul>
            </div>
          </div>

          <div className="min-h-[164px] w-full max-w-[319px] shrink-0">
            <FooterColumnTitle>Legal</FooterColumnTitle>
            <div className="flex gap-8">
              <ul className="space-y-2">
                {legalLinksLeft.map((link) => (
                  <li key={link}>
                    <FooterLink>{link}</FooterLink>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {legalLinksRight.map((link) => (
                  <li key={link}>
                    <FooterLink>{link}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
