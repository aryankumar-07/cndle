import React, { useState } from 'react';
import { CandleItem, GiftBoxState } from '../types/candle';
import { CANDLES } from '../data/candlesData';
import { Gift, Check, Sparkles, Plus, Trash2 } from 'lucide-react';

interface GiftBoxBuilderProps {
  onAddGiftBoxToCart: (giftBox: GiftBoxState, price: number) => void;
}

export const GiftBoxBuilder: React.FC<GiftBoxBuilderProps> = ({ onAddGiftBoxToCart }) => {
  const [boxState, setBoxState] = useState<GiftBoxState>({
    selectedCandles: ['nocturne-oud', 'santal-velours', 'ambre-dore'],
    boxStyle: 'amber-linen',
    waxSeal: 'monogram',
    ribbon: 'velvet-gold',
    giftMessage: 'May these gentle flames bring stillness and warmth to your home.',
    recipientName: 'Claire',
  });

  const [activeSlot, setActiveSlot] = useState<number | null>(null);
  const [isAdded, setIsAdded] = useState(false);

  const bundlePrice = 175;
  const regularTotal = 190;

  const handleSelectForSlot = (candleId: string) => {
    if (activeSlot !== null) {
      const newCandles = [...boxState.selectedCandles];
      newCandles[activeSlot] = candleId;
      setBoxState({ ...boxState, selectedCandles: newCandles });
      setActiveSlot(null);
    }
  };

  const handleRemoveFromSlot = (index: number) => {
    const newCandles = [...boxState.selectedCandles];
    newCandles[index] = null;
    setBoxState({ ...boxState, selectedCandles: newCandles });
  };

  const isComplete = boxState.selectedCandles.every((c) => c !== null);

  const handleAdd = () => {
    if (!isComplete) return;
    onAddGiftBoxToCart(boxState, bundlePrice);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const getCandleById = (id: string | null) => {
    if (!id) return null;
    return CANDLES.find((c) => c.id === id) || null;
  };

  return (
    <section id="gift-atelier" className="py-24 sm:py-36 bg-[#FCFAF6] border-t border-[#E2D8CA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C4A56A]" />
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#71695E] font-medium font-sans">
              The Art of Gifting
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#29251F]">
            A gift, <span className="italic font-normal">considered.</span>
          </h2>
          <p className="text-base text-[#71695E] font-light leading-relaxed">
            Three signature scents, thoughtfully presented in woven linen and made personal with a handwritten note.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Real Gift Photography + 3 Vessel Slots */}
          <div className="lg:col-span-7 space-y-8">
            {/* Real Photograph of Luxury Gift Presentation */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-sm overflow-hidden border border-[#E2D8CA] bg-[#EFE8DD] shadow-[0_16px_40px_rgba(41,37,31,0.06)] img-zoom-container">
              <img
                src="/images/gift-set.jpg"
                alt="Luxury three-candle gift set in woven linen box with silk ribbon"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 bg-[#FCFAF6]/90 backdrop-blur-xs px-3.5 py-1.5 text-xs text-[#29251F] font-serif border border-[#E2D8CA]/60">
                Bespoke Atelier Presentation Trio
              </div>
            </div>

            {/* 3 Interactive Vessel Slot Cards */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#958A7D] uppercase tracking-wider font-mono">
                <span>Selected Trio ({boxState.selectedCandles.filter(Boolean).length}/3)</span>
                <span className="text-[#987641] font-semibold font-sans">Saves $15</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[0, 1, 2].map((slotIdx) => {
                  const candle = getCandleById(boxState.selectedCandles[slotIdx]);
                  return (
                    <div
                      key={slotIdx}
                      onClick={() => setActiveSlot(slotIdx)}
                      className={`p-4 rounded-sm border transition-all cursor-pointer flex flex-col justify-between min-h-[160px] ${
                        candle
                          ? 'bg-[#FCFAF6] border-[#E2D8CA] hover:border-[#987641]'
                          : 'bg-[#F7F3EC] border-dashed border-[#D8CEBE] hover:border-[#987641]'
                      } ${activeSlot === slotIdx ? 'ring-2 ring-[#987641]' : ''}`}
                    >
                      <div className="flex justify-between items-center text-[10px] text-[#958A7D] uppercase font-mono">
                        <span>Vessel 0{slotIdx + 1}</span>
                        {candle && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveFromSlot(slotIdx);
                            }}
                            className="text-[#958A7D] hover:text-[#40352C] transition-colors"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>

                      {candle ? (
                        <div className="my-2 space-y-1">
                          <h4 className="font-serif text-base text-[#29251F] font-normal leading-snug">
                            {candle.name}
                          </h4>
                          <p className="text-[11px] text-[#71695E] font-light truncate">
                            {candle.fragranceFamily}
                          </p>
                        </div>
                      ) : (
                        <div className="my-auto text-center py-4 text-[#958A7D]">
                          <Plus className="w-5 h-5 mx-auto mb-1 text-[#987641]" />
                          <span className="text-xs font-medium text-[#29251F] block">Select Scent</span>
                          <span className="text-[10px]">Click to assign</span>
                        </div>
                      )}

                      <span className="text-[10px] text-[#987641] font-mono">
                        {candle ? '8.5 oz Standard' : 'Empty'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Candle Selector Dropdown Drawer if Slot is Active */}
            {activeSlot !== null && (
              <div className="p-5 bg-[#F7F3EC] border border-[#C4A56A] rounded-sm space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#29251F]">
                    Assign Scent to Vessel 0{activeSlot + 1}
                  </span>
                  <button
                    onClick={() => setActiveSlot(null)}
                    className="text-xs text-[#71695E] hover:text-[#29251F]"
                  >
                    Cancel
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {CANDLES.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => handleSelectForSlot(c.id)}
                      className="p-3 text-left border border-[#E2D8CA] bg-[#FCFAF6] hover:bg-[#EFE8DD] rounded-sm transition-all"
                    >
                      <div className="font-serif text-sm text-[#29251F] font-normal truncate">{c.name}</div>
                      <div className="text-[10px] text-[#958A7D] truncate">{c.fragranceFamily}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Live Calligraphy Note Card Preview */}
            <div className="p-6 bg-[#FCFAF6] border border-[#E2D8CA] rounded-sm space-y-3 shadow-xs">
              <div className="flex items-baseline justify-between text-[11px] text-[#958A7D] uppercase tracking-wider font-mono">
                <span>Handwritten Note Card</span>
                <span>Sealed Envelope</span>
              </div>
              <div className="p-5 bg-[#F7F3EC] border border-[#EFE8DD] rounded-sm font-serif italic text-base leading-relaxed text-[#29251F]">
                <div className="text-xs not-italic font-sans uppercase tracking-wider text-[#987641] mb-2 font-medium">
                  Dearest {boxState.recipientName || 'Friend'},
                </div>
                "{boxState.giftMessage || 'Warmest wishes from our maison to yours.'}"
                <div className="mt-4 text-right text-xs not-italic font-mono text-[#958A7D]">
                  — L'Ambre Atelier, Paris
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Customization Controls & Purchase */}
          <div className="lg:col-span-5 space-y-8 bg-[#FCFAF6] p-8 border border-[#E2D8CA] rounded-sm shadow-[0_8px_24px_rgba(41,37,31,0.04)]">
            <div>
              <h3 className="font-serif text-3xl font-light text-[#29251F]">Packaging Details</h3>
              <p className="text-xs text-[#71695E] font-light mt-1">Personalize the materials and dedication note.</p>
            </div>

            {/* 1. Box Wrap */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-wider text-[#958A7D] font-mono block">
                Presentation Box Finish
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'amber-linen', label: 'Warm Linen', color: 'bg-[#E8DFC8]' },
                  { id: 'obsidian', label: 'Noir Matte', color: 'bg-[#29251F]' },
                  { id: 'botanical-olive', label: 'Sage Moss', color: 'bg-[#9AA28B]' },
                ].map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setBoxState({ ...boxState, boxStyle: style.id as GiftBoxState['boxStyle'] })}
                    className={`p-3 text-left border rounded-sm transition-all ${
                      boxState.boxStyle === style.id
                        ? 'border-[#40352C] bg-[#F7F3EC]'
                        : 'border-[#E2D8CA] bg-[#FCFAF6] hover:border-[#987641]'
                    }`}
                  >
                    <div className={`w-3.5 h-3.5 rounded-full ${style.color} mb-1.5 border border-[#E2D8CA]`} />
                    <div className="text-xs font-medium text-[#29251F]">{style.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Recipient Name */}
            <div className="space-y-1">
              <label className="text-[11px] uppercase tracking-wider text-[#958A7D] font-mono block">
                Recipient Name
              </label>
              <input
                type="text"
                value={boxState.recipientName}
                onChange={(e) => setBoxState({ ...boxState, recipientName: e.target.value })}
                className="w-full px-4 py-3 bg-[#F7F3EC] border border-[#E2D8CA] text-sm text-[#29251F] rounded-sm focus:outline-none focus:border-[#987641]"
                placeholder="e.g. Claire, Julian..."
              />
            </div>

            {/* 3. Gift Note */}
            <div className="space-y-1">
              <label className="text-[11px] uppercase tracking-wider text-[#958A7D] font-mono block">
                Personal Gift Message
              </label>
              <textarea
                rows={3}
                value={boxState.giftMessage}
                onChange={(e) => setBoxState({ ...boxState, giftMessage: e.target.value })}
                className="w-full px-4 py-3 bg-[#F7F3EC] border border-[#E2D8CA] text-sm text-[#29251F] rounded-sm focus:outline-none focus:border-[#987641] resize-none"
                placeholder="Type your gift note here..."
              />
            </div>

            {/* Total & Action */}
            <div className="pt-6 border-t border-[#E2D8CA] space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#958A7D] font-mono block">Bespoke Trio</span>
                  <div className="font-mono text-2xl font-semibold text-[#29251F] tabular-nums mt-0.5">
                    ${bundlePrice} <span className="text-xs font-normal text-[#958A7D] font-sans">USD</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#958A7D] line-through font-mono">${regularTotal} USD</span>
                  <span className="text-xs text-[#9AA28B] font-medium block">Complimentary Shipping</span>
                </div>
              </div>

              <button
                onClick={handleAdd}
                disabled={!isComplete}
                className={`w-full py-4 px-6 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  !isComplete
                    ? 'bg-[#E2D8CA] text-[#958A7D] cursor-not-allowed'
                    : isAdded
                    ? 'bg-[#9AA28B] text-[#FCFAF6]'
                    : 'bg-[#40352C] hover:bg-[#29251F] text-[#FCFAF6] shadow-md hover:shadow-lg'
                }`}
              >
                {!isComplete ? (
                  'Select All 3 Vessels to Proceed'
                ) : isAdded ? (
                  <>
                    <Check className="w-4 h-4" /> Added to Atelier Bag
                  </>
                ) : (
                  <>
                    <Gift className="w-4 h-4 text-[#C4A56A]" /> Add Gift Set to Bag (${bundlePrice})
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
