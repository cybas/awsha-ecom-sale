export const SALE = "https://sale.awshad.com";
export const AW   = "https://awshad.com";
export const SHIPWAY = "https://awshad.shipway.com/track";

type NavLink = {
  label: string;
  href: string;
  external?: boolean;
  children?: NavLink[];
};

export const NAV_SALE: NavLink[] = [
  { label: "Home", href: "/" },

  {
    label: "Shop",
    children: [
      { label: "Oral Tinctures",         href: `${AW}/product-category/cbd-oil/` },
      { label: "CBD + THC Oils",         href: `${AW}/product-category/cbd-thc-oil/` },
      { label: "Capsules",               href: `${AW}/product-category/capsules/` },
      { label: "Topicals",               href: `${AW}/product-category/topicals/` },
      { label: "Mushroom Supplements",   href: `${AW}/product-category/mushroom-supplements/` },
      { label: "Pet Products",           href: `${AW}/product-category/cbd-oil-for-pets/` },
      { label: "Strong CBD Products",    href: `${AW}/product-category/strong-cbd-products/` },
      { label: "Gummies",                href: `${AW}/product-category/cbd-gummies/` },
      { label: "Super Saver Combos",     href: `${AW}/product-category/combos/` }
    ]
  },

  {
    label: "Doctors",
    children: [
      { label: "Online Consultation",    href: `${AW}/doctors-onboard/` },
      { label: "In-person Consultation", href: `${AW}/in-person-consultation/` }
    ]
  },

  {
    label: "Explore Awshad",
    children: [
      { label: "Our Story",   href: `${AW}/our-story/` },
      { label: "Media Features", href: `${AW}/media-features/` },
      { label: "Blog",        href: `${AW}/blog` },
      { label: "FAQ",         href: `${AW}/faq` },
      { label: "Lab Report",  href: `${AW}/lab-report/` }
    ]
  },

  {
    label: "Contact Us",
    children: [
      { label: "Contact Us", href: `${AW}/contact-us/` },
      { label: "Track My Order", href: SHIPWAY, external: true }
    ]
  }
];


export const FOOTER_LINKS_SALE = [
  { label: "Shop",             href: `${AW}/shop-now/` },
  { label: "Track my Order",   href: `${AW}/track-my-order/` },
  { label: "Our Story",        href: `${AW}/our-story/` },
  { label: "Explore Awshad",   href: `${AW}/explore-cbd/` },
  { label: "Contact Us",       href: `${AW}/contact-us/` },
  { label: "Privacy Policy",   href: `${AW}/privacy-policy/` },
  { label: "Refund Policy",    href: `${AW}/refund-policy/` },
  { label: "Terms of Service", href: `${AW}/terms-of-service/` },
  { label: "Shipment Policy",  href: `${AW}/shipment-policy/` },
  { label: "CBD Oil Mumbai",   href: `${AW}/cbd-oil-mumbai/` }
];
