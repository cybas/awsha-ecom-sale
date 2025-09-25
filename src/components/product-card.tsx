import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import Price from '@/components/price';
import AddToCartButton from '@/components/add-to-cart-button';
import type { Product } from '@/lib/types';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const discount = Math.round(((product.mrp - product.sale) / product.mrp) * 100);

  return (
    <Card className="overflow-hidden h-full flex flex-col group transition-shadow duration-300 hover:shadow-xl hover:-translate-y-0.5">
      <div className="flex-grow">
        <Link
          href={`/product/${product.slug}`}
          className="block h-full flex flex-col"
          aria-label={`View details for ${product.name}`}
        >
          <div className="relative aspect-[1/1] overflow-hidden rounded-t-lg border-b">
            <Image
              src={product.image}
              alt={product.image_alt || product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {discount > 0 && 
              <Badge className="absolute top-2 right-2">{discount}% OFF</Badge>
            }
          </div>
          <CardContent className="p-4 flex flex-col flex-grow">
            <h3 className="font-semibold text-base leading-snug h-10 overflow-hidden">
              {product.name}
            </h3>
            <div className="mt-2 mb-4 flex-grow">
              <Price mrp={product.mrp} sale={product.sale} />
            </div>
          </CardContent>
        </Link>
      </div>
      <div className="px-4 pb-4 pt-0 grid grid-cols-2 gap-2">
         <AddToCartButton product={product} />
         <Button style={{ backgroundColor: 'hsl(var(--aw-green))', color: 'hsl(var(--primary-foreground))' }} asChild>
            <Link href={`/product/${product.slug}`}>View</Link>
         </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
