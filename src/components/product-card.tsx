import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import Price from '@/components/price';
import AddToCartButton from '@/components/add-to-cart-button';
import type { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col group transition-shadow duration-300 hover:shadow-xl">
      <div className="flex-grow">
        <Link
          href={`/product/${product.slug}`}
          className="block h-full flex flex-col"
          aria-label={`View details for ${product.name}`}
        >
          <div className="aspect-[4/5] overflow-hidden">
            <Image
              src={product.image}
              alt={product.image_alt}
              width={800}
              height={1000}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <CardContent className="p-4 flex flex-col flex-grow">
            <h3 className="font-semibold text-lg leading-tight truncate">
              {product.name}
            </h3>
            <div className="mt-2 mb-4 flex-grow">
              <Price mrp={product.mrp} sale={product.sale} />
            </div>
          </CardContent>
        </Link>
      </div>
      <div className="px-4 pb-4 pt-0">
        <AddToCartButton product={product} />
      </div>
    </Card>
  );
};

export default ProductCard;
