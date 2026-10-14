import React, { useState } from 'react';
import { CANDLES } from '../data/candlesData';
import { CandleItem, ScentNote } from '../types/candle';
import { Sparkles } from 'lucide-react';

interface FragrancePyramidProps {
  onSelectCandleForQuickView?: (candle: CandleItem) => void;
}

export const FragrancePyramidSection: React.FC<FragrancePyramidProps> = ({
  onSelectCandleForQuickView,
}) => {
  const [selectedCandle, setSelectedCandle] = useState<CandleItem>(CANDLES[0]);
  const [activeNote, setActiveNote] = useState<ScentNote | null>(selectedCandle.topNotes[0]);

  const handleCandleChange = (candle: CandleItem) => {
    setSelectedCandle(candle);
    setActiveNote(candle.topNotes[0] || null);
  };

  return (
    <section id="fragrance-notes" className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#E2D8CA]">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C4A56A]" />
          <span className="text-[11px] uppercase tracking-[0.24em] text-[#71695E] font-medium font-sans">
            Olfactory Architecture
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#29251F]">
          The notes that make <span className="italic font-normal">the moment.</span>
        </h2>
        <p className="text-sm sm:text-base text-[#71695E] font-light leading-relaxed">
          Every fragrance unfolds in three distinct chapters, from the vibrant opening aura to deep resonant base accords.
        </p>

        {/* Minimal Candle Selector Row */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
          {CANDLES.map((c) => (
            <button
              key={c.id}
              onClick={() => handleCandleChange(c)}
              className={`px-4 py-2 text-xs tracking-wider uppercase rounded-full transition-all duration-300 ${
                selectedCandle.id === c.id
                  ? 'bg-[#40352C] text-[#FCFAF6] font-medium shadow-sm'
                  : 'bg-[#EFE8DD] text-[#71695E] hover:text-[#29251F] hover:bg-[#E2D8CA]'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Fragrance Pyramid Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: 3 Stages */}
        <div className="lg:col-span-7 space-y-6">
          {/* Top Notes */}
          <div className="p-6 sm:p-8 bg-[#FCFAF6] border border-[#E2D8CA] rounded-sm transition-all hover:border-[#C4A56A]/60">
            <div className="flex items-baseline justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C4A56A]" />
                <h3 className="font-serif text-xl sm:text-2xl text-[#29251F] font-normal">Top Notes · Tête</h3>
              </div>
              <span className="text-[11px] text-[#958A7D] uppercase tracking-wider font-mono">First 15–30 Mins</span>
            </div>
            <p className="text-xs sm:text-sm text-[#71695E] font-light mb-4">
              The first impression. Bright, fresh, and immediately expressive upon the first match strike.
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedCandle.topNotes.map((note) => (
                <button
                  key={note.name}
                  onClick={() => setActiveNote(note)}
                  className={`px-3.5 py-1.5 text-xs rounded-sm border transition-all ${
                    activeNote?.name === note.name
                      ? 'bg-[#40352C] text-[#FCFAF6] border-[#40352C] font-medium'
                      : 'bg-[#F7F3EC] text-[#29251F] border-[#E2D8CA] hover:border-[#987641]'
                  }`}
                >
                  {note.name}
                </button>
              ))}
            </div>
          </div>

          {/* Heart Notes */}
          <div className="p-6 sm:p-8 bg-[#FCFAF6] border border-[#E2D8CA] rounded-sm transition-all hover:border-[#C4A56A]/60">
            <div className="flex items-baseline justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#987641]" />
                <h3 className="font-serif text-xl sm:text-2xl text-[#29251F] font-normal">Heart Notes · Cœur</h3>
              </div>
              <span className="text-[11px] text-[#958A7D] uppercase tracking-wider font-mono">30 Mins – 4 Hours</span>
            </div>
            <p className="text-xs sm:text-sm text-[#71695E] font-light mb-4">
              The soul of the fragrance. Full-bodied florals, spices, and resins as the melt pool broadens.
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedCandle.heartNotes.map((note) => (
                <button
                  key={note.name}
                  onClick={() => setActiveNote(note)}
                  className={`px-3.5 py-1.5 text-xs rounded-sm border transition-all ${
                    activeNote?.name === note.name
                      ? 'bg-[#40352C] text-[#FCFAF6] border-[#40352C] font-medium'
                      : 'bg-[#F7F3EC] text-[#29251F] border-[#E2D8CA] hover:border-[#987641]'
                  }`}
                >
                  {note.name}
                </button>
              ))}
            </div>
          </div>

          {/* Base Notes */}
          <div className="p-6 sm:p-8 bg-[#FCFAF6] border border-[#E2D8CA] rounded-sm transition-all hover:border-[#C4A56A]/60">
            <div className="flex items-baseline justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#40352C]" />
                <h3 className="font-serif text-xl sm:text-2xl text-[#29251F] font-normal">Base Notes · Fond</h3>
              </div>
              <span className="text-[11px] text-[#958A7D] uppercase tracking-wider font-mono">4+ Hours Lingering</span>
            </div>
            <p className="text-xs sm:text-sm text-[#71695E] font-light mb-4">
              The deeper woods, amber, and balsams that settle into curtains, books, and rooms overnight.
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedCandle.baseNotes.map((note) => (
                <button
                  key={note.name}
                  onClick={() => setActiveNote(note)}
                  className={`px-3.5 py-1.5 text-xs rounded-sm border transition-all ${
                    activeNote?.name === note.name
                      ? 'bg-[#40352C] text-[#FCFAF6] border-[#40352C] font-medium'
                      : 'bg-[#F7F3EC] text-[#29251F] border-[#E2D8CA] hover:border-[#987641]'
                  }`}
                >
                  {note.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Selected Note Detail Card + Candle Photo */}
        <div className="lg:col-span-5 space-y-6">
          {/* Note Deep-Dive */}
          <div className="p-8 bg-[#FCFAF6] border border-[#E2D8CA] rounded-sm shadow-[0_8px_24px_rgba(41,37,31,0.04)]">
            <div className="flex items-center justify-between text-xs text-[#958A7D] uppercase tracking-wider font-mono mb-3">
              <span>{activeNote?.family || 'Botanical'} Accord</span>
              <span className="text-[#987641] font-semibold">{activeNote?.duration}</span>
            </div>

            <h4 className="font-serif text-3xl text-[#29251F] font-normal mb-1">
              {activeNote?.name}
            </h4>
            <div className="text-xs uppercase tracking-wider text-[#987641] font-medium mb-4">
              Origin: {activeNote?.origin}
            </div>

            <p className="text-sm text-[#71695E] font-light leading-relaxed mb-6">
              {activeNote?.description}
            </p>

            <div className="pt-4 border-t border-[#EFE8DD] flex items-center justify-between text-xs text-[#71695E]">
              <span>Featured In: <strong className="text-[#29251F] font-serif text-sm">{selectedCandle.name}</strong></span>
              {onSelectCandleForQuickView && (
                <button
                  onClick={() => onSelectCandleForQuickView(selectedCandle)}
                  className="text-[#987641] hover:text-[#29251F] font-medium transition-colors"
                >
                  View Vessel →
                </button>
              )}
            </div>
          </div>

          {/* Candle Photograph Preview */}
          <div className="relative aspect-[16/10] rounded-sm overflow-hidden border border-[#E2D8CA] bg-[#EFE8DD] img-zoom-container">
            <img
              src={selectedCandle.image}
              alt={selectedCandle.name}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3 bg-[#FCFAF6]/90 backdrop-blur-xs px-3 py-1.5 text-xs text-[#29251F] font-serif">
              {selectedCandle.name} · ${selectedCandle.prices.standard}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
