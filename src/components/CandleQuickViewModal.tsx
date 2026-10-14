import React, { useState } from 'react';
import { CandleItem } from '../types/candle';
import { X, Check, ShoppingBag, ShieldCheck, Sparkles } from 'lucide-react';

interface QuickViewProps {
  candle: CandleItem | null;
  onClose: () => void;
  onAddToCart: (candle: CandleItem, size: 'votive' | 'standard' | 'grande', quantity: number) => void;
}

export const CandleQuickViewModal: React.FC<QuickViewProps> = ({
  candle,
  onClose,
  onAddToCart,
}) => {
  if (!candle) return null;

  const [selectedSize, setSelectedSize] = useState<'votive' | 'standard' | 'grande'>('standard');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const price = candle.prices[selectedSize];

  const handleAdd = () => {
    onAddToCart(candle, selectedSize, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div
      className="fixed inset-0 z-[9990] flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#FCFAF6] border border-[#E2D8CA] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col rounded-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-[#E2D8CA] bg-[#F7F3EC] shrink-0">
          <div className="flex items-center gap-2 text-xs text-[#71695E] uppercase tracking-wider font-mono">
            <span>{candle.collection}</span>
            <span aria-hidden="true">·</span>
            <span>{candle.fragranceFamily}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-sm hover:bg-[#EFE8DD] text-[#71695E] hover:text-[#29251F] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Large Real Product Photography */}
            <div className="md:col-span-6 relative aspect-[4/5] bg-[#EFE8DD] overflow-hidden border border-[#E2D8CA] rounded-sm">
              <img
                src={candle.image}
                alt={candle.name}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Right: Contiguous Purchase Module */}
            <div className="md:col-span-6 space-y-6 text-left">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#29251F] mb-1">
                  {candle.name}
                </h2>
                <p className="text-sm font-serif italic text-[#71695E]">
                  "{candle.tagline}"
                </p>
              </div>

              <div className="font-mono text-2xl font-semibold text-[#29251F] tabular-nums">
                ${price} <span className="text-xs text-[#958A7D] font-sans font-normal uppercase">USD</span>
              </div>

              <p className="text-sm text-[#71695E] font-light leading-relaxed">
                {candle.story}
              </p>

              {/* Vessel Size Selector */}
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-wider text-[#958A7D] font-mono block">
                  Select Vessel Size
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setSelectedSize('votive')}
                    className={`p-2.5 text-left border rounded-sm transition-all ${
                      selectedSize === 'votive'
                        ? 'bg-[#40352C] text-[#FCFAF6] border-[#40352C]'
                        : 'bg-[#F7F3EC] text-[#29251F] border-[#E2D8CA] hover:border-[#987641]'
                    }`}
                  >
                    <div className="text-xs font-semibold">Petite Votive</div>
                    <div className="text-[11px] opacity-80 font-mono">3.5 oz · $28</div>
                  </button>

                  <button
                    onClick={() => setSelectedSize('standard')}
                    className={`p-2.5 text-left border rounded-sm transition-all ${
                      selectedSize === 'standard'
                        ? 'bg-[#40352C] text-[#FCFAF6] border-[#40352C]'
                        : 'bg-[#F7F3EC] text-[#29251F] border-[#E2D8CA] hover:border-[#987641]'
                    }`}
                  >
                    <div className="text-xs font-semibold">Standard 8.5 oz</div>
                    <div className="text-[11px] opacity-80 font-mono">65h · $64</div>
                  </button>

                  <button
                    onClick={() => setSelectedSize('grande')}
                    className={`p-2.5 text-left border rounded-sm transition-all ${
                      selectedSize === 'grande'
                        ? 'bg-[#40352C] text-[#FCFAF6] border-[#40352C]'
                        : 'bg-[#F7F3EC] text-[#29251F] border-[#E2D8CA] hover:border-[#987641]'
                    }`}
                  >
                    <div className="text-xs font-semibold">Grande 3-Wick</div>
                    <div className="text-[11px] opacity-80 font-mono">14 oz · $98</div>
                  </button>
                </div>
              </div>

              {/* Quantity Stepper & Add to Bag */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex items-center border border-[#E2D8CA] bg-[#F7F3EC] rounded-sm p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center text-[#71695E] hover:text-[#29251F] text-base"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-mono text-sm tabular-nums text-[#29251F] font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center text-[#71695E] hover:text-[#29251F] text-base"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className={`flex-1 py-3.5 px-6 text-xs uppercase tracking-[0.2em] font-medium transition-all flex items-center justify-center gap-2 ${
                    added
                      ? 'bg-[#9AA28B] text-[#FCFAF6]'
                      : 'bg-[#40352C] hover:bg-[#29251F] text-[#FCFAF6] shadow-md hover:shadow-lg'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" /> Added to Bag
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" /> Add to Bag · ${(price * quantity).toFixed(0)} USD
                    </>
                  )}
                </button>
              </div>

              {/* Olfactory Notes Pill-free list */}
              <div className="pt-4 border-t border-[#E2D8CA] space-y-2 text-xs">
                <div className="text-[11px] uppercase tracking-wider text-[#958A7D] font-mono">
                  Fragrance Composition
                </div>
                <div className="text-[#71695E] space-y-1 font-light">
                  <div><strong>Top:</strong> {candle.topNotes.map((n) => n.name).join(', ')}</div>
                  <div><strong>Heart:</strong> {candle.heartNotes.map((n) => n.name).join(', ')}</div>
                  <div><strong>Base:</strong> {candle.baseNotes.map((n) => n.name).join(', ')}</div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4 text-xs text-[#958A7D] font-light">
                <span>100% Coconut & Beeswax</span>
                <span aria-hidden="true">·</span>
                <span>Cherry Wood Wick</span>
                <span aria-hidden="true">·</span>
                <span>Reusable Vessel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
