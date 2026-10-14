export type ScentNoteTier = 'top' | 'heart' | 'base';

export interface ScentNote {
  name: string;
  origin: string;
  duration: string;
  description: string;
  family: string;
}

export interface CandleItem {
  id: string;
  name: string;
  tagline: string;
  collection: string;
  fragranceFamily: 'Woody & Smoky' | 'Earthy & Sensual' | 'Botanical & Lush' | 'Warm & Spiced' | 'Floral & Mysterious';
  burnTimeHours: number;
  waxType: string;
  wickType: string;
  vesselColor: string;
  vesselBorder: string;
  waxColor: string;
  accentGlow: string;
  prices: {
    standard: number; // 8.5 oz
    grande: number;   // 14 oz
    votive: number;   // 3.5 oz
  };
  topNotes: ScentNote[];
  heartNotes: ScentNote[];
  baseNotes: ScentNote[];
  story: string;
  mood: string;
  idealRoom: string;
  scentThrow: 'Moderate (Medium room)' | 'Generous (Large open space)' | 'Intimate (Personal nook)';
  image: string;
  isFeatured?: boolean;
}

export interface CartItem {
  cartItemId: string;
  candleId: string;
  name: string;
  size: 'votive' | 'standard' | 'grande';
  price: number;
  quantity: number;
  isGiftBox?: boolean;
  giftBoxDetails?: {
    candles: string[];
    boxColor: string;
    waxSeal: string;
    ribbon: string;
    giftMessage: string;
  };
}

export interface GiftBoxState {
  selectedCandles: (string | null)[];
  boxStyle: 'obsidian' | 'amber-linen' | 'botanical-olive';
  waxSeal: 'monogram' | 'botanical' | 'sunburst';
  ribbon: 'velvet-gold' | 'silk-noir' | 'raw-twine';
  giftMessage: string;
  recipientName: string;
}
