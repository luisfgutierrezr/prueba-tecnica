"use client";

import Image from "next/image";
import { assets } from "@/lib/assets";
import { CardArrowButton } from "@/components/home/Icons";

export type BenefitCardData = {
  title: string;
  description: string;
  defaultColor: string;
  hoverImage: string;
  hoverBottomColor?: string;
  hoverVariant: "split" | "fullbleed";
  hoverArrowVariant: "solid" | "outline";
};

function WavePattern() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <Image
        src={assets.logos.wavePattern}
        alt=""
        width={280}
        height={280}
        className="absolute -left-8 -top-6 w-[115%] max-w-none opacity-35 blur-[1.5px] brightness-200 contrast-75"
        aria-hidden="true"
      />
    </div>
  );
}

type BenefitCardProps = {
  card: BenefitCardData;
};

export function BenefitCard({ card }: BenefitCardProps) {
  const {
    title,
    description,
    defaultColor,
    hoverImage,
    hoverBottomColor,
    hoverVariant,
    hoverArrowVariant,
  } = card;

  return (
    <article className="group relative h-[277px] w-[201px] shrink-0 overflow-hidden rounded-[var(--radius-card)]">
      {/* Default state */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300 group-hover:opacity-0"
        style={{ backgroundColor: defaultColor }}
      >
        <WavePattern />
        <div className="relative z-10 flex items-end justify-between gap-3">
          <h3 className="max-w-[140px] font-akkurat text-sm font-normal leading-snug text-white">
            {title}
          </h3>
          <CardArrowButton variant="solid" />
        </div>
      </div>

      {/* Hover state */}
      {hoverVariant === "split" ? (
        <div className="absolute inset-0 flex flex-col opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="relative h-[52%] w-full">
            <Image
              src={hoverImage}
              alt={title}
              fill
              className="object-cover"
              sizes="201px"
            />
          </div>
          <div
            className="flex flex-1 flex-col justify-between p-6"
            style={{ backgroundColor: hoverBottomColor }}
          >
            <div className="space-y-3">
              <h3 className="font-akkurat text-sm font-normal leading-snug text-white">
                {title}
              </h3>
              <p className="font-akkurat text-[11px] leading-[1.55] text-white/75">
                {description}
              </p>
            </div>
            <div className="flex justify-end">
              <CardArrowButton variant="outline" />
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 flex flex-col opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="relative h-[52%] w-full">
            <Image
              src={hoverImage}
              alt={title}
              fill
              className="object-cover"
              sizes="201px"
            />
          </div>
          <div className="flex flex-1 flex-col justify-between bg-[var(--ifb-form-bg)] p-6 backdrop-blur-[30px]">
            <div className="space-y-3">
              <h3 className="font-akkurat text-sm font-normal leading-snug text-white">
                {title}
              </h3>
              <p className="font-akkurat text-[11px] leading-[1.55] text-white/75">
                {description}
              </p>
            </div>
            <div className="flex justify-end">
              <CardArrowButton variant={hoverArrowVariant} />
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
