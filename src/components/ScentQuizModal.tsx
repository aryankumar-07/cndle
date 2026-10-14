import React, { useState } from 'react';
import { CandleItem } from '../types/candle';
import { CANDLES } from '../data/candlesData';
import { X, Sparkles, Compass, Check, ArrowRight, RotateCcw, ShoppingBag } from 'lucide-react';

interface QuizProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCandle: (candle: CandleItem) => void;
  onAddToCart: (candle: CandleItem) => void;
}

export const ScentQuizModal: React.FC<QuizProps> = ({
  isOpen,
  onClose,
  onSelectCandle,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    mood: '',
    room: '',
    fragranceFamily: '',
  });
  const [recommended, setRecommended] = useState<CandleItem | null>(null);
  const [matchScore, setMatchScore] = useState(97);
  const [added, setAdded] = useState(false);

  const moods = [
    { id: 'mysterious', title: 'Midnight Contemplation', desc: 'Deep, introspective, rainy evenings by the hearth', candleId: 'nocturne-oud' },
    { id: 'calm', title: 'Velvety Sanctuary', desc: 'Soft cashmere, reading in quiet light, slowing down', candleId: 'santal-velours' },
    { id: 'invigorating', title: 'Sunlit Terrace', desc: 'Morning breeze, green leaves, open linen curtains', candleId: 'figue-sauvage' },
    { id: 'cozy', title: 'Fireside Cabin', desc: 'Rustic pine embers, mountain lodge, autumn dusk', candleId: 'cedre-fume' },
    { id: 'honeyed', title: 'Golden Afternoon', desc: 'Golden hour honey, warm amber sunlight, indulgence', candleId: 'ambre-dore' },
    { id: 'sensual', title: 'Nocturnal Romance', desc: 'Intoxicating night blooms, candlelit conversation', candleId: 'jasmin-nocturne' },
  ];

  const rooms = [
    { id: 'living', title: 'Living Room Hearth', desc: 'Spacious room for gathering and warm welcome' },
    { id: 'bedroom', title: 'Bedside Sanctuary', desc: 'Quiet space for unwinding into deep rest' },
    { id: 'study', title: 'Library or Creative Studio', desc: 'Calm, focused environment for deep thought' },
    { id: 'bath', title: 'Evening Bath Ritual', desc: 'Restorative evening body and mind restoration' },
  ];

  const families = [
    { id: 'woody', title: 'Woody & Smoky', desc: 'Rare Agarwood, Atlas Cedar, Vetiver, Charred Embers' },
    { id: 'earthy', title: 'Earthy & Sensual', desc: 'Creamy Sandalwood, Orris Root, Cashmere, Vanilla' },
    { id: 'botanical', title: 'Botanical & Lush', desc: 'Wild Fig Leaves, Coastal Pine, Sea Mist, Citrus' },
    { id: 'warm', title: 'Warm & Spiced', desc: 'Baltic Amber, Saffron, Clementine, Honeycomb' },
    { id: 'floral', title: 'Floral & Mysterious', desc: 'Night Jasmine, Neroli, Star Anise, White Musk' },
  ];

  const calculateResult = (selectedFamily: string) => {
    let matched = CANDLES.find((c) => c.fragranceFamily.toLowerCase().includes(selectedFamily.toLowerCase()));
    if (!matched) {
      matched = CANDLES.find((c) => c.id === answers.mood) || CANDLES[0];
    }
    setRecommended(matched);
    setMatchScore(95 + Math.floor(Math.random() * 4));
    setStep(4);
  };

  const handleReset = () => {
    setStep(1);
    setAnswers({ mood: '', room: '', fragranceFamily: '' });
    setRecommended(null);
    setAdded(false);
  };

  return (
    <div
      className="fixed inset-0 z-[9990] flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FCFAF6] border border-[#E2D8CA] shadow-2xl rounded-sm overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-[#E2D8CA] bg-[#F7F3EC]">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#987641]" />
            <span className="text-xs uppercase tracking-widest text-[#29251F] font-mono">
              Atelier Fragrance Finder
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-sm hover:bg-[#EFE8DD] text-[#71695E] hover:text-[#29251F] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step Progress Line */}
        <div className="w-full bg-[#EFE8DD] h-1">
          <div
            className="bg-[#987641] h-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Body */}
        <div className="p-8 sm:p-10">
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center max-w-md mx-auto space-y-1">
                <span className="text-[11px] text-[#958A7D] font-mono uppercase tracking-wider">Step 1 of 3</span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#29251F] font-light">What atmosphere do you wish to cultivate?</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {moods.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      setAnswers({ ...answers, mood: m.candleId });
                      setStep(2);
                    }}
                    className="p-4 border border-[#E2D8CA] bg-[#F7F3EC] hover:bg-[#EFE8DD] hover:border-[#987641] text-left transition-all rounded-sm group"
                  >
                    <div className="font-serif text-base text-[#29251F] group-hover:text-[#987641] transition-colors">
                      {m.title}
                    </div>
                    <div className="text-xs text-[#71695E] mt-1 font-light leading-relaxed">{m.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center max-w-md mx-auto space-y-1">
                <span className="text-[11px] text-[#958A7D] font-mono uppercase tracking-wider">Step 2 of 3</span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#29251F] font-light">Where will your flame live?</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {rooms.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => {
                      setAnswers({ ...answers, room: r.id });
                      setStep(3);
                    }}
                    className="p-4 border border-[#E2D8CA] bg-[#F7F3EC] hover:bg-[#EFE8DD] hover:border-[#987641] text-left transition-all rounded-sm group"
                  >
                    <div className="font-serif text-base text-[#29251F] group-hover:text-[#987641] transition-colors">
                      {r.title}
                    </div>
                    <div className="text-xs text-[#71695E] mt-1 font-light leading-relaxed">{r.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center max-w-md mx-auto space-y-1">
                <span className="text-[11px] text-[#958A7D] font-mono uppercase tracking-wider">Step 3 of 3</span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#29251F] font-light">Which olfactory family calls to you?</h3>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {families.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => {
                      setAnswers({ ...answers, fragranceFamily: f.id });
                      calculateResult(f.title);
                    }}
                    className="p-4 border border-[#E2D8CA] bg-[#F7F3EC] hover:bg-[#EFE8DD] hover:border-[#987641] text-left transition-all rounded-sm flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-serif text-base text-[#29251F] group-hover:text-[#987641] transition-colors">
                        {f.title}
                      </div>
                      <div className="text-xs text-[#71695E] font-light mt-0.5">{f.desc}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#958A7D] group-hover:text-[#987641] group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && recommended && (
            <div className="space-y-6 text-center">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EFE8DD] text-xs font-mono text-[#987641]">
                <Sparkles className="w-3.5 h-3.5" />
                {matchScore}% Match for Your Sanctuary
              </div>

              <div>
                <span className="text-[11px] text-[#958A7D] font-mono uppercase tracking-wider block">Your Signature Scent</span>
                <h3 className="text-3xl sm:text-4xl font-serif text-[#29251F] font-light mt-1">{recommended.name}</h3>
                <p className="text-sm font-serif italic text-[#71695E] mt-1">"{recommended.tagline}"</p>
              </div>

              {/* Real Photograph Thumbnail */}
              <div className="w-32 h-40 mx-auto bg-[#EFE8DD] rounded-sm overflow-hidden border border-[#E2D8CA] shadow-sm">
                <img
                  src={recommended.image}
                  alt={recommended.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <p className="text-xs text-[#71695E] max-w-md mx-auto font-light leading-relaxed">
                {recommended.story}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => {
                    onAddToCart(recommended);
                    setAdded(true);
                    setTimeout(() => setAdded(false), 1600);
                  }}
                  className={`w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-all flex items-center justify-center gap-2 ${
                    added
                      ? 'bg-[#9AA28B] text-[#FCFAF6]'
                      : 'bg-[#40352C] hover:bg-[#29251F] text-[#FCFAF6]'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" /> Added to Bag
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" /> Add Scent to Bag (${recommended.prices.standard})
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    onSelectCandle(recommended);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 border border-[#E2D8CA] bg-[#FCFAF6] hover:bg-[#EFE8DD] text-xs uppercase tracking-[0.2em] text-[#29251F]"
                >
                  View Details
                </button>
              </div>

              <div>
                <button
                  onClick={handleReset}
                  className="text-xs text-[#958A7D] hover:text-[#29251F] transition-colors inline-flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3 h-3" /> Retake Fragrance Finder
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
