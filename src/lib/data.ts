// ─────────────────────────────────────────────────────────────
// All site content lives here (from the company catalog).
// Technical specifications live in ./specs.ts.
// ─────────────────────────────────────────────────────────────

export const company = {
  name: "Sakar Window System",
  url: "https://www.sakarwindowsystem.com",
  short: "Sakar",
  tagline: "Strength in Every Frame.",
  description:
    "High-quality aluminium windows, doors and customised architectural solutions — the perfect balance of style, strength and functionality.",
  phone: "+91 95869 95244",
  phones: ["+91 95869 95244", "+91 96648 10539"],
  email: "info@sakarwindowsystem.com",
  address: "Nitin Zone - 2, Morbi - Rajkot Highway, Near J. K. Wooden, At. Sakat Sanala, Ta. & Dist. Morbi - 363641",
  addressLines: ["Nitin Zone - 2, Morbi - Rajkot Highway,", "Near J. K. Wooden, At. Sakat Sanala,", "Ta. & Dist. Morbi - 363641"],
  whatsapp: "https://wa.me/919586995244",
  maps: "https://maps.app.goo.gl/2ajHH3eJxXWdxqW86",
  // Add the Instagram profile URL here to show it in the footer
  socials: [
    { name: "WhatsApp", href: "https://wa.me/919586995244" },
    { name: "Location", href: "https://maps.app.goo.gl/2ajHH3eJxXWdxqW86" },
  ],
};

export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;

export type WindowKind =
  | "sliding"
  | "casement"
  | "tilt-turn"
  | "fixed"
  | "sliding-door"
  | "french"
  | "slide-fold"
  | "bay"
  | "louver";

export type Category = "Sliding" | "Windows" | "Doors" | "Partitions & Cladding" | "Add-ons";

export type ProductImage = {
  src: string;
  alt: string;
  /** CSS object-position that keeps the product in frame when cropped */
  focus: string;
};

export type Product = {
  slug: string;
  name: string;
  category: Category;
  material: string;
  images: ProductImage[];
  summary: string;
  description: string;
  highlights: string[];
  applications: string[];
};

const img = (file: string, alt: string, focus = "50% 50%"): ProductImage => ({
  src: `/images/products/${file}.webp`,
  alt,
  focus,
});

// Product series and photos from the company catalog
export const products: Product[] = [
  // ── Sliding ──────────────────────────────────────────────
  {
    slug: "sliding-series",
    name: "Sliding Series",
    category: "Sliding",
    material: "Aluminium",
    images: [img("sliding", "Four-panel dark grey aluminium sliding door opening from a living room onto a garden pool", "50% 45%")],
    summary: "Classic aluminium sliders that open wide without taking up floor space.",
    description:
      "Our core sliding system: large glass panels glide along aluminium tracks to connect rooms with balconies, gardens and terraces. Because nothing swings open, it suits spaces where every square foot counts — from apartments to villas.",
    highlights: ["2, 3 & 4-track options", "Premium Euro & Exclusive Euro models", "Heights up to 3650 mm", "Single & multipoint locking"],
    applications: ["Living rooms", "Balconies", "Patios"],
  },
  {
    slug: "lift-and-slide-series",
    name: "Lift & Slide Series",
    category: "Sliding",
    material: "Aluminium",
    images: [img("lift-and-slide", "White lift and slide door opened onto a terrace overlooking a mountain valley", "50% 45%")],
    summary: "Large, heavy panels that lift to glide and lower to seal.",
    description:
      "Designed for big openings and big views. The lift & slide mechanism raises the sash off its seals so even large glass panels move with ease, then lowers it back down to close tightly against the frame.",
    highlights: ["Multipoint lock with shoot bolt", "Heights up to 3660 mm", "Glass from 8 to 38 mm", "96 mm & 28 mm models"],
    applications: ["Terraces", "Villas", "Penthouses"],
  },
  {
    slug: "bi-fold-sliding-series",
    name: "Bi-Fold Sliding Series",
    category: "Sliding",
    material: "Aluminium",
    images: [img("bi-fold-sliding", "Black aluminium bi-fold doors folded back to both sides, opening a room fully onto a patio and lawn")],
    summary: "Panels fold and stack aside to open an entire wall.",
    description:
      "Bi-fold panels concertina neatly to one or both sides, dissolving the boundary between inside and out. When closed, the slim aluminium frames give you a full wall of glass.",
    highlights: ["Heights up to 3660 mm", "Glass from 6 to 40 mm", "Concealed or lock & key options", "Multipoint lock with handle"],
    applications: ["Gardens", "Restaurants", "Villas"],
  },
  {
    slug: "synchro-sliding-series",
    name: "Synchro Sliding Door Series",
    category: "Sliding",
    material: "Aluminium",
    images: [img("synchro-sliding", "Slim black synchro sliding doors parting from the centre between a living and dining room", "50% 48%")],
    summary: "Centre-opening sliders that part together for a grand entrance.",
    description:
      "Synchro sliding doors open from the centre, with panels moving apart together to reveal a wide, symmetrical opening. Slim black frames and divided glass make them a statement between living and dining spaces.",
    highlights: ["Centre-parting operation", "Symmetrical wide opening", "Slim black framing", "Ideal as an interior divider"],
    applications: ["Living rooms", "Dining rooms", "Hotels"],
  },
  {
    slug: "slim-series",
    name: "Slim Series",
    category: "Sliding",
    material: "Aluminium",
    images: [img("slim", "Three-panel black slim aluminium sliding door in a bright sunroom facing a lake")],
    summary: "Slender frames that put the view first.",
    description:
      "The Slim Series reduces the visible aluminium to a minimum so more of every opening is glass. Clean black profiles bring a contemporary edge to sunrooms, living spaces and lake- or garden-facing rooms.",
    highlights: ["Slim interlocks from 20 to 32 mm", "2, 3 & 4-track options", "Heights up to 3650 mm", "45° / 90° cut joinery"],
    applications: ["Sunrooms", "Living rooms", "Holiday homes"],
  },
  {
    slug: "hybrid-slim-series",
    name: "Hybrid Slim Series",
    category: "Sliding",
    material: "Aluminium",
    images: [img("hybrid-slim", "Four-panel black hybrid slim sliding door opening onto a balcony with glass balustrade", "50% 45%")],
    summary: "Slim-profile sliders built for everyday balcony living.",
    description:
      "The Hybrid Slim Series pairs the clean look of a slim frame with a practical sliding system for daily use. Wide multi-panel layouts open living rooms onto balconies and terraces.",
    highlights: ["Exclusive Hybrid (E.H.) models", "2, 3 & 4-track options", "Heights up to 3650 mm", "Single & multipoint locking"],
    applications: ["Apartments", "Balconies", "Living rooms"],
  },
  {
    slug: "minimal-and-slim-series",
    name: "Minimal Slim Series",
    category: "Sliding",
    material: "Aluminium",
    images: [img("minimal-and-slim", "Floor-to-ceiling minimal sliding glass wall with near-invisible frames overlooking a lake and mountains")],
    summary: "Near-frameless glass walls for uninterrupted views.",
    description:
      "Our most minimal sliding system. Frames almost disappear, leaving floor-to-ceiling glass that turns the landscape into the main feature of the room.",
    highlights: ["10, 15 & 32 mm models", "Integrated mesh & concealed options", "Heights up to 3000 mm", "2-track & 2-track 4-sash layouts"],
    applications: ["Luxury homes", "Resorts", "Showrooms"],
  },
  {
    slug: "ventino-sliding-series",
    name: "Ventino Sliding Series",
    category: "Sliding",
    material: "Aluminium",
    images: [img("ventino-sliding", "Four-panel silver aluminium Ventino sliding door on a covered terrace", "50% 45%")],
    summary: "Wide sliding doors that open homes onto terraces.",
    description:
      "Ventino sliding doors bring a refined natural-aluminium finish to wide openings. Multi-panel configurations connect interiors with covered terraces and outdoor dining spaces.",
    highlights: ["2 & 3-track options", "Heights up to 3200 mm", "25 to 35 mm models", "Single & multipoint locking"],
    applications: ["Terraces", "Bungalows", "Outdoor dining"],
  },
  {
    slug: "mono-rail-series",
    name: "Mono Rail Series",
    category: "Sliding",
    material: "Aluminium",
    images: [img("mono-rail", "Four-panel champagne aluminium mono rail sliding system with tinted glass, opened at the centre")],
    summary: "Sleek sliding panels for interiors, showrooms and offices.",
    description:
      "Mono Rail sliding panels create elegant glass divisions inside homes and commercial spaces. Tinted glass and a champagne aluminium finish give privacy with a premium feel.",
    highlights: ["Heights up to 3000 mm", "Panels up to 1200 mm wide", "Glass from 5 to 14 mm", "Multipoint locking"],
    applications: ["Showrooms", "Walk-in wardrobes", "Offices"],
  },
  {
    slug: "alu-wood-sliding-series",
    name: "Alu Wood Sliding Series",
    category: "Sliding",
    material: "Aluminium · Real wood",
    images: [img("alu-wood-sliding", "Walnut woodgrain aluminium sliding doors seen from a timber deck", "45% 45%")],
    summary: "Real wood finish with the strength of aluminium.",
    description: "Alu Wood sliding doors pair an aluminium frame with a real wood finish, bringing natural warmth to large openings. Double-glazed or laminated glass from 18 to 24 mm adds comfort and safety.",
    highlights: ["Real wood finish", "DGU or laminated glass", "34 mm shutter depth", "Single & multipoint locking"],
    applications: ["Villas", "Decks", "Farmhouses"],
  },

  // ── Windows ──────────────────────────────────────────────
  {
    slug: "casement-series",
    name: "Casement Series",
    category: "Windows",
    material: "Aluminium",
    images: [img("casement", "Four-panel aluminium casement window in a living room facing a brick courtyard", "50% 42%")],
    summary: "Side-hung windows that open fully for fresh air.",
    description:
      "Casement windows are hinged at the side and open completely, giving excellent ventilation and an unobstructed view. When closed, they press firmly against the frame for a tight seal.",
    highlights: ["Single, 2-in-1 & 3-in-1 frames", "30 to 50 mm models", "Heights up to 2430 mm", "Single & multipoint locking"],
    applications: ["Bedrooms", "Living rooms", "Kitchens"],
  },
  {
    slug: "alu-wood-casement-series",
    name: "Alu Wood Casement Series",
    category: "Windows",
    material: "Aluminium · Real wood",
    images: [img("alu-wood-casement", "Honey woodgrain aluminium casement window with grid bars, one sash open to a snowy forest", "50% 40%")],
    summary: "Classic casements in real wood with aluminium strength.",
    description: "All the charm of a traditional wooden window, built on an aluminium frame with a real wood finish. Side-hung casement sashes with double-glazed or laminated glass from 18 to 24 mm.",
    highlights: ["Real wood finish", "DGU or laminated glass", "55 mm shutter depth", "Single & multipoint locking"],
    applications: ["Bedrooms", "Cottages", "Heritage-style homes"],
  },
  {
    slug: "tilt-and-turn-series",
    name: "Tilt & Turn Series",
    category: "Windows",
    material: "Aluminium",
    images: [img("tilt-and-turn", "White tilt and turn window with two sashes turned open inward onto a deck", "50% 40%")],
    summary: "Tilt in for secure ventilation, turn to open fully.",
    description:
      "One handle, two ways to open. Tilt the sash inward at the top for safe, draught-free ventilation, or turn it fully open like a door for fresh air and easy cleaning from inside.",
    highlights: ["Dual tilt & turn operation", "Glass from 5 to 32 mm", "Heights up to 2440 mm", "Multipoint locking"],
    applications: ["Apartments", "High-rise", "Hospitals"],
  },
  {
    slug: "parallel-window",
    name: "Parallel Window Series",
    category: "Windows",
    material: "Aluminium",
    images: [
      img("parallel-window", "Villa exterior with black parallel windows pushed outward from the façade", "55% 40%"),
      img("parallel-window-2", "Living room with tall black parallel windows facing the ocean", "50% 40%"),
    ],
    summary: "Sashes push outward parallel to the façade for all-round airflow.",
    description:
      "Parallel opening windows move the entire sash outward, staying parallel to the wall. Air flows in from all four sides while the façade keeps its clean, flush appearance — a favourite for modern villas and high-end projects.",
    highlights: ["Parallel outward opening", "Airflow from all four sides", "Clean, flush façade look", "Scissor-stay hardware"],
    applications: ["Villas", "Façades", "Living rooms"],
  },
  {
    slug: "vertical-series",
    name: "Vertical Series",
    category: "Windows",
    material: "Aluminium",
    images: [img("vertical", "Black aluminium window with two top-hung sashes pushed outward over a garden", "50% 45%")],
    summary: "Outward-opening sashes that ventilate while keeping rain out.",
    description:
      "Shown here with top-hung sashes that push outward at the bottom, letting fresh air in while the open sash shields the opening from rain. A clean black frame suits contemporary interiors.",
    highlights: ["Outward-opening sashes", "Glass from 5 to 8 mm", "Heights up to 1200 mm", "90° cut corner joinery"],
    applications: ["Bathrooms", "Kitchens", "Bedrooms"],
  },
  {
    slug: "arc-window-series",
    name: "Exclusive Arc Window Series",
    category: "Windows",
    material: "Aluminium",
    images: [
      img("arc-window-2", "Grand living room with three tall arched black windows with decorative bars", "50% 45%"),
      img("arc-window-1", "Three white arched casement windows above a window seat", "50% 35%"),
    ],
    summary: "Arched windows that add elegance and grandeur.",
    description:
      "Arc windows bring curved, architectural character to any room. Choose openable casement sashes beneath a fixed arched fanlight, or full-height arched glazing with decorative bars.",
    highlights: ["Curved arched tops", "Casement or fixed options", "Decorative bar patterns", "Black or white finishes"],
    applications: ["Living rooms", "Bay windows", "Heritage homes"],
  },

  // ── Doors ────────────────────────────────────────────────
  {
    slug: "door-series",
    name: "Door Series",
    category: "Doors",
    material: "Aluminium",
    images: [img("door", "Anthracite double entrance door with frosted glass and long pull handle at dusk", "50% 45%")],
    summary: "Statement entrance doors with glass side panels.",
    description:
      "Make a strong first impression with aluminium entrance doors. Double leaves, full-height side panels, frosted glass for privacy and long pull handles combine security with modern style.",
    highlights: ["40, 50, 115 & French door models", "Heights up to 3000 mm", "Glass from 5 to 28 mm", "Single & multipoint locking"],
    applications: ["Main entrances", "Villas", "Offices"],
  },
  {
    slug: "flush-door-series",
    name: "Flush Door Series",
    category: "Doors",
    material: "Aluminium",
    images: [img("flush-door", "Dark brown flush interior door with a round recessed pull in a warm living room", "50% 45%")],
    summary: "Clean, minimal interior doors with a solid finish.",
    description:
      "Flush doors give interiors a calm, seamless look. A solid panel, slim architrave and discreet round pull keep the focus on your space, not the hardware.",
    highlights: ["Minimal solid panel", "Discreet recessed pull", "Slim architrave frame", "Dark matte finish"],
    applications: ["Bedrooms", "Living rooms", "Offices"],
  },
  {
    slug: "telescopic-door-series",
    name: "Telescopic Door Series",
    category: "Doors",
    material: "Aluminium",
    images: [img("telescopic-door", "Black-framed glass shopfront with central automatic sliding doors into a lobby", "50% 45%")],
    summary: "Sliding doors that stack to open wider in less space.",
    description:
      "Telescopic sliding doors move multiple panels together so they stack neatly to one side, giving a wider clear opening than a standard slider. Ideal for busy entrances, lobbies and shopfronts.",
    highlights: ["Wide clear opening", "Panels stack compactly", "Shopfront and lobby ready", "Automatic operation option"],
    applications: ["Lobbies", "Shopfronts", "Hotels"],
  },

  // ── Partitions & Cladding ───────────────────────────────
  {
    slug: "double-glass-partition-series",
    name: "Double Glass Partition Series",
    category: "Partitions & Cladding",
    material: "Aluminium",
    images: [img("double-glass-partition", "Floor-to-ceiling glass office partitions in slim dark frames at sunset")],
    summary: "Floor-to-ceiling glass partitions for modern workplaces.",
    description:
      "Divide space without blocking light. Double glass partitions create cabins, meeting rooms and corridors that feel open and bright, while slim dark frames keep the look sharp.",
    highlights: ["Floor-to-ceiling glass", "Keeps spaces bright", "Slim dark framing", "Integrated door options"],
    applications: ["Offices", "Meeting rooms", "Co-working"],
  },
  {
    slug: "slim-partition-series",
    name: "Slim Partition Series",
    category: "Partitions & Cladding",
    material: "Aluminium",
    images: [img("slim-partition", "Near-frameless glass partition enclosing an office conference room", "50% 55%")],
    summary: "Near-frameless glass walls for conference rooms and cabins.",
    description:
      "Slim partitions use only fine top and bottom profiles, so glass walls look almost frameless. Perfect for conference rooms and executive cabins that should feel open yet defined.",
    highlights: ["Near-frameless look", "Fine top and bottom profiles", "Glass door integration", "Open-plan friendly"],
    applications: ["Conference rooms", "Cabins", "Studios"],
  },
  {
    slug: "wall-cladding-series",
    name: "Wall Cladding Series",
    category: "Partitions & Cladding",
    material: "Aluminium · Wood finish",
    images: [img("wall-cladding", "Light oak woodgrain wall cladding panels with warm LED cove lighting in a dining room", "45% 35%")],
    summary: "Woodgrain feature walls without the upkeep of timber.",
    description:
      "Transform plain walls into warm, textured features. Vertical woodgrain cladding panels pair beautifully with cove lighting for dining rooms, lobbies and lounges.",
    highlights: ["Vertical woodgrain panels", "Pairs with cove lighting", "Timber look, low upkeep", "Interior feature walls"],
    applications: ["Dining rooms", "Lobbies", "Lounges"],
  },

  // ── Add-ons ─────────────────────────────────────────────
  {
    slug: "mosquito-series",
    name: "Mosquito Net Series",
    category: "Add-ons",
    material: "Aluminium",
    images: [img("mosquito", "Black sliding door with one glass panel and one pleated insect mesh panel")],
    summary: "Insect mesh that keeps bugs out and lets air in.",
    description:
      "Enjoy fresh air without the insects. Our mosquito mesh panels work alongside sliding systems, including pleated mesh that folds away neatly when not needed.",
    highlights: ["Pleated mesh option", "Works with sliding systems", "Fresh air without insects", "Folds away neatly"],
    applications: ["Bedrooms", "Balconies", "Kitchens"],
  },
  {
    slug: "grill-series",
    name: "Exclusive Grill Series",
    category: "Add-ons",
    material: "Aluminium",
    images: [img("grill", "White three-part window with black grid grill pattern overlooking a walled garden", "45% 40%")],
    summary: "Decorative grid grills that add character to windows.",
    description:
      "Grills bring structure and style to glazing. Bold black grid patterns on a light frame give windows a timeless, architectural look.",
    highlights: ["Decorative grid patterns", "Contrasting black bars", "Fits casement and fixed glass", "Classic architectural style"],
    applications: ["Living rooms", "Villas", "Heritage homes"],
  },
  {
    slug: "georgian-bar-series",
    name: "Exclusive Georgian Bar Series",
    category: "Add-ons",
    material: "Aluminium",
    images: [img("georgian-bar", "White French doors and side panels with Georgian grid bars facing a lawn", "52% 45%")],
    summary: "Traditional Georgian bars for a timeless look.",
    description:
      "Georgian bars divide glass into elegant traditional panes. Shown here on white French doors with matching side panels — a classic finish for doors and windows alike.",
    highlights: ["Traditional grid layout", "For doors and windows", "Matching side panels", "Classic white finish"],
    applications: ["Living rooms", "Patios", "Heritage homes"],
  },
];

export const categories: ("All" | Category)[] = ["All", "Sliding", "Windows", "Doors", "Partitions & Cladding", "Add-ons"];

const bySlug = (slug: string) => {
  const p = products.find((p) => p.slug === slug);
  if (!p) throw new Error(`Unknown product: ${slug}`);
  return p;
};

/** Shown on the home page "Our Range" section */
export const featuredProducts = [
  "lift-and-slide-series",
  "bi-fold-sliding-series",
  "arc-window-series",
  "door-series",
  "double-glass-partition-series",
  "mosquito-series",
].map(bySlug);

const heroSlide = (slug: string) => {
  const p = bySlug(slug);
  return { ...p.images[0], slug, name: p.name };
};

/** Photos the home hero cycles through */
export const heroSlides = [
  heroSlide("minimal-and-slim-series"),
  heroSlide("arc-window-series"),
  heroSlide("synchro-sliding-series"),
];

// Facts drawn from the catalog
export const stats = [
  { value: 25, suffix: "", label: "Product series" },
  { value: 3660, suffix: " mm", label: "Max. panel height" },
  { value: 4, suffix: "", label: "Track options, up to 4-track" },
  { value: 3, suffix: "", label: "Finishes — powder, wood & anodizing" },
];

// From the company catalog's "Benefits" page
export const features = [
  {
    icon: "Volume2",
    title: "Sound Resistance",
    text: "Sound insulation and quality glazing make interiors surprisingly peaceful — you could forget where you are.",
  },
  {
    icon: "ShieldCheck",
    title: "Safety",
    text: "Double the security: laminated glass plus safety grills with heavy inside rods.",
  },
  {
    icon: "Wind",
    title: "Wind Resistance",
    text: "A range of models engineered to match the wind pressure at your site.",
  },
  {
    icon: "Droplets",
    title: "Water Resistance",
    text: "Expert assembly solutions across every design for zero water seepage.",
  },
  {
    icon: "AirVent",
    title: "Ventilation",
    text: "Designed to deliver maximum ventilation, even through the hottest days.",
  },
  {
    icon: "BugOff",
    title: "Insect Protection",
    text: "Every model can be fitted with an insect protection system.",
  },
  {
    icon: "Wrench",
    title: "Easy Assembly & Installation",
    text: "With the right tools and machines, the system is simple to assemble and install.",
  },
  {
    icon: "ShieldPlus",
    title: "Impact Resistance",
    text: "Built to withstand sudden, high-force impacts without breaking or significant damage.",
  },
];

export const process = [
  {
    step: "01",
    title: "Consultation",
    text: "We visit your site, understand your design intent and recommend the right system.",
  },
  {
    step: "02",
    title: "Precision Survey",
    text: "Laser-accurate measurements of every opening for a perfect, gap-free fit.",
  },
  {
    step: "03",
    title: "Fabrication",
    text: "Profiles are cut, welded and assembled on CNC machinery in our factory.",
  },
  {
    step: "04",
    title: "Installation",
    text: "Trained teams install, seal and test every unit — then hand over a clean site.",
  },
];

// Finish types from the catalog: powder coat, wood (effect or real wood) and anodizing.
// Swatch colours are illustrative examples of each type.
export const finishes = [
  { name: "Powder · White", color: "#f4f4f2" },
  { name: "Powder · Black", color: "#16181b" },
  { name: "Wood · Oak", color: "#b07a3f" },
  { name: "Wood · Walnut", color: "#5b3a24" },
  { name: "Anodized · Silver", color: "#a5a9ad" },
  { name: "Anodized · Champagne", color: "#b9a27e" },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
