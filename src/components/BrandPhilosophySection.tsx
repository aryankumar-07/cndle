import React from 'react';
import { Sparkles, Shield, Recycle, Truck, HeartHandshake, CheckCircle } from 'lucide-react';

export const BrandPhilosophySection: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 bg-[#F7F3EC] border-t border-[#E2D8CA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-24">
        {/* Section Eight: Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4A56A]" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#71695E] font-medium font-sans">
                Our Philosophy
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#29251F] leading-tight">
              Less, but <span className="italic font-normal">better.</span>
            </h2>
            <p className="text-base text-[#71695E] font-light leading-relaxed">
              We believe a candle should be an invitation to slow down. That requires uncompromising respect for materials, purity of burn, and vessels crafted to last far beyond the final wick.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2 border-l border-[#E2D8CA] pl-6">
              <h3 className="font-serif text-xl text-[#29251F] font-normal">Considered Materials</h3>
              <p className="text-sm text-[#71695E] font-light leading-relaxed">
                100% natural coconut and golden beeswax matrix. Zero petroleum paraffin, zero synthetic boosters.
              </p>
            </div>

            <div className="space-y-2 border-l border-[#E2D8CA] pl-6">
              <h3 className="font-serif text-xl text-[#29251F] font-normal">Small-Batch Pouring</h3>
              <p className="text-sm text-[#71695E] font-light leading-relaxed">
                Hand-poured in micro-batches of 18 vessels at controlled kettle temperatures for an even, soot-free melt pool.
              </p>
            </div>

            <div className="space-y-2 border-l border-[#E2D8CA] pl-6">
              <h3 className="font-serif text-xl text-[#29251F] font-normal">Reusable Blown Glass</h3>
              <p className="text-sm text-[#71695E] font-light leading-relaxed">
                Weighted 380g thermal glass created for permanence. Once finished, clean with warm water to repurpose as a tumbler or vase.
              </p>
            </div>

            <div className="space-y-2 border-l border-[#E2D8CA] pl-6">
              <h3 className="font-serif text-xl text-[#29251F] font-normal">FSC Cherry Wood Wicks</h3>
              <p className="text-sm text-[#71695E] font-light leading-relaxed">
                Responsibly harvested wood wicks that crackle with gentle fireside acoustics and maintain a steady, clean flame.
              </p>
            </div>
          </div>
        </div>

        {/* Section Nine: Shopping Confidence Strip */}
        <div className="pt-16 border-t border-[#E2D8CA] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-full bg-[#EFE8DD] flex items-center justify-center shrink-0 text-[#987641]">
              <Truck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-serif text-base text-[#29251F] font-medium">Complimentary Shipping</h4>
              <p className="text-xs text-[#71695E] font-light mt-1">On all domestic orders over $85 USD.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-full bg-[#EFE8DD] flex items-center justify-center shrink-0 text-[#987641]">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-serif text-base text-[#29251F] font-medium">Clean Air Guarantee</h4>
              <p className="text-xs text-[#71695E] font-light mt-1">IFRA-compliant, non-toxic botanicals.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-full bg-[#EFE8DD] flex items-center justify-center shrink-0 text-[#987641]">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-serif text-base text-[#29251F] font-medium">Personal Gifting</h4>
              <p className="text-xs text-[#71695E] font-light mt-1">Handwritten calligraphy cards with every order.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-full bg-[#EFE8DD] flex items-center justify-center shrink-0 text-[#987641]">
              <CheckCircle className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-serif text-base text-[#29251F] font-medium">30-Day Happiness</h4>
              <p className="text-xs text-[#71695E] font-light mt-1">Exchanges on unlit vessels within 30 days.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
