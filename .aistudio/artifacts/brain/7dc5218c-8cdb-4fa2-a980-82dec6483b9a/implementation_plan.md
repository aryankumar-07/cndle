# L'AMBRE ATELIER — Interactive Luxury Candle Showcase

A sensorial, interactive digital storefront and showcase for an artisanal candle maison, designed with warm editorial luxury aesthetics, dark amber and molten gold accents, interactive flame toggles, a custom ember cursor with spark bursts, scent note breakdowns, a burn-time melt-pool simulator, a scent quiz, and a custom gift box builder.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The following directions were confirmed during interactive clarification and shape the entire technical and design implementation:

- **Confirmed Aesthetic**: Warm editorial luxury with rich obsidian charcoal, dark amber tones, brushed gold accents, and serif display typography (`Playfair Display` / `Cormorant Garamond` editorial elegance paired with crisp modern typography).
- **Confirmed Custom Cursor**: Glowing flame ember cursor with subtle organic flame flickers, micro-spark trails, magnetic hover expansion on interactive elements, and click spark burst particles.
- **Confirmed Interactive Features**:
  1. *Interactive Flame Toggle*: Click to ignite (glow, heat shimmer, flickering SVG flame) or snuff out (wisps of smoke animation) on any candle showcase card or detail view.
  2. *Scent Notes Pyramid Modal*: Multi-layered olfactory breakdown (Top, Heart, Base notes) with essential oil origins, intensity levels, and fragrant ingredient cards.
  3. *Virtual Burn-Time & Melt-Pool Visualizer*: Interactive slider (0 to 60+ hours) showing real-time wax level depletion, translucent molten wax pool expansion, wick curl, and aroma throw radius.
  4. *Scent Finder Quiz*: 3-step interactive questionnaire matching user mood, interior vibe, and fragrance preferences to their signature scent.
  5. *Custom Candle Gift Box Builder & Cart*: 3-candle bespoke gift set configurator with box finish selection, wax seal stamping, personalized gift calligraphy card, and slide-out drawer cart.

---

### 1. Overview & Core Concept

- **What It Does**: Transports visitors into an intimate, warm luxury atelier where candles are not static product photos, but living sensory experiences. Visitors can ignite or snuff candles, watch wax melt pools form across burn hours, explore complex olfactory pyramids, receive customized scent recommendations, build custom gift boxes, and manage their cart.
- **Target Audience / Persona**: Discerning home fragrance enthusiasts, luxury interior lovers, and thoughtful gift givers seeking artisanal, hand-poured soy and beeswax candles with clean burns and complex fragrance profiles.
- **Key Value**: Bridges the gap of buying fragrance online by providing visual tactile feedback (flame physics, melt pool depth, scent pyramids, mood matching quiz) alongside seamless e-commerce utility.

---

### 2. User Experience & Visual Design

#### Key User Flows
1. **Atelier Entrance & Hero Showcase**:
   - The user arrives to an ambient dark amber glow and custom flame ember cursor.
   - The hero features a flagship candle (*"Nocturne Oud & Amber"*) with an interactive "Ignite Candle" toggle that radiates warmth across the hero canvas with realistic flame flicker and sound toggle (crackling wood wick sound synthesis/audio effect).
2. **Featured Collection & Interactive Cards**:
   - Curated grid of signature fragrances (*Santal Velours*, *Figue Sauvage*, *Cèdre Fumé*, *Ambre Doré*, *Rose Cardamome*, *Jasmin Nocturne*).
   - Each card allows direct ignition/extinguish toggling, quick scent preview, 3D tilt interaction on hover, and one-click quick view opening.
3. **Interactive Scent Pyramid & Burn Simulator (PDP / Quick View Modal)**:
   - Clicking any candle opens a focused modal with:
     - 3-tier olfactory pyramid (Top, Heart, Base notes) with fragrant ingredient highlights.
     - Live Burn Simulator slider: drag from 0 to 65 hours to watch the wax pool melt, wick mushroom slightly, and throw radius grow.
     - Add to cart with size variants (8.5 oz Standard, 14 oz Grande 3-Wick, Petite Votive Set).
4. **Interactive Scent Finder Quiz**:
   - Users who aren't sure what scent fits their room take a 3-question visual quiz (Mood → Room Setting → Olfactory Family).
   - Instant personalized match with fragrance breakdown and quick add option.
5. **Bespoke 3-Candle Gift Box Builder**:
   - Interactive 3-slot gift packaging tray.
   - Select 3 candles, pick packaging wrap (Obsidian Matte, Warm Amber Linen, or Forest Sage), customize a wax seal emblem, and write a personalized gift card with live preview.
6. **Cart Drawer & Checkout Summary**:
   - Slide-out luxury cart drawer with free shipping progress bar, quantity adjustments, gift box inclusions, and seamless checkout summary.

#### Visual Identity & Theme
- **Color Palette**:
  - Neutral Canvas (60%): Deep Obsidian `#0E0C0A` & Smoked Charcoal `#161311` with warm undertones.
  - Structural Surfaces (30%): Deep Amber Noir `#1E1915`, Warm Parchment text `#F5EFEB`, muted warm gray `#9E968F`, and hairline borders `#2E2620`.
  - Accent Budget (10%): Warm Molten Gold `#D4AF37`, Amber Flame Glow `#F59E0B`, and Hearth Orange `#EA580C`.
- **Typography**:
  - Display / Headings: Editorial Luxury Serif (*Playfair Display* / *Cormorant Garamond* aesthetic via refined serif styling with tracking and balanced line-heights).
  - Body Prose: Refined Sans (*Plus Jakarta Sans* / system sans) for clarity, legibility, and effortless elegance.
  - Tabular Figures: `tabular-nums` for prices, hours, and burn percentages.
- **Micro-Interactions & Custom Cursor**:
  - Custom ember cursor: smooth lagging point with amber radial aura, flame tip SVG, and particle emission when clicking.
  - Tactile buttons with subtle gold border illuminations, smooth transitions (≤ 180ms).
  - Flame toggle: smooth ignition flare and realistic smoke curl dissipation when snuffed.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Vector/CSS Hybrid Flame Simulation vs Static PNGs**
  - *Chosen Approach*: Interactive SVG flame with multi-stop radial gradient, SVG organic displacement filter turbulence, and CSS keyframe flickering; accompanied by togglable audio crackle synthesized via Web Audio API.
  - *Why*: Allows instant zero-download-latency lighting and extinguishing on any device with dynamic melt pool interaction, avoiding heavy 3D WebGL overhead while looking breathtakingly alive.
  - *Alternatives Considered*: Three.js particle fire was considered, but pure SVG/Canvas flame renders at 60fps smoothly on all devices without loading delays or high GPU consumption.
- **Decision 2: Integrated Scent Pyramid + Burn Simulator within Quick View**
  - *Chosen Approach*: Single cohesive purchase and sensory modal combining olfactory pyramid, burn-time timeline slider, and cart purchase.
  - *Why*: Keeps the user in high-touch sensory exploration without leaving the storefront context.
- **Decision 3: Bespoke Gift Box Builder with Real-time State & Calligraphy Preview**
  - *Chosen Approach*: Interactive slot-based builder storing the 3-candle bundle directly into the cart state with custom gift notes and seal colors.
  - *Why*: High-ticket average order value driver common in luxury fragrance brands (Diptyque, Byredo, Le Labo).

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        App Root (App.tsx)                              │
│  - Custom Flame Cursor Engine (Spark Particle Canvas + Ember Follower) │
│  - Global Atelier State (Cart, Active Modals, Active Quiz, Sound fx)   │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
    ┌───────────────────────────────┼───────────────────────────────┐
    │                               │                               │
┌───▼─────────────────────┐ ┌───────▼─────────────────────┐ ┌───────▼─────────────────────┐
│ Header (Top Bar)        │ │ Hero Canvas Showcase        │ │ Collection Grid             │
│ - Brand Wordmark        │ │ - Interactive Master Flame  │ │ - 6 Luxury Candle Cards     │
│ - Nav Links             │ │ - Wick Audio Ambient Toggle │ │ - Ignite/Extinguish Toggle  │
│ - Cart Drawer Trigger   │ │ - Scent Profile Highlights  │ │ - Quick Sensory Preview     │
│ - Scent Quiz Trigger    │ │ - Direct PDP Trigger        │ │ - 3D Tilt Card Component    │
└───┬─────────────────────┘ └─────────────────────────────┘ └───────┬─────────────────────┘
    │                                                               │
┌───▼───────────────────────────────────────────────────────────────▼─────────────────────┐
│ Modals & Interactive Overlays                                                           │
│ ┌──────────────────────────┐ ┌──────────────────────────┐ ┌──────────────────────────┐  │
│ │ Candle Quick View Modal  │ │ Scent Finder Quiz Modal  │ │ Custom Gift Box Builder   │  │
│ │ - Scent Notes Pyramid    │ │ - 3-step Mood Matching   │ │ - 3-Slot Candle Picker    │  │
│ │ - Burn-Time Simulator    │ │ - Scent Recommendation   │ │ - Wax Seal & Ribbon Style │  │
│ │ - Melt-Pool Visualizer   │ │ - Direct Add to Cart     │ │ - Calligraphy Gift Card   │  │
│ └──────────────────────────┘ └──────────────────────────┘ └──────────────────────────┘  │
│ ┌─────────────────────────────────────────────────────────────────────────────────────┐  │
│ │ Luxury Slide-Over Cart Drawer (Itemized, Quantity, Gift Box Bundles, Free Ship Bar) │  │
│ └─────────────────────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Key State & Entities
- `CandleItem`: ID, name, subtitle, fragranceFamily, burnTimeHours, waxType, wickType, prices (by size: 8.5oz, 14oz, votive), topNotes, heartNotes, baseNotes, story, accentColor, isLit.
- `CartItem`: Candle ID, size, quantity, customGiftNote (if gift set), price.
- `GiftBoxState`: 3 selected candle IDs, boxColor, waxSealColor, ribbonColor, giftMessage.
- `BurnSimulatorState`: hoursBurned (0–65h), calculated meltPoolDepth (mm), flameHeight (%), throwRadius (ft).
- `CustomCursorState`: mouse position, click bursts, isHoveringInteractive, trailing spark particles.
