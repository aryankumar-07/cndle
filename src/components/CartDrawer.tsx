import React, { useState } from 'react';
import { CartItem } from '../types/candle';
import { CANDLES } from '../data/candlesData';
import { X, Trash2, ShoppingBag, ArrowRight, Check, Gift } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Eleanor Vance',
    email: 'eleanor@example.com',
    address: '742 Evergreen Terrace, Suite 4B',
    city: 'New York, NY 10012',
  });

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShippingThreshold = 85;
  const progressToFreeShipping = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const diffForFree = Math.max(0, freeShippingThreshold - subtotal);

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderConfirmed(true);
    setTimeout(() => {
      onClearCart();
    }, 500);
  };

  const getItemImage = (item: CartItem) => {
    if (item.isGiftBox) return '/images/gift-set.jpg';
    const found = CANDLES.find((c) => c.id === item.candleId);
    return found?.image || '/images/hero-candle.jpg';
  };

  return (
    <div className="fixed inset-0 z-[9995] flex justify-end bg-black/40 backdrop-blur-xs transition-opacity duration-300">
      <div
        className="relative w-full max-w-md bg-[#FCFAF6] border-l border-[#E2D8CA] h-full shadow-2xl flex flex-col justify-between overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-5 border-b border-[#E2D8CA] bg-[#F7F3EC] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-[#40352C]" />
            <h3 className="font-serif text-xl text-[#29251F] font-normal">Your Atelier Bag</h3>
            <span className="text-xs font-mono text-[#958A7D]">({items.reduce((acc, i) => acc + i.quantity, 0)})</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-sm border border-[#E2D8CA] hover:bg-[#EFE8DD] text-[#71695E] hover:text-[#29251F] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Free Shipping Indicator */}
        <div className="px-6 py-3 bg-[#FCFAF6] border-b border-[#E2D8CA] text-xs">
          <div className="flex justify-between items-center mb-1.5 text-[#71695E]">
            {subtotal >= freeShippingThreshold ? (
              <span className="text-[#9AA28B] font-medium flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Complimentary White-Glove Shipping Unlocked
              </span>
            ) : (
              <span>
                Add <strong className="text-[#29251F] font-mono">${diffForFree.toFixed(0)}</strong> more for Complimentary Shipping
              </span>
            )}
            <span className="font-mono text-[11px] text-[#958A7D]">{progressToFreeShipping}%</span>
          </div>
          <div className="w-full h-1 rounded-full bg-[#EFE8DD] overflow-hidden">
            <div
              className="h-full bg-[#987641] transition-all duration-500 rounded-full"
              style={{ width: `${progressToFreeShipping}%` }}
            />
          </div>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="py-24 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#EFE8DD] flex items-center justify-center mx-auto text-[#958A7D]">
                <ShoppingBag className="w-5 h-5 text-[#987641]" />
              </div>
              <h4 className="font-serif text-xl text-[#29251F]">Your bag is empty</h4>
              <p className="text-xs text-[#71695E] max-w-xs mx-auto font-light">
                Discover our hand-poured botanical candles and bring warmth into your space.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.cartItemId}
                className="p-4 bg-[#F7F3EC] border border-[#E2D8CA] flex gap-4 items-start rounded-sm"
              >
                {/* Real Product Thumbnail */}
                <div className="w-16 h-20 bg-[#EFE8DD] overflow-hidden shrink-0 border border-[#E2D8CA] rounded-sm">
                  <img
                    src={getItemImage(item)}
                    alt={item.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="space-y-1 flex-1">
                  <div className="text-[10px] text-[#958A7D] uppercase font-mono">
                    {item.isGiftBox ? 'Bespoke Trio' : `${item.size.toUpperCase()} VESSEL`}
                  </div>
                  <h4 className="font-serif text-base text-[#29251F] font-normal leading-snug">
                    {item.name}
                  </h4>
                  <div className="font-mono text-xs text-[#987641] font-semibold">
                    ${item.price} USD
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <div className="flex items-center border border-[#E2D8CA] bg-[#FCFAF6] rounded-sm">
                      <button
                        onClick={() => onUpdateQuantity(item.cartItemId, Math.max(1, item.quantity - 1))}
                        className="px-2 py-0.5 text-xs text-[#71695E] hover:text-[#29251F]"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-mono tabular-nums text-[#29251F]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.cartItemId, item.quantity + 1)}
                        className="px-2 py-0.5 text-xs text-[#71695E] hover:text-[#29251F]"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.cartItemId)}
                      className="text-[#958A7D] hover:text-[#40352C] p-1 transition-colors"
                      title="Remove from bag"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="font-mono text-sm font-semibold text-[#29251F] tabular-nums">
                  ${item.price * item.quantity}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Complimentary Matchbox note */}
        {items.length > 0 && (
          <div className="px-6 py-2.5 bg-[#F7F3EC] border-t border-[#E2D8CA] text-[11px] text-[#71695E] flex items-center justify-between font-light">
            <span>Complimentary long-stem black matchbox included</span>
            <span className="font-mono font-medium text-[#29251F]">$0</span>
          </div>
        )}

        {/* Summary Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[#E2D8CA] bg-[#F7F3EC] space-y-4">
            <div className="space-y-1.5 text-xs text-[#71695E]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono text-[#29251F] font-semibold tabular-nums">${subtotal} USD</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span className="font-mono tabular-nums text-[#29251F]">
                  {subtotal >= freeShippingThreshold ? 'FREE' : '$12 USD'}
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E2D8CA] flex justify-between items-baseline">
              <span className="text-sm font-medium text-[#29251F]">Estimated Total</span>
              <span className="font-mono text-xl text-[#29251F] font-semibold tabular-nums">
                ${subtotal >= freeShippingThreshold ? subtotal : subtotal + 12} USD
              </span>
            </div>

            <button
              onClick={() => setIsCheckingOut(true)}
              className="w-full py-4 px-6 bg-[#40352C] hover:bg-[#29251F] text-[#FCFAF6] text-xs uppercase tracking-[0.2em] font-medium transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4 text-[#C4A56A]" />
            </button>
          </div>
        )}

        {/* Express Checkout Modal Overlay */}
        {isCheckingOut && (
          <div className="absolute inset-0 bg-[#FCFAF6] z-50 p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E2D8CA] mb-6">
                <h3 className="font-serif text-2xl text-[#29251F]">Atelier Checkout</h3>
                <button
                  onClick={() => setIsCheckingOut(false)}
                  className="p-1.5 text-[#71695E] hover:text-[#29251F]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {orderConfirmed ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#EFE8DD] flex items-center justify-center mx-auto text-[#987641] shadow-sm">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-3xl text-[#29251F]">Order #1084 Confirmed</h4>
                  <p className="text-xs text-[#71695E] font-light leading-relaxed max-w-xs mx-auto">
                    Thank you, {formData.name}. Your vessels are being hand-packaged with unbleached cotton wrap and dispatched with care.
                  </p>
                  <button
                    onClick={() => {
                      setIsCheckingOut(false);
                      setOrderConfirmed(false);
                      onClose();
                    }}
                    className="w-full py-3 bg-[#40352C] text-[#FCFAF6] text-xs uppercase tracking-wider font-medium mt-6"
                  >
                    Return to Atelier
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCheckoutSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-[#71695E] uppercase tracking-wider mb-1 font-mono text-[10px]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#F7F3EC] border border-[#E2D8CA] text-[#29251F] focus:outline-none focus:border-[#987641]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#71695E] uppercase tracking-wider mb-1 font-mono text-[10px]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#F7F3EC] border border-[#E2D8CA] text-[#29251F] focus:outline-none focus:border-[#987641]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#71695E] uppercase tracking-wider mb-1 font-mono text-[10px]">
                      Delivery Address
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#F7F3EC] border border-[#E2D8CA] text-[#29251F] focus:outline-none focus:border-[#987641]"
                    />
                  </div>

                  <div className="pt-2">
                    <div className="p-3 bg-[#F7F3EC] border border-[#E2D8CA] flex items-center justify-between text-[#71695E]">
                      <span>Payment Method</span>
                      <span className="font-mono text-[#29251F] font-medium">Apple Pay / Visa</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-4 px-6 bg-[#40352C] hover:bg-[#29251F] text-[#FCFAF6] text-xs uppercase tracking-[0.2em] font-medium transition-all"
                  >
                    Confirm Order (${subtotal >= freeShippingThreshold ? subtotal : subtotal + 12} USD)
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
