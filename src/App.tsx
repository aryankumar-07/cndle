import React, { useState, useEffect } from 'react';
import { CANDLES } from './data/candlesData';
import { CandleItem, CartItem, GiftBoxState } from './types/candle';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CollectionSection } from './components/CollectionSection';
import { EditorialStorySection } from './components/EditorialStorySection';
import { FragrancePyramidSection } from './components/FragrancePyramidSection';
import { CraftSection } from './components/CraftSection';
import { FeaturedProductSection } from './components/FeaturedProductSection';
import { GiftBoxBuilder } from './components/GiftBoxBuilder';
import { BrandPhilosophySection } from './components/BrandPhilosophySection';
import { Footer } from './components/Footer';
import { CandleQuickViewModal } from './components/CandleQuickViewModal';
import { ScentQuizModal } from './components/ScentQuizModal';
import { CartDrawer } from './components/CartDrawer';

export default function App() {
  // Global Shopping Bag State
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('lambre_cart');
      return saved ? JSON.parse(saved) : [
        {
          cartItemId: 'sample-nocturne',
          candleId: 'nocturne-oud',
          name: 'Nocturne Oud & Amber',
          size: 'standard',
          price: 64,
          quantity: 1,
        },
      ];
    } catch {
      return [];
    }
  });

  // Modals & Overlays
  const [quickViewCandle, setQuickViewCandle] = useState<CandleItem | null>(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sync Cart to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('lambre_cart', JSON.stringify(cartItems));
    } catch {
      // Storage quota fallback
    }
  }, [cartItems]);

  // Smooth Scroll Handlers
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add standard candle to bag
  const handleAddToCart = (candle: CandleItem, size: 'votive' | 'standard' | 'grande' = 'standard', quantity = 1) => {
    const price = candle.prices[size];
    setCartItems((prev) => {
      const existingIdx = prev.findIndex((i) => i.candleId === candle.id && i.size === size && !i.isGiftBox);
      if (existingIdx >= 0) {
        const next = [...prev];
        next[existingIdx].quantity += quantity;
        return next;
      }
      return [
        ...prev,
        {
          cartItemId: `item-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          candleId: candle.id,
          name: candle.name,
          size,
          price,
          quantity,
        },
      ];
    });
    setIsCartOpen(true);
  };

  // Add bespoke 3-candle gift set to bag
  const handleAddGiftBox = (giftBox: GiftBoxState, price: number) => {
    const candleNames = giftBox.selectedCandles
      .map((id) => CANDLES.find((c) => c.id === id)?.name || 'Vessel')
      .join(', ');

    const newGiftItem: CartItem = {
      cartItemId: `giftbox-${Date.now()}`,
      candleId: 'bespoke-gift-box',
      name: `Bespoke Presentation Trio (${candleNames})`,
      size: 'standard',
      price,
      quantity: 1,
      isGiftBox: true,
      giftBoxDetails: {
        candles: giftBox.selectedCandles.filter(Boolean) as string[],
        boxColor: giftBox.boxStyle,
        waxSeal: giftBox.waxSeal,
        ribbon: giftBox.ribbon,
        giftMessage: giftBox.giftMessage,
      },
    };

    setCartItems((prev) => [...prev, newGiftItem]);
    setIsCartOpen(true);
  };

  // Update item quantity in bag
  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.cartItemId === cartItemId ? { ...item, quantity: newQty } : item))
    );
  };

  // Remove item from bag
  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  // Clear all bag items
  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F7F3EC] text-[#29251F]">
      {/* 01. Global Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Main Narrative Experience */}
      <main>
        {/* 02. Editorial Hero Section */}
        <HeroSection
          onDiscoverClick={() => scrollToSection('collection')}
          onExploreCraftClick={() => scrollToSection('our-craft')}
        />

        {/* 03. Section Two — Signature Collection Grid */}
        <CollectionSection
          onOpenQuickView={(c) => setQuickViewCandle(c)}
          onAddToCart={(c, size) => handleAddToCart(c, size, 1)}
        />

        {/* 04. Section Three — An Editorial Fragrance Story */}
        <EditorialStorySection
          onExploreCollection={() => scrollToSection('collection')}
        />

        {/* 05. Section Four — The Fragrance Pyramid */}
        <FragrancePyramidSection
          onSelectCandleForQuickView={(c) => setQuickViewCandle(c)}
        />

        {/* 06. Section Five — Our Craft (3-Step Photographic Sequence) */}
        <CraftSection />

        {/* 07. Section Six — A Sensory Product Feature (Nocturne Oud) */}
        <FeaturedProductSection
          onAddToCart={handleAddToCart}
          onOpenQuickView={(c) => setQuickViewCandle(c)}
        />

        {/* 08. Section Seven — Gift Atelier (Bespoke 3-Piece Configurator) */}
        <GiftBoxBuilder
          onAddGiftBoxToCart={handleAddGiftBox}
        />

        {/* 09. Section Eight & Nine — Brand Philosophy & Customer Confidence */}
        <BrandPhilosophySection />
      </main>

      {/* 10. Section Ten — Final CTA & Expressive Script Signature Wordmark */}
      <Footer
        onExploreCollection={() => scrollToSection('collection')}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Interactive Quick View PDP Modal */}
      <CandleQuickViewModal
        candle={quickViewCandle}
        onClose={() => setQuickViewCandle(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Scent Finder Quiz Modal */}
      <ScentQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectCandle={(c) => setQuickViewCandle(c)}
        onAddToCart={(c) => handleAddToCart(c, 'standard', 1)}
      />

      {/* Slide-over Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
