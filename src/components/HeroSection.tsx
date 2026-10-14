import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onDiscoverClick: () => void;
  onExploreCraftClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onDiscoverClick,
  onExploreCraftClick,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#F7F3EC] pt-8 pb-20 md:pt-16 md:pb-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Bold Editorial Typography & Vision */}
        <div className="lg:col-span-6 space-y-8 text-left z-10">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C4A56A]" />
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#71695E] font-medium font-sans">
              A House of Botanical Fragrance
            </span>
          </div>

          {/* Oversized Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[96px] font-serif font-light text-[#29251F] leading-[0.96] tracking-[-0.02em] text-balance">
            A quieter kind <br />
            <span className="font-normal italic text-[#987641]">of luxury.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-[#71695E] max-w-lg font-light leading-relaxed">
            Hand-poured candles, composed with botanical waxes and evocative fragrance notes to bring warmth, stillness, and intention into the everyday.
          </p>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onDiscoverClick}
              className="group px-8 py-4 bg-[#40352C] hover:bg-[#29251F] text-[#FCFAF6] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_8px_20px_rgba(64,53,44,0.12)] hover:shadow-[0_12px_28px_rgba(64,53,44,0.2)]"
            >
              <span>Discover the Collection</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[#C4A56A]" />
            </button>

            <button
              onClick={onExploreCraftClick}
              className="group px-6 py-4 text-xs uppercase tracking-[0.2em] text-[#71695E] hover:text-[#29251F] transition-colors flex items-center justify-center gap-2 font-medium"
            >
              <span>Explore Our Craft</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5 text-[#958A7D]" />
            </button>
          </div>

          {/* Architectural Notes Banner */}
          <div className="pt-8 border-t border-[#E2D8CA] grid grid-cols-3 gap-6 max-w-md">
            <div>
              <div className="font-serif text-2xl text-[#29251F] font-normal">65H</div>
              <div className="text-[10px] uppercase tracking-wider text-[#958A7D] mt-0.5">Clean Burn</div>
            </div>
            <div>
              <div className="font-serif text-2xl text-[#29251F] font-normal">100%</div>
              <div className="text-[10px] uppercase tracking-wider text-[#958A7D] mt-0.5">Natural Wax</div>
            </div>
            <div>
              <div className="font-serif text-2xl text-[#29251F] font-normal">Grasse</div>
              <div className="text-[10px] uppercase tracking-wider text-[#958A7D] mt-0.5">Formulations</div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Real Photography Composition */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full max-w-xl mx-auto img-zoom-container bg-[#EFE8DD] rounded-sm overflow-hidden shadow-[0_24px_64px_rgba(41,37,31,0.08)]">
            <img
              src="/images/hero-candle.jpg"
              alt="Artisanal hand-poured candle burning softly on neutral limestone pedestal in warm morning sunlight"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />

            {/* Subtle editorial photo caption */}
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#FCFAF6]/90 backdrop-blur-xs border border-[#E2D8CA]/60 flex items-center justify-between text-xs">
              <div>
                <span className="font-serif text-sm text-[#29251F] block font-medium">Nocturne Oud & Amber</span>
                <span className="text-[10px] uppercase tracking-wider text-[#958A7D]">Smoked Cedarwood & Baltic Amber</span>
              </div>
              <span className="font-mono text-xs text-[#987641] font-semibold">$64</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
