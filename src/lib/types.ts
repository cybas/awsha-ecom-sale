export type Product = {
  id: number;
  slug: string;
  name: string;
  mrp: number;
  sale: number;
  size?: string;
  flavor?: string;
  image: string;
  image_alt: string;
  shortDesc: string;
  description: string;
  additionalInfo: string;
};
