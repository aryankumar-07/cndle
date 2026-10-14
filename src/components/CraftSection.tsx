import React from 'react';

export const CraftSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Composition',
      subtitle: 'Rare Botanical Extracts',
      description:
        'Pure biodegradable coconut and beeswax blended with up to 12% pure fragrance oils from heritage growers in Grasse, France. Zero paraffin, zero phthalates.',
      image: '/images/craft-composition.jpg',
      alt: 'Artisanal perfumery raw botanical ingredients and essential oils on marble',
    },
    {
      number: '02',
      title: 'The Micro-Pour',
      subtitle: 'Controlled Kettle Temperatures',
      description:
        'Poured by hand in small 18-vessel batches at precise cooling temperatures to ensure a flawless satin surface and uniform scent dispersion throughout the burn.',
      image: '/images/craft-pour.jpg',
      alt: 'Craftsperson pouring warm molten botanical wax into blown glass candle jars',
    },
    {
      number: '03',
      title: 'The Finish',
      subtitle: 'Wooden Wick & Curation',
      description:
        'FSC-certified American cherry wood wicks are hand-trimmed to 1/4 inch for gentle fireside crackle, followed by a 48-hour curing ritual before hand-labeling.',
      image: '/images/craft-finish.jpg',
      alt: 'Inspection and wick finishing of luxury candle vessels in studio',
    },
  ];

  return (
    <section id="our-craft" className="py-24 sm:py-36 bg-[#FCFAF6] border-t border-[#E2D8CA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-24 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C4A56A]" />
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#71695E] font-medium font-sans">
              Made with Intention
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#29251F] leading-tight">
            Good things take <span className="italic font-normal">their time.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#71695E] font-light leading-relaxed">
            From carefully composed fragrances to the final pour, every detail is considered to create a clean, enduring flame.
          </p>
        </div>

        {/* 3-Step Photographic Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="space-y-6 group">
              {/* Real Photography Asset */}
              <div className="relative aspect-[4/5] w-full bg-[#EFE8DD] overflow-hidden rounded-sm border border-[#E2D8CA] img-zoom-container shadow-[0_8px_24px_rgba(41,37,31,0.04)]">
                <img
                  src={step.image}
                  alt={step.alt}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#FCFAF6]/90 backdrop-blur-xs px-3 py-1 text-xs font-mono font-medium text-[#29251F]">
                  {step.number}
                </div>
              </div>

              {/* Step Narrative */}
              <div className="space-y-2">
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#987641] font-mono">
                  {step.subtitle}
                </div>
                <h3 className="font-serif text-2xl text-[#29251F] font-normal">
                  {step.title}
                </h3>
                <p className="text-sm text-[#71695E] font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
