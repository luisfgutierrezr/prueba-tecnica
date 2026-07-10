import { BenefitCard, type BenefitCardData } from "@/components/ui/BenefitCard";
import { assets } from "@/lib/assets";

const cards: BenefitCardData[] = [
  {
    title: "Real-Time Account Management",
    description: "Monitor accounts and transactions anytime, anywhere.",
    defaultColor: "#606060",
    hoverImage: assets.images.hover.primero,
    hoverBottomColor: "#001A3F",
    hoverVariant: "split",
    hoverArrowVariant: "outline",
  },
  {
    title: "Risk Mitigation Controls",
    description: "Safeguard your payments with advanced security features.",
    defaultColor: "#001A3F",
    hoverImage: assets.images.hover.segundo,
    hoverBottomColor: "#606060",
    hoverVariant: "split",
    hoverArrowVariant: "outline",
  },
  {
    title: "In-Depth Reporting",
    description: "Gain actionable insights to make smarter financial decisions.",
    defaultColor: "#007BB2",
    hoverImage: assets.images.hover.tercero,
    hoverVariant: "fullbleed",
    hoverArrowVariant: "solid",
  },
];

export function TreasurySection() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex h-[677px] w-full max-w-[1440px] items-center px-[56px]">
        <div className="flex h-[477px] w-full flex-col items-center justify-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <div className="flex h-[194px] w-[563px] max-w-full shrink-0 flex-col gap-5">
            <div
              className="h-4 w-4 shrink-0 rounded-[3px] bg-[#002E6D]"
              aria-hidden="true"
            />
            <p className="shrink-0 font-akkurat text-[14px] font-normal uppercase tracking-[0.22em] text-ifb-gray-text">
              Key Platform Benefits
            </p>
            <h2 className="font-akkurat text-[32px] font-normal leading-[1.15] text-ifb-navy md:text-[40px] lg:text-[48px]">
              Powerful Tools to Simplify and Strengthen Your Business Operations
            </h2>
          </div>

          <div className="flex h-[277px] w-[651px] max-w-full shrink-0 gap-6">
            {cards.map((card) => (
              <BenefitCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
