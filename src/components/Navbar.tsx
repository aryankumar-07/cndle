import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenQuiz,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#F7F3EC]/92 backdrop-blur-md py-4 border-b border-[#E2D8CA] shadow-[0_4px_24px_rgba(41,37,31,0.04)]'
          : 'bg-[#F7F3EC] py-6 border-b border-[#EFE8DD]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-serif tracking-[0.22em] uppercase text-[#29251F] hover:text-[#987641] transition-colors whitespace-nowrap shrink-0 font-normal"
        >
          L'Ambre Atelier
        </a>

        {/* Zone 2: Editorial Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[11px] uppercase tracking-[0.18em] text-[#71695E] font-medium">
          <a
            href="#collection"
            className="hover:text-[#29251F] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#29251F] hover:after:w-full after:transition-all after:duration-300"
          >
            Collection
          </a>
          <a
            href="#fragrance-notes"
            className="hover:text-[#29251F] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#29251F] hover:after:w-full after:transition-all after:duration-300"
          >
            Fragrance Notes
          </a>
          <a
            href="#our-craft"
            className="hover:text-[#29251F] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#29251F] hover:after:w-full after:transition-all after:duration-300"
          >
            Our Craft
          </a>
          <a
            href="#gift-atelier"
            className="hover:text-[#29251F] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#29251F] hover:after:w-full after:transition-all after:duration-300"
          >
            Gift Atelier
          </a>
          <button
            onClick={onOpenQuiz}
            className="text-[#987641] hover:text-[#29251F] transition-colors flex items-center gap-1.5 font-medium"
          >
            Scent Finder
          </button>
        </nav>

        {/* Zone 3: Primary Action & Bag Button */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenCart}
            className="group relative flex items-center gap-2 py-2 px-3 text-xs tracking-wider uppercase text-[#29251F] hover:text-[#987641] transition-colors"
            aria-label={`Shopping bag with ${cartCount} items`}
          >
            <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110 text-[#40352C]" />
            <span className="hidden sm:inline font-mono text-xs">Bag</span>
            <span className="w-5 h-5 rounded-full bg-[#40352C] text-[#FCFAF6] font-mono text-[10px] font-semibold flex items-center justify-center transition-transform group-hover:scale-105">
              {cartCount}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#29251F] hover:text-[#987641] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F7F3EC] border-b border-[#E2D8CA] px-6 py-8 space-y-6 animate-fadeIn">
          <nav className="flex flex-col space-y-4 text-xs uppercase tracking-[0.2em] text-[#71695E]">
            <a
              href="#collection"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 text-[#29251F] hover:text-[#987641] flex items-center justify-between"
            >
              <span>Collection</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#958A7D]" />
            </a>
            <a
              href="#fragrance-notes"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 text-[#29251F] hover:text-[#987641] flex items-center justify-between"
            >
              <span>Fragrance Notes</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#958A7D]" />
            </a>
            <a
              href="#our-craft"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 text-[#29251F] hover:text-[#987641] flex items-center justify-between"
            >
              <span>Our Craft</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#958A7D]" />
            </a>
            <a
              href="#gift-atelier"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 text-[#29251F] hover:text-[#987641] flex items-center justify-between"
            >
              <span>Gift Atelier</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#958A7D]" />
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuiz();
              }}
              className="py-1 text-[#987641] text-left flex items-center justify-between font-semibold"
            >
              <span>Scent Finder Quiz</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#987641]" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
