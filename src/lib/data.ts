// ─────────────────────────────────────────────────────────────
// All site content lives here. Replace with the real catalog
// data (products, specs, contact details) — every page reads
// from this file, so no component changes are needed.
// ─────────────────────────────────────────────────────────────

export const company = {
  name: "Sakar Window System",
  url: "https://www.sakarwindowsystem.com",
  short: "Sakar",
  tagline: "Frames that define the view.",
  description:
    "Precision-engineered uPVC and aluminium window & door systems — built for Indian climates, designed for modern architecture.",
  phone: "+91 98765 43210",
  email: "info@sakarwindowsystem.com",
  address: "Plot 12, GIDC Industrial Estate, Ahmedabad, Gujarat, India",
  hours: "Mon – Sat · 9:30 AM – 7:00 PM",
  founded: 2010,
  socials: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
    youtube: "#",
  },
};

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

export type Category = "Windows" | "Doors" | "Specialty";

export type Product = {
  slug: string;
  name: string;
  kind: WindowKind;
  category: Category;
  material: string;
  summary: string;
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  applications: string[];
};

export const products: Product[] = [
  {
    slug: "sliding-window",
    name: "Sliding Window",
    kind: "sliding",
    category: "Windows",
    material: "uPVC / Aluminium",
    summary: "Space-saving 2 & 3-track sliders with whisper-smooth rollers.",
    description:
      "Our sliding window system glides on stainless-steel roller assemblies within a multi-chamber profile. Ideal where outward opening is not possible — balconies, corridors and large spans — while delivering excellent sealing against dust and monsoon rain.",
    highlights: [
      "2-track and 3-track (mesh) configurations",
      "Interlock with brush & fin seals",
      "Multi-point locking available",
      "Optional fly-mesh shutter",
    ],
    specs: [
      { label: "Profile depth", value: "60 – 88 mm" },
      { label: "Max sash size", value: "1500 × 2000 mm" },
      { label: "Glazing", value: "5 – 24 mm (single / DGU)" },
      { label: "Hardware", value: "SS rollers, crescent / multi-point lock" },
      { label: "Air tightness", value: "Class 3" },
    ],
    applications: ["Residential", "Balconies", "Commercial"],
  },
  {
    slug: "casement-window",
    name: "Casement Window",
    kind: "casement",
    category: "Windows",
    material: "uPVC",
    summary: "Side-hung windows with compression seals for total weatherproofing.",
    description:
      "Casement windows open fully outward or inward on friction stays or hinges, giving maximum ventilation and an unobstructed view. Double EPDM gaskets compress on closing for superior acoustic and thermal insulation.",
    highlights: [
      "Inward or outward opening",
      "Double EPDM compression gaskets",
      "Friction stays with restrictors",
      "Up to 40 dB sound reduction with DGU",
    ],
    specs: [
      { label: "Profile depth", value: "60 – 70 mm" },
      { label: "Max sash size", value: "800 × 1600 mm" },
      { label: "Glazing", value: "5 – 32 mm" },
      { label: "Hardware", value: "Friction stay / hinges, espagnolette lock" },
      { label: "Water tightness", value: "Up to 600 Pa" },
    ],
    applications: ["Bedrooms", "Kitchens", "Villas"],
  },
  {
    slug: "tilt-and-turn-window",
    name: "Tilt & Turn Window",
    kind: "tilt-turn",
    category: "Windows",
    material: "uPVC",
    summary: "European dual-action hardware — tilt to vent, turn to open.",
    description:
      "One handle, two functions. Tilt the sash inward from the top for secure ventilation, or turn it fully open for cleaning and fresh air. Concealed multi-point hardware makes it one of the most secure window types available.",
    highlights: [
      "Tilt-first or turn-first operation",
      "Concealed multi-point locking",
      "Easy interior cleaning",
      "Child-safe ventilation position",
    ],
    specs: [
      { label: "Profile depth", value: "70 mm" },
      { label: "Max sash size", value: "1200 × 2200 mm" },
      { label: "Glazing", value: "Up to 40 mm triple" },
      { label: "Hardware", value: "European tilt & turn gear" },
      { label: "Security", value: "RC2 ready" },
    ],
    applications: ["Apartments", "High-rise", "Hospitals"],
  },
  {
    slug: "fixed-window",
    name: "Fixed Window",
    kind: "fixed",
    category: "Windows",
    material: "uPVC / Aluminium",
    summary: "Uninterrupted glass for panoramic views and natural light.",
    description:
      "Fixed glazing brings large architectural openings to life. With no moving parts, it offers the best thermal and acoustic performance and can be combined with openable sashes for any façade composition.",
    highlights: [
      "Any shape — arches, triangles, circles",
      "Combines with openable vents",
      "Best-in-class insulation",
      "Minimal sightlines",
    ],
    specs: [
      { label: "Profile depth", value: "60 – 70 mm" },
      { label: "Max size", value: "2400 × 2400 mm" },
      { label: "Glazing", value: "5 – 40 mm" },
      { label: "Shapes", value: "Rectangle, arch, custom" },
      { label: "U-value", value: "From 1.1 W/m²K (DGU)" },
    ],
    applications: ["Living rooms", "Staircases", "Façades"],
  },
  {
    slug: "sliding-door",
    name: "Lift & Slide Door",
    kind: "sliding-door",
    category: "Doors",
    material: "uPVC / Aluminium",
    summary: "Large-format sliding doors that open your space to the outdoors.",
    description:
      "Heavy panels up to 300 kg glide effortlessly with lift & slide hardware. When closed, the sash lowers onto its seals for complete weather protection. Perfect for terraces, gardens and sea-facing homes.",
    highlights: [
      "Panels up to 300 kg",
      "Low-threshold option",
      "Lift & slide or standard slide",
      "Wind-load tested for high-rise",
    ],
    specs: [
      { label: "Profile depth", value: "88 – 170 mm" },
      { label: "Max panel size", value: "3000 × 2800 mm" },
      { label: "Glazing", value: "Up to 44 mm" },
      { label: "Hardware", value: "Lift & slide gear, tandem rollers" },
      { label: "Threshold", value: "Standard / flush" },
    ],
    applications: ["Terraces", "Gardens", "Penthouses"],
  },
  {
    slug: "french-door",
    name: "French Door",
    kind: "french",
    category: "Doors",
    material: "uPVC",
    summary: "Classic double doors with modern multi-point security.",
    description:
      "Elegant twin-leaf doors that open without a central mullion, creating a wide, welcoming entrance. Reinforced steel profiles and multi-point locks deliver strength without compromising on style.",
    highlights: [
      "Mullion-free double leaf",
      "Galvanised steel reinforcement",
      "3D adjustable hinges",
      "Decorative grill options",
    ],
    specs: [
      { label: "Profile depth", value: "70 mm" },
      { label: "Max leaf size", value: "1000 × 2400 mm" },
      { label: "Glazing", value: "5 – 32 mm" },
      { label: "Hardware", value: "Multi-point lock, 3D hinges" },
      { label: "Threshold", value: "Aluminium low-profile" },
    ],
    applications: ["Entrances", "Balconies", "Patios"],
  },
  {
    slug: "slide-and-fold-door",
    name: "Slide & Fold Door",
    kind: "slide-fold",
    category: "Doors",
    material: "Aluminium",
    summary: "Bi-fold panels that stack neatly for a fully open wall.",
    description:
      "Up to seven panels fold and stack to one or both sides, dissolving the boundary between indoors and outdoors. Top-hung running gear keeps operation light even on wide openings.",
    highlights: [
      "Opens up to 95% of the aperture",
      "Inward or outward folding",
      "Top-hung running gear",
      "Traffic door option",
    ],
    specs: [
      { label: "Profile depth", value: "65 – 75 mm" },
      { label: "Max panel size", value: "1000 × 2700 mm" },
      { label: "Panels", value: "2 – 7 per frame" },
      { label: "Glazing", value: "Up to 32 mm" },
      { label: "Hardware", value: "Top-hung bi-fold gear" },
    ],
    applications: ["Restaurants", "Villas", "Showrooms"],
  },
  {
    slug: "bay-window",
    name: "Bay Window",
    kind: "bay",
    category: "Specialty",
    material: "uPVC",
    summary: "Projecting window combinations that add depth and light.",
    description:
      "Bay and bow configurations extend the room outward, creating a seating nook and capturing light from three directions. Engineered couplers and bay poles ensure structural rigidity.",
    highlights: [
      "90°, 135° and 150° couplers",
      "Combine fixed & openable vents",
      "Structural bay poles",
      "Factory-assembled units",
    ],
    specs: [
      { label: "Angles", value: "90° / 135° / 150°" },
      { label: "Max width", value: "3600 mm" },
      { label: "Glazing", value: "5 – 32 mm" },
      { label: "Vents", value: "Casement / fixed / tilt & turn" },
      { label: "Reinforcement", value: "Galvanised steel" },
    ],
    applications: ["Living rooms", "Bungalows", "Cafés"],
  },
  {
    slug: "ventilator-louver",
    name: "Ventilator & Louver",
    kind: "louver",
    category: "Specialty",
    material: "uPVC / Aluminium",
    summary: "Compact ventilators for bathrooms, utilities and exhausts.",
    description:
      "Small-format ventilators with fixed or adjustable louvers, exhaust fan provisions and top-hung vents. Keeps wet areas fresh while maintaining privacy with frosted glass options.",
    highlights: [
      "Exhaust fan cut-out provision",
      "Adjustable glass louvers",
      "Frosted / tinted glass",
      "Top-hung vent option",
    ],
    specs: [
      { label: "Profile depth", value: "60 mm" },
      { label: "Max size", value: "900 × 900 mm" },
      { label: "Glazing", value: "5 – 6 mm louvers" },
      { label: "Options", value: "Fan cut-out, mesh" },
      { label: "Finish", value: "White / woodgrain / colours" },
    ],
    applications: ["Bathrooms", "Utilities", "Stairwells"],
  },
];

export const categories: ("All" | Category)[] = ["All", "Windows", "Doors", "Specialty"];

export const stats = [
  { value: 15, suffix: "+", label: "Years of craftsmanship" },
  { value: 12000, suffix: "+", label: "Windows installed" },
  { value: 850, suffix: "+", label: "Projects delivered" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
];

export const features = [
  {
    icon: "ThermometerSun",
    title: "Thermal Insulation",
    text: "Multi-chamber profiles and double glazing keep interiors up to 5°C cooler and cut AC costs.",
  },
  {
    icon: "Volume2",
    title: "Acoustic Comfort",
    text: "Reduce outside noise by up to 40 dB — silence the traffic, keep the view.",
  },
  {
    icon: "CloudRain",
    title: "Weather Sealed",
    text: "EPDM gaskets and engineered drainage tested against heavy monsoon rain and wind loads.",
  },
  {
    icon: "ShieldCheck",
    title: "Secure by Design",
    text: "Steel reinforcement and multi-point locking hardware for peace of mind.",
  },
  {
    icon: "Sparkles",
    title: "Zero Maintenance",
    text: "UV-stabilised, lead-free profiles that never rot, rust, warp or need painting.",
  },
  {
    icon: "Leaf",
    title: "Sustainable",
    text: "Fully recyclable materials and energy-efficient performance for greener buildings.",
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

export const finishes = [
  { name: "Classic White", color: "#f4f4f2" },
  { name: "Golden Oak", color: "#b07a3f" },
  { name: "Walnut", color: "#5b3a24" },
  { name: "Anthracite Grey", color: "#383e42" },
  { name: "Jet Black", color: "#16181b" },
  { name: "Silver Grey", color: "#a5a9ad" },
];

export const testimonials = [
  {
    quote:
      "The sliding windows completely transformed our apartment. The traffic noise is gone and the AC bill dropped noticeably in the first summer.",
    name: "Rajesh Patel",
    role: "Homeowner, Ahmedabad",
  },
  {
    quote:
      "Sakar delivered 400+ units for our residential tower on schedule. Finishing and site coordination were genuinely professional.",
    name: "Meera Shah",
    role: "Project Manager, Builder Group",
  },
  {
    quote:
      "We specified their slide & fold doors for a restaurant façade. Smooth, sturdy and the clients love the open feel.",
    name: "Ar. Kunal Desai",
    role: "Principal Architect",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
