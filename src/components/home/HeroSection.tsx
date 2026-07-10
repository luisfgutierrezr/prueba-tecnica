"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { assets, heroCards } from "@/lib/assets";
import { GhostButton } from "@/components/ui/GhostButton";
import {
  AccessibilityButton,
  HeroCardArrow,
  LoginButton,
  MenuButton,
  SearchIconButton,
} from "@/components/home/Icons";

const ROTATION_INTERVAL_MS = 5000;

function FdicRow({
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: {
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      className={`relative z-50 border-b transition-colors duration-300 ${
        isHovered ? "border-black bg-black" : "border-ifb-border bg-white"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mx-auto flex max-w-[1440px] items-center gap-3 px-6 py-2.5 lg:px-12">
        <Image
          src={isHovered ? assets.logos.fdicDark : assets.logos.fdic}
          alt="FDIC"
          width={255}
          height={123}
          className="h-7 w-auto shrink-0 transition-opacity duration-300"
          priority
        />
        <p
          className={`font-akkurat text-[12px] italic leading-tight transition-colors duration-300 ${
            isHovered ? "text-white" : "text-[#333333]"
          }`}
        >
          FDIC-Insured - Backed by the full faith and credit of the U.S.
          Government
        </p>
      </div>
    </div>
  );
}

function HeroCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const interval = setInterval(() => {
      setIsVisible(false);
      timeoutId = setTimeout(() => {
        setActiveIndex((current) => (current + 1) % heroCards.length);
        setIsVisible(true);
      }, 300);
    }, ROTATION_INTERVAL_MS);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, []);

  const card = heroCards[activeIndex];

  return (
    <div className="flex h-[192px] w-[468px] max-w-full gap-4 overflow-hidden rounded-[var(--radius-card)] bg-[var(--ifb-form-bg)] p-2 font-akkurat opacity-100 backdrop-blur-[30px]">
      <div className="relative h-full w-[42%] shrink-0 overflow-hidden rounded-[8px]">
        {heroCards.map((item, index) => (
          <Image
            key={item.title}
            src={item.image}
            alt={item.title}
            fill
            className={`object-cover transition-opacity duration-300 ${
              index === activeIndex && isVisible ? "opacity-100" : "opacity-0"
            }`}
            sizes="196px"
            priority={index === 0}
          />
        ))}
      </div>
      <div
        className={`flex min-w-0 flex-1 flex-col justify-center gap-2 pr-1 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-akkurat text-[17px] font-medium leading-tight text-white">
            {card.title}
          </h3>
          <HeroCardArrow />
        </div>
        <p className="font-akkurat text-[11px] leading-[1.6] text-white/70">{card.description}</p>
      </div>
    </div>
  );
}

export function HeroSection() {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  return (
    <div className="relative">
      <FdicRow
        isHovered={isHeaderHovered}
        onMouseEnter={() => setIsHeaderHovered(true)}
        onMouseLeave={() => setIsHeaderHovered(false)}
      />

      <section className="relative mx-auto aspect-[1440/845] w-full max-w-[1440px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-100"
        >
          <source src={assets.video.hero} type="video/quicktime" />
          <source src={assets.video.hero} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5" />

        <nav
          className={`absolute left-0 right-0 top-0 z-20 transition-colors duration-300 ${
            isHeaderHovered ? "bg-white" : "bg-transparent"
          }`}
          onMouseEnter={() => setIsHeaderHovered(true)}
          onMouseLeave={() => setIsHeaderHovered(false)}
        >
          <div className="mx-auto flex max-w-[1440px] items-center justify-between px-[56px] py-4">
            <Image
              src={assets.logos.ifb}
              alt="International Finance Bank"
              width={357}
              height={56}
              className={`h-14 w-[357px] max-w-[min(357px,55vw)] object-contain transition-all duration-300 ${
                isHeaderHovered ? "opacity-100" : "brightness-0 invert opacity-100"
              }`}
              priority
            />
            <div className="flex items-center gap-2.5">
              <SearchIconButton variant={isHeaderHovered ? "dark" : "light"} />
              {isHeaderHovered && <LoginButton />}
              <MenuButton variant={isHeaderHovered ? "filled" : "outline"} />
            </div>
          </div>
        </nav>

        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col px-[3.89%] pb-[2.22%] pt-[17.36%]">
          <div className="mt-auto flex flex-col gap-[6.94%] lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-4 font-akkurat text-[24px] leading-normal text-white/90">
                Your World, Seamlessly Connected
              </p>
              <h1 className="font-dm-sans text-[48px] font-normal leading-[1.05] text-white md:text-[72px] lg:text-[108px]">
                International Finance Bank
              </h1>
            </div>

            <div className="flex w-full max-w-[468px] shrink-0 flex-col items-center gap-5 lg:items-end">
              <HeroCard />
              <div className="flex justify-center gap-3">
                <GhostButton>Our team</GhostButton>
                <GhostButton>Contact</GhostButton>
              </div>
            </div>
          </div>
        </div>

        <AccessibilityButton />
      </section>
    </div>
  );
}
