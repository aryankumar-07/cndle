import React, { useState } from 'react';
import { CandleItem } from '../types/candle';
import { CANDLES } from '../data/candlesData';
import { CandleCard } from './CandleCard';

interface CollectionProps {
  onOpenQuickView: (candle: CandleItem) => void;
  onAddToCart: (candle: CandleItem, size: 'standard') => void;
}

export const CollectionSection: React.FC<CollectionProps> = ({
  onOpenQuickView,
  onAddToCart,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Scents' },
    { id: 'Woody & Smoky', label: 'Woody & Smoky' },
    { id: 'Earthy & Sensual', label: 'Earthy & Sensual' },
    { id: 'Botanical & Lush', label: 'Botanical & Lush' },
    { id: 'Warm & Spiced', label: 'Warm & Spiced' },
    { id: 'Floral & Mysterious', label: 'Floral & Mysterious' },
  ];

  const filteredCandles = activeFilter === 'all'
    ? CANDLES
    : CANDLES.filter((c) => c.fragranceFamily === activeFilter);

  return (
    <section id="collection" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#E2D8CA]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C4A56A]" />
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#71695E] font-medium font-sans">
              The Signature Collection
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#29251F] leading-tight">
            Scents to make a place <span className="italic font-normal">your own.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#71695E] font-light leading-relaxed">
            Discover fragrances shaped by woods, botanicals, resins, and the quiet beauty of everyday rituals.
          </p>
        </div>

        {/* Clean, Restrained Filter Row */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#E2D8CA] pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-3 py-1.5 text-xs tracking-wider uppercase transition-all whitespace-nowrap font-medium ${
                activeFilter === cat.id
                  ? 'text-[#29251F] border-b-2 border-[#987641] font-semibold -mb-[9px]'
                  : 'text-[#958A7D] hover:text-[#29251F]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3-Column Editorial Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {filteredCandles.map((candle) => (
          <CandleCard
            key={candle.id}
            candle={candle}
            onOpenQuickView={onOpenQuickView}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
};
