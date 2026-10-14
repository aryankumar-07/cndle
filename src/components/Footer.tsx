import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

interface FooterProps {
  onExploreCollection: () => void;
  onOpenQuiz: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onExploreCollection,
  onOpenQuiz,
}) => {
  return (
    <footer className="bg-[#EFE8DD] border-t border-[#E2D8CA] text-[#29251F]">
      {/* 1. Final Call-to-Action Section */}
      <div className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C4A56A]" />
          <span className="text-[11px] uppercase tracking-[0.24em] text-[#71695E] font-medium font-sans">
            Find Your Signature Scent
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#29251F] leading-tight">
          Make room for a <span className="italic font-normal text-[#987641]">little ritual.</span>
        </h2>

        <p className="text-base sm:text-lg text-[#71695E] font-light max-w-lg mx-auto leading-relaxed">
          Discover the fragrance that feels like home. Crafted to soften time and bring quiet intention into the everyday.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExploreCollection}
            className="group px-8 py-4 bg-[#40352C] hover:bg-[#29251F] text-[#FCFAF6] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_8px_20px_rgba(64,53,44,0.12)]"
          >
            <span>Explore the Collection</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[#C4A56A]" />
          </button>

          <button
            onClick={onOpenQuiz}
            className="px-6 py-4 border border-[#D8CEBE] bg-[#FCFAF6] hover:bg-[#EFE8DD] text-xs uppercase tracking-[0.2em] text-[#29251F] font-medium transition-colors flex items-center justify-center gap-2"
          >
            <Compass className="w-3.5 h-3.5 text-[#987641]" />
            <span>Take Fragrance Quiz</span>
          </button>
        </div>
      </div>

      {/* 2. The Animated Expressive Cursive Wordmark Signature */}
      <div className="py-12 sm:py-16 border-t border-[#E2D8CA] overflow-hidden text-center select-none bg-[#EFE8DD]/70">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#958A7D] font-mono block mb-2">
            Maison de Haute Parfumerie
          </span>

          {/* Large Cursive Brand Signature */}
          <div className="font-script text-7xl sm:text-9xl md:text-[140px] lg:text-[170px] text-[#29251F] leading-none tracking-normal py-2 transition-all duration-700 hover:text-[#987641] hover:scale-[1.01]">
            L'Ambre Atelier
          </div>

          <div className="w-24 sm:w-36 h-px bg-[#C4A56A] mx-auto mt-4" />
        </div>
      </div>

      {/* 3. Standard Clean Footer Links & Information */}
      <div className="border-t border-[#E2D8CA] py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="font-serif text-2xl tracking-[0.2em] uppercase text-[#29251F] font-normal block">
              L'Ambre Atelier
            </a>
            <p className="text-xs text-[#71695E] max-w-sm font-light leading-relaxed">
              Maison de haute parfumerie pour la maison. Hand-poured botanical candles, rare Grasse essences, and crackling cherry wood wicks.
            </p>
            <div className="text-xs text-[#958A7D] font-mono tracking-wider">
              Paris · Grasse · New York
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-3 text-xs uppercase tracking-[0.16em]">
            <span className="text-[10px] text-[#958A7D] font-mono block mb-4">Navigation</span>
            <div><a href="#collection" className="text-[#71695E] hover:text-[#29251F] transition-colors">The Collection</a></div>
            <div><a href="#fragrance-notes" className="text-[#71695E] hover:text-[#29251F] transition-colors">Fragrance Notes</a></div>
            <div><a href="#our-craft" className="text-[#71695E] hover:text-[#29251F] transition-colors">Our Craft</a></div>
            <div><a href="#gift-atelier" className="text-[#71695E] hover:text-[#29251F] transition-colors">Gift Atelier</a></div>
            <div><button onClick={onOpenQuiz} className="text-[#987641] hover:text-[#29251F] transition-colors">Scent Finder</button></div>
          </div>

          {/* Boutique Services */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <span className="text-[10px] text-[#958A7D] font-mono uppercase tracking-[0.16em] block mb-4">Atelier Concierge</span>
            <p className="text-[#71695E] font-light leading-relaxed">
              Complimentary gift wrapping and personal calligraphy cards accompany every order.
            </p>
            <div className="pt-2 text-xs text-[#29251F] font-mono">
              contact@lambre-atelier.com
            </div>
            <div className="text-[11px] text-[#958A7D]">
              Mon – Fri · 9:00 – 18:00 CET
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-12 mt-12 border-t border-[#E2D8CA] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#958A7D]">
          <div>
            © {new Date().getFullYear()} L'Ambre Atelier Maison Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>IFRA Certified</span>
            <span aria-hidden="true" className="text-[#E2D8CA]">·</span>
            <span>100% Biodegradable Wax</span>
            <span aria-hidden="true" className="text-[#E2D8CA]">·</span>
            <span>Hand Poured</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
