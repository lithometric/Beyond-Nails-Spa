export const SITE_URL = "https://beyond-nails-spa.vercel.app";

export const business = {
  name: "Beyond Nails & Spa",
  tagline: "Nails, beyond the ordinary.",
  address: {
    street: "1040A Stuyvesant Ave",
    city: "Union",
    state: "NJ",
    zip: "07083",
  },
  phone: "(908) 810-8838",
  phoneHref: "tel:+19088108838",
  instagram: "https://www.instagram.com/beyond_nailsbymay/",
  instagramHandle: "@beyond_nailsbymay",
  googleMapsUrl:
    "https://www.google.com/maps/place/Beyond+Nails+%26+Spa/@40.6973038,-74.2684725,17z/data=!3m1!4b1!4m6!3m5!1s0x89c3ad09c636383b:0x638ac96faf18ea6f!8m2!3d40.6973038!4d-74.2684725!16s%2Fg%2F11g879fx84",
  rating: 4.1,
  reviewCount: 183,
  hours: [
    { days: "Monday – Saturday", time: "9:30 AM – 7:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
};

export type Service = {
  name: string;
  description: string;
  price: string;
  duration?: string;
  popular?: boolean;
};

export type ServiceCategory = {
  title: string;
  blurb: string;
  services: Service[];
};

// Prices are "from" estimates — confirm with the salon before launch.
export const serviceMenu: ServiceCategory[] = [
  {
    title: "Manicures",
    blurb: "Clean shaping, cuticle care, and a flawless finish — classic or long-wear gel.",
    services: [
      {
        name: "Classic Manicure",
        description: "Shape, cuticle care, massage, and polish of your choice.",
        price: "from $15",
        duration: "30 min",
      },
      {
        name: "Gel Manicure",
        description: "Chip-resistant gel color with a glass-like shine, cured to last 2+ weeks.",
        price: "from $35",
        duration: "45 min",
        popular: true,
      },
      {
        name: "French Manicure",
        description: "The timeless white-tip finish, crisp and hand-painted.",
        price: "from $25",
        duration: "40 min",
      },
    ],
  },
  {
    title: "Pedicures",
    blurb: "Sit back in the spa chair — exfoliation, massage, and a perfect polish.",
    services: [
      {
        name: "Classic Pedicure",
        description: "Soak, exfoliation, callus care, massage, and polish.",
        price: "from $30",
        duration: "45 min",
      },
      {
        name: "Spa Pedicure",
        description: "An elevated ritual with extended massage, masque, and hot towels.",
        price: "from $45",
        duration: "60 min",
        popular: true,
      },
      {
        name: "Gel Pedicure",
        description: "The classic pedicure finished with long-wear gel color.",
        price: "from $45",
        duration: "60 min",
      },
    ],
  },
  {
    title: "Enhancements & Nail Art",
    blurb: "Length, strength, and custom designs — from milky French to chrome.",
    services: [
      {
        name: "Acrylic Full Set",
        description: "Sculpted length and shape — coffin, almond, square, or stiletto.",
        price: "from $45",
        duration: "75 min",
        popular: true,
      },
      {
        name: "Acrylic Fill",
        description: "Refresh your set as it grows out, rebalanced and re-polished.",
        price: "from $30",
        duration: "60 min",
      },
      {
        name: "Custom Nail Art",
        description: "Hand-painted designs, French twists, chrome, ombré, and more.",
        price: "from $5 / nail",
      },
    ],
  },
  {
    title: "Lashes, Brows & Waxing",
    blurb: "Finishing touches for the full look, done with a gentle hand.",
    services: [
      {
        name: "Lash Extensions",
        description: "Feather-light individual lashes, from natural to full glam.",
        price: "from $80",
        duration: "90 min",
      },
      {
        name: "Brow Tint & Shaping",
        description: "Defined, fuller-looking brows tailored to your face.",
        price: "from $20",
        duration: "30 min",
      },
      {
        name: "Waxing",
        description: "Brow, lip, chin, and facial waxing with soothing aftercare.",
        price: "from $8",
      },
    ],
  },
];

export type Review = {
  quote: string;
  name: string;
  service: string;
  stars: number;
};

export const reviews: Review[] = [
  {
    quote:
      "I absolutely love this place! They have the best pedicures — the staff is so kind and friendly.",
    name: "Maria G.",
    service: "Spa Pedicure",
    stars: 5,
  },
  {
    quote:
      "Quick and efficient service done by Mercy for my gel mani pedi. She was amazing!",
    name: "Fadjy V.",
    service: "Gel Mani + Pedi",
    stars: 5,
  },
  {
    quote:
      "The staff is so professional and friendly. I've had countless pedicures, manicures, fills, designs, brow tints, and lash extensions here.",
    name: "Google review",
    service: "Regular client",
    stars: 5,
  },
  {
    quote:
      "Every visit is truly exceptional. The nail techs deliver beautiful nails and a relaxing experience.",
    name: "Google review",
    service: "Manicure",
    stars: 5,
  },
];

export type GalleryItem = {
  title: string;
  tag: string;
  gradient: string;
  image?: string;
};

// Drop real photos into /public/gallery and set `image` (e.g. "/gallery/set-01.jpg")
// to replace the gradient tile with the photo.
export const galleryItems: GalleryItem[] = [
  {
    title: "Lilac Hour",
    tag: "Gel Manicure",
    gradient: "linear-gradient(140deg, #d8cfe8 0%, #b3a2cf 55%, #8d7ab0 100%)",
  },
  {
    title: "Milky French",
    tag: "French Manicure",
    gradient: "linear-gradient(140deg, #fdfbf8 0%, #f3e9e2 55%, #e3d3c8 100%)",
  },
  {
    title: "Ballet Slipper",
    tag: "Classic Manicure",
    gradient: "linear-gradient(140deg, #f9e4ec 0%, #f0c8d8 55%, #e0a8bf 100%)",
  },
  {
    title: "Chrome Petal",
    tag: "Nail Art",
    gradient:
      "linear-gradient(140deg, #e8e6f2 0%, #cfc3e6 40%, #e9d5e2 70%, #c4b6d8 100%)",
  },
  {
    title: "Cherry Glaze",
    tag: "Gel Pedicure",
    gradient: "linear-gradient(140deg, #f2b8c6 0%, #d76d8b 55%, #b04563 100%)",
  },
  {
    title: "Cocoa Silk",
    tag: "Acrylic Set",
    gradient: "linear-gradient(140deg, #e9dcd2 0%, #c9ab97 55%, #9c7860 100%)",
  },
  {
    title: "Midnight Violet",
    tag: "Gel Manicure",
    gradient: "linear-gradient(140deg, #8d7ab0 0%, #5d4d7d 55%, #3a2f52 100%)",
  },
  {
    title: "Pearl Ombré",
    tag: "Nail Art",
    gradient:
      "linear-gradient(140deg, #fdfbf8 0%, #ece4f2 45%, #d7c8e6 75%, #c0adda 100%)",
  },
];
