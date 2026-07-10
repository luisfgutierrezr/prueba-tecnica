"use client";

import Image from "next/image";
import { useState } from "react";
import { assets } from "@/lib/assets";
import { FormField, FormTextarea } from "@/components/ui/FormField";
import { GhostButton } from "@/components/ui/GhostButton";

export function ContactSection() {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section className="relative min-h-[700px] w-full overflow-hidden py-20 lg:py-28">
      <Image
        src={assets.images.contact}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="w-full max-w-[580px] rounded-[var(--radius-card)] bg-[var(--ifb-form-bg)] p-8 font-akkurat backdrop-blur-[30px] sm:p-10 [&_button]:font-akkurat [&_input]:font-akkurat [&_textarea]:font-akkurat">
          <div className="mb-8 text-center">
            <div
              className="mx-auto mb-4 h-4 w-4 rounded-[3px] bg-white"
              aria-hidden="true"
            />
            <h2 className="font-akkurat text-[32px] font-normal leading-tight text-white">
              Connect with a Preferred Banker
            </h2>
            <p className="mt-3 font-akkurat text-[14px] leading-relaxed text-white/70">
              Get expert advise and personalized solutions tailored to your
              needs.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField label="Complete Name" name="name" required />
              <FormField
                label="Email Address"
                name="email"
                type="email"
                required
              />
              <FormField label="Phone Number" name="phone" type="tel" />
              <FormField label="Address" name="address" />
            </div>

            <FormTextarea label="Type your message here" name="message" />

            <div className="space-y-3 pt-2">
              <label className="flex items-start gap-3 text-xs leading-relaxed text-white/70">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/40 accent-ifb-cyan"
                />
                <span>
                  Accept terms and condition <br />
                  You agree to our Terms of Service and Privacy Policy.
                </span>
              </label>
              <label className="flex items-start gap-3 text-xs leading-relaxed text-white/70">
                <input
                  type="checkbox"
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/40 accent-ifb-cyan"
                />
                <span>
                I have not included personal or time-sensitive information in this form such as account numbers, login information or other financial information. 
                </span>
              </label>
            </div>

            <p className="text-[10px] leading-relaxed text-white/50">
            Please note: Information sent through this information request form is not secure. Time-sensitive requests, sensitive information, or private information, such as account numbers, should not be sent through this information request form. If you would like to send us a secure message that would include sensitive information, please log in to your online banking account and visit our Message Center. For further assistance, please contact one of our Banking Centers.
            </p>

            <div className="flex justify-center pt-2">
              <GhostButton
                type="submit"
                className="min-w-[200px] border-white/80 text-white"
              >
                Send
              </GhostButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
