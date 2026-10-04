import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  dark?: boolean;
}) {
  const alignCls = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  return (
    <div className={`flex flex-col gap-3 ${alignCls}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2
        className={`h-display text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${
          dark ? 'text-white' : ''
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl text-[15px] leading-relaxed ${dark ? 'text-white/70' : 'text-muted'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
