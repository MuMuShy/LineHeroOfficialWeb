import React from 'react';
import { trackCtaClick } from '../services/analytics';

const BG_IMG = 'https://image.linehero.tw/official_web/linehero_landing_v3.png';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-black">
      {/* ===================== CINEMATIC BACKGROUND ===================== */}
      <div className="absolute inset-0 z-0">
        {/* Atmospheric landscape */}
        <img
          src={BG_IMG}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-[70%_center] md:object-center"
        />
        {/* Mobile: full darken overlay */}
        <div className="absolute inset-0 bg-black/65 md:hidden" />
        {/* Desktop: left side darken for text legibility */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
        {/* Subtle top & bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
        {/* Subtle red ember glow */}
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-hero-crimson/15 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-hero-gold/[0.06] rounded-full blur-[160px]" />
        {/* Film grain scanlines */}
        <div className="absolute inset-0 scanlines opacity-20 pointer-events-none" />
      </div>

      {/* ===================== ORNAMENTAL FRAME ===================== */}
      <div className="absolute inset-6 md:inset-10 z-[2] pointer-events-none">
        {/* Top-left corner */}
        <div className="absolute top-0 left-0 w-20 h-20">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-hero-gold/80 to-transparent" />
          <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-hero-gold/80 to-transparent" />
        </div>
        {/* Top-right */}
        <div className="absolute top-0 right-0 w-20 h-20">
          <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-hero-gold/80 to-transparent" />
          <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-hero-gold/80 to-transparent" />
        </div>
        {/* Bottom-left */}
        <div className="absolute bottom-0 left-0 w-20 h-20">
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-hero-gold/80 to-transparent" />
          <div className="absolute bottom-0 left-0 h-full w-[1px] bg-gradient-to-t from-hero-gold/80 to-transparent" />
        </div>
        {/* Bottom-right */}
        <div className="absolute bottom-0 right-0 w-20 h-20">
          <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-hero-gold/80 to-transparent" />
          <div className="absolute bottom-0 right-0 h-full w-[1px] bg-gradient-to-t from-hero-gold/80 to-transparent" />
        </div>
      </div>

      {/* ===================== VERTICAL RIGHT TEXT ===================== */}
      <div className="hidden xl:flex absolute right-10 top-1/2 -translate-y-1/2 z-[4] flex-col items-center gap-6">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-hero-gold/60 to-transparent" />
        <div className="writing-vertical font-en-wide text-[10px] text-hero-gold/80">
          LINE RPG × NO DOWNLOAD
        </div>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-hero-gold/60 to-transparent" />
      </div>

      {/* ===================== MAIN CONTENT ===================== */}
      <div className="relative z-[5] w-full max-w-7xl mx-auto px-6 md:px-20 pt-36 md:pt-0 pb-36 md:pb-0">
        <div className="max-w-[640px] text-center md:text-left">
          {/* Small lead */}
          <div className="flex items-center gap-4 mb-8 md:mb-10 justify-center md:justify-start">
            <div className="h-px w-10 md:w-12 bg-hero-gold" />
            <span className="font-en-wide text-[9px] md:text-[10px] text-hero-gold">A New World Awaits</span>
            <div className="h-px w-10 md:hidden bg-hero-gold" />
          </div>

          {/* Latin italic flourish */}
          <div
            className="font-en-display italic text-hero-gold/70 mb-2 md:mb-3 leading-none"
            style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.6rem)' }}
            aria-hidden="true"
          >
            Line Hero —
          </div>

          {/* Main H1 — 視覺可見的語意標題 */}
          <h1
            className="font-serif-cn text-white leading-[1.02]"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.75rem)' }}
          >
            <span className="md:whitespace-nowrap">無盡<span className="text-hero-gold">冒險</span></span>
            <span className="sr-only"> — 免下載 LINE RPG</span>
          </h1>

          {/* Divider with ornament */}
          <div className="mt-6 md:mt-7 flex items-center gap-3 justify-center md:justify-start">
            <div className="h-px w-8 md:w-10 bg-hero-gold" />
            <div className="w-1.5 h-1.5 bg-hero-gold rotate-45" />
            <div className="h-px w-20 md:w-28 bg-hero-gold/30" />
          </div>

          {/* Tagline */}
          <p className="mt-6 md:mt-7 text-sm md:text-lg text-gray-300 leading-[1.9] max-w-lg mx-auto md:mx-0 font-light tracking-wide">
            打開 LINE，<span className="text-white">無盡冒險即刻開始</span>。
            <br className="hidden sm:block" />
            免下載、免安裝的深淵奇幻 RPG。
          </p>

          {/* CTA row */}
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-10 justify-center md:justify-start">
            <a
              href="https://lin.ee/3JlUhak"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaClick('立即開始', 'hero', 'https://lin.ee/3JlUhak')}
              className="group relative inline-flex items-center"
            >
              <span className="absolute -inset-[6px] border border-hero-gold/25 group-hover:border-hero-gold/60 transition-colors" />
              <span className="relative bg-hero-gold text-black font-serif-cn text-sm tracking-[0.35em] px-10 py-4 flex items-center gap-4 group-hover:bg-hero-gold-glow transition-colors">
                立即開玩
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>

            <a
              href="#features"
              className="group text-white/60 hover:text-hero-gold font-en-wide text-[10px] transition-colors flex items-center gap-3"
            >
              <span>Discover</span>
              <span className="w-6 h-px bg-white/40 group-hover:bg-hero-gold group-hover:w-10 transition-all" />
            </a>
          </div>
        </div>
      </div>

      {/* ===================== BOTTOM INFO STRIP ===================== */}
      <div className="absolute bottom-0 left-0 right-0 z-[4] border-t border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-5 flex items-center justify-between gap-6 text-xs">
          <div className="flex items-center gap-6 md:gap-10">
            <div>
              <div className="font-en-wide text-[9px] text-white/40 mb-0.5">PLATFORM</div>
              <div className="font-serif-cn text-white text-sm">LINE ／ WEB</div>
            </div>
            <div className="hidden sm:block h-10 w-px bg-white/10" />
            <div className="hidden sm:block">
              <div className="font-en-wide text-[9px] text-white/40 mb-0.5">GENRE</div>
              <div className="font-serif-cn text-white text-sm">DARK FANTASY RPG</div>
            </div>
            <div className="hidden md:block h-10 w-px bg-white/10" />
            <div className="hidden md:block">
              <div className="font-en-wide text-[9px] text-white/40 mb-0.5">PRICE</div>
              <div className="font-serif-cn text-white text-sm">FREE TO PLAY</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex items-center gap-3 text-white/50">
            <span className="font-en-wide text-[9px] hidden md:inline">SCROLL</span>
            <div className="w-6 h-10 rounded-full border border-white/30 flex items-start justify-center p-1.5">
              <div className="w-1 h-2 rounded-full bg-white/60 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
