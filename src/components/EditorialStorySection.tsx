import React from 'react';
import { ArrowRight } from 'lucide-react';

interface EditorialStoryProps {
  onExploreCollection: () => void;
}

export const EditorialStorySection: React.FC<EditorialStoryProps> = ({ onExploreCollection }) => {
  return (
    <section className="py-24 sm:py-36 bg-[#EFE8DD] border-t border-[#E2D8CA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large Editorial Lifestyle Image */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(41,37,31,0.08)] img-zoom-container">
              <img
                src="/images/editorial-atmosphere.jpg"
                alt="A quiet minimalist living room with warm afternoon sun, travertine stone table and lit candle"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            {/* Subtle floating quote marker */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 p-6 bg-[#FCFAF6] border border-[#E2D8CA] max-w-xs shadow-lg">
              <p className="font-serif italic text-sm text-[#29251F]">
                "The quietest moments in a home are often the ones remembered most vividly."
              </p>
              <span className="text-[10px] uppercase tracking-widest text-[#958A7D] mt-2 block font-sans">
                Atelier Notes · No. 04
              </span>
            </div>
          </div>

          {/* Right: Typography & Narrative Story */}
          <div className="lg:col-span-5 space-y-6 lg:pl-6 text-left">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4A56A]" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#71695E] font-medium font-sans">
                The Art of Atmosphere
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#29251F] leading-[1.05] tracking-tight">
              A fragrance is <br />
              <span className="italic font-normal text-[#987641]">more than a scent.</span>
            </h2>

            <p className="text-base text-[#71695E] font-light leading-relaxed">
              It is the warmth of a room at dusk, the memory of a familiar place, the feeling of returning to yourself. When fire touches unbleached wax, time softens.
            </p>

            <p className="text-sm text-[#71695E] font-light leading-relaxed">
              We compose each fragrance with natural botanical extraits sourced directly from heritage growers in Grasse, Tuscany, and Calabria—creating complex olfactory chapters that linger gently without overpowering.
            </p>

            <div className="pt-4">
              <button
                onClick={onExploreCollection}
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#29251F] hover:text-[#987641] transition-colors border-b border-[#29251F] hover:border-[#987641] pb-1"
              >
                <span>Read the Scent Profiles</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
