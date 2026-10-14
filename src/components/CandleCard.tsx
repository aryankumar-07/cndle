import React, { useState } from 'react';
import { CandleItem } from '../types/candle';
import { Plus, Check, Eye } from 'lucide-react';

interface CandleCardProps {
  candle: CandleItem;
  onOpenQuickView: (candle: CandleItem) => void;
  onAddToCart: (candle: CandleItem, size: 'standard') => void;
}

export const CandleCard: React.FC<CandleCardProps> = ({
  candle,
  onOpenQuickView,
  onAddToCart,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(candle, 'standard');
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onOpenQuickView(candle)}
      className="group flex flex-col justify-between bg-[#FCFAF6] border border-[#E2D8CA] hover:border-[#C4A56A]/60 transition-all duration-500 cursor-pointer overflow-hidden shadow-[0_4px_16px_rgba(41,37,31,0.03)] hover:shadow-[0_12px_32px_rgba(41,37,31,0.08)]"
    >
      {/* 1. Large Real Product Photograph */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EFE8DD]">
        <img
          src={candle.image}
          alt={`${candle.name} luxury candle vessel in natural setting`}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Discreet Quick Actions overlay on hover */}
        <div
          className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#29251F]/70 via-[#29251F]/30 to-transparent transition-opacity duration-300 flex items-center justify-between ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenQuickView(candle);
            }}
            className="text-[11px] uppercase tracking-wider text-[#FCFAF6] hover:text-[#C4A56A] transition-colors flex items-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Notes</span>
          </button>

          <button
            onClick={handleAdd}
            className={`py-1.5 px-3 rounded-none text-[11px] uppercase tracking-wider font-medium transition-all flex items-center gap-1.5 ${
              justAdded
                ? 'bg-[#9AA28B] text-[#FCFAF6]'
                : 'bg-[#FCFAF6] text-[#29251F] hover:bg-[#C4A56A] hover:text-[#FCFAF6]'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Quick Add</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 2. Editorial Product Content */}
      <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
        <div>
          {/* Unboxed Fragrance Family */}
          <div className="flex items-center justify-between text-[11px] text-[#958A7D] uppercase tracking-[0.16em] mb-1.5 font-sans">
            <span>{candle.fragranceFamily}</span>
            <span>{candle.burnTimeHours}H</span>
          </div>

          {/* Product Name */}
          <h3 className="font-serif text-2xl font-normal text-[#29251F] group-hover:text-[#987641] transition-colors leading-snug">
            {candle.name}
          </h3>

          {/* Scent Summary */}
          <p className="text-xs text-[#71695E] font-light mt-1.5 line-clamp-1">
            {candle.tagline}
          </p>

          {/* Subtle Notes Breakdown */}
          <div className="flex items-center gap-1.5 text-[11px] text-[#958A7D] mt-2 font-light">
            <span>{candle.topNotes[0]?.name}</span>
            <span aria-hidden="true" className="text-[#E2D8CA]">·</span>
            <span>{candle.heartNotes[0]?.name}</span>
            <span aria-hidden="true" className="text-[#E2D8CA]">·</span>
            <span>{candle.baseNotes[0]?.name}</span>
          </div>
        </div>

        {/* Price & Action Footer */}
        <div className="pt-4 border-t border-[#EFE8DD] flex items-center justify-between">
          <span className="font-mono text-sm text-[#29251F] font-semibold tabular-nums">
            ${candle.prices.standard} <span className="text-[10px] text-[#958A7D] font-normal uppercase font-sans">USD</span>
          </span>
          <span className="text-[11px] uppercase tracking-wider text-[#987641] font-medium group-hover:translate-x-1 transition-transform duration-300">
            Explore →
          </span>
        </div>
      </div>
    </div>
  );
};
