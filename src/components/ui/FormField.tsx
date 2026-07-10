import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type FormFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function FormField({ label, className = "", ...props }: FormFieldProps) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <input
        placeholder={label}
        className={`h-12 w-full rounded-[var(--radius-input)] border-0 bg-white px-4 text-sm text-ifb-navy placeholder:text-ifb-gray-muted focus:outline-none focus:ring-2 focus:ring-ifb-cyan/40 ${className}`}
        {...props}
      />
    </label>
  );
}

type FormTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

export function FormTextarea({
  label,
  className = "",
  ...props
}: FormTextareaProps) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <textarea
        placeholder={label}
        rows={4}
        className={`w-full resize-none rounded-[var(--radius-input)] border-0 bg-white px-4 py-3 text-sm text-ifb-navy placeholder:text-ifb-gray-muted focus:outline-none focus:ring-2 focus:ring-ifb-cyan/40 ${className}`}
        {...props}
      />
    </label>
  );
}
