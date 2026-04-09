import React from 'react';

interface Props {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
}

/**
 * 統一的 section header：金線 + Unbounded eyebrow + Noto Sans 900 中文主標
 * 讓 Features / Characters / Gallery 視覺一致
 */
const SectionHeader: React.FC<Props> = ({ eyebrow, title, description, align = 'left' }) => {
  const alignCls = align === 'center' ? 'items-center text-center' : '';
  return (
    <header className={`mb-14 md:mb-20 ${alignCls}`}>
      <div className={`flex items-center gap-4 mb-5 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="h-px w-12 bg-hero-gold" aria-hidden="true" />
        <span className="font-en-wide text-[10px] text-hero-gold">{eyebrow}</span>
        {align === 'center' && <div className="h-px w-12 bg-hero-gold" aria-hidden="true" />}
      </div>
      <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 ${align === 'center' ? 'md:flex-col md:items-center' : ''}`}>
        <h2 className="font-serif-cn text-5xl md:text-7xl text-white leading-none">
          {title}
        </h2>
        {description && (
          <p className={`text-gray-400 text-base md:text-lg max-w-md ${align === 'center' ? 'mx-auto' : ''}`}>
            {description}
          </p>
        )}
      </div>
    </header>
  );
};

export default SectionHeader;
