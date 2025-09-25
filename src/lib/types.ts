export type Product = {
  sku: string;
  name: string;
  slug: string;
  wpUrl: string;
  image: string;
  mrp: number;
  sale: number;
  strengthMg?: number;
  sizeMl?: number;
  packCount?: number;
  flavor?: string;
  shortDesc: string;
  details: string;
  composition?: string[];
  image_alt: string;
};
