import React, { useState } from 'react';
import { CandleItem } from '../types/candle';
import { CANDLES } from '../data/candlesData';
import { ShoppingBag, Check, Sparkles } from 'lucide-react';

interface FeaturedProductProps {
  onAddToCart: (candle: CandleItem, size: 'votive' | 'standard' | 'grande') => void;
  onOpenQuickView: (candle: CandleItem) => void;
}

export const FeaturedProductSection: React.FC<FeaturedProductProps> = ({
  onAddToCart,
  onOpenQuickView,
}) => {
  const candle = CANDLES[0]; // Nocturne Oud & Amber
  const [selectedSize, setSelectedSize] = useState<'votive' | 'standard' | 'grande'>('standard');
  const [isAdded, setIsAdded] = useState(false);

  const price = candle.prices[selectedSize];

  const handleAdd = () => {
    onAddToCart(candle, selectedSize);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1600);
  };

  return (
    <section className="py-24 sm:py-36 bg-[#F7F3EC] border-t border-[#E2D8CA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large High-Resolution Photographic Canvas */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/5] sm:aspect-[1/1] w-full rounded-sm overflow-hidden border border-[#E2D8CA] bg-[#EFE8DD] shadow-[0_24px_64px_rgba(41,37,31,0.08)] img-zoom-container">
              <img
                src="/images/nocturne-oud.jpg"
                alt="Nocturne Oud & Amber burning on textured stone slab with golden woodsmoke"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute top-6 left-6 px-3.5 py-1.5 bg-[#FCFAF6]/90 backdrop-blur-xs border border-[#E2D8CA] text-[10px] uppercase tracking-[0.2em] font-mono text-[#29251F]">
                Flagship Creation
              </div>
            </div>
          </div>

          {/* Right: Editorial Product Details & Purchase Module */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-3">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#987641] font-medium font-sans">
                Signature Reserve
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#29251F] leading-tight">
                Nocturne Oud <br />
                <span className="italic font-normal">& Amber</span>
              </h2>
              <p className="font-serif italic text-xl text-[#71695E]">
                A deeper kind of warmth.
              </p>
            </div>

            <p className="text-base text-[#71695E] font-light leading-relaxed">
              Smoked citrus, dark agarwood, and Baltic amber compose a fragrance made for slow evenings. Poured into heavyweight smoked glass with an FSC-certified cherry wood wick that crackles like fireside embers.
            </p>

            {/* Size Variant Selector */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-wider text-[#958A7D] font-mono block">
                Select Vessel Size
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setSelectedSize('votive')}
                  className={`p-3 text-left border rounded-sm transition-all ${
                    selectedSize === 'votive'
                      ? 'bg-[#40352C] text-[#FCFAF6] border-[#40352C]'
                      : 'bg-[#FCFAF6] text-[#29251F] border-[#E2D8CA] hover:border-[#987641]'
                  }`}
                >
                  <div className="text-xs font-semibold">Petite Votive</div>
                  <div className="text-[11px] opacity-80 font-mono mt-0.5">$28 USD</div>
                </button>
                <button
                  onClick={() => setSelectedSize('standard')}
                  className={`p-3 text-left border rounded-sm transition-all ${
                    selectedSize === 'standard'
                      ? 'bg-[#40352C] text-[#FCFAF6] border-[#40352C]'
                      : 'bg-[#FCFAF6] text-[#29251F] border-[#E2D8CA] hover:border-[#987641]'
                  }`}
                >
                  <div className="text-xs font-semibold">Standard 8.5 oz</div>
                  <div className="text-[11px] opacity-80 font-mono mt-0.5">$64 USD</div>
                </button>
                <button
                  onClick={() => setSelectedSize('grande')}
                  className={`p-3 text-left border rounded-sm transition-all ${
                    selectedSize === 'grande'
                      ? 'bg-[#40352C] text-[#FCFAF6] border-[#40352C]'
                      : 'bg-[#FCFAF6] text-[#29251F] border-[#E2D8CA] hover:border-[#987641]'
                  }`}
                >
                  <div className="text-xs font-semibold">Grande 3-Wick</div>
                  <div className="text-[11px] opacity-80 font-mono mt-0.5">$98 USD</div>
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={handleAdd}
                className={`flex-1 py-4 px-6 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  isAdded
                    ? 'bg-[#9AA28B] text-[#FCFAF6]'
                    : 'bg-[#40352C] hover:bg-[#29251F] text-[#FCFAF6] shadow-md hover:shadow-lg'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" /> Added to Bag
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" /> Add to Bag · ${price} USD
                  </>
                )}
              </button>

              <button
                onClick={() => onOpenQuickView(candle)}
                className="py-4 px-6 border border-[#E2D8CA] bg-[#FCFAF6] hover:bg-[#EFE8DD] text-xs uppercase tracking-[0.2em] text-[#29251F] transition-colors"
              >
                Explore Scent Notes
              </button>
            </div>

            <div className="flex items-center gap-4 text-xs text-[#958A7D] pt-2 font-light">
              <span>65 Hours Burn Time</span>
              <span aria-hidden="true">·</span>
              <span>Cherry Wood Wick</span>
              <span aria-hidden="true">·</span>
              <span>100% Coconut & Beeswax</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
