'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { skuToWpId, addToCartUrl } from '@/lib/wc';
import type { Product } from '@/lib/types';
import { cn } from '@/lib/utils';

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
  className?: string;
  children?: React.ReactNode;
}

const AddToCartButton = ({
  product,
  quantity = 1,
  className,
  children,
}: AddToCartButtonProps) => {
  const productId = skuToWpId[product.sku];

  if (!productId) {
    // Fallback to the regular product page if the ID is missing
    return (
      <Button asChild className={cn('w-full', className)}>
        <Link href={product.wpUrl} target="_blank">
          View Product
        </Link>
      </Button>
    );
  }

  const href = addToCartUrl(productId, 'cart', quantity);

  return (
    <Button asChild className={cn('w-full', className)}>
      <Link href={href}>
        <ShoppingCart className="h-5 w-5" />
        <span className="ml-2">{children || 'Add to Cart'}</span>
      </Link>
    </Button>
  );
};

export default AddToCartButton;
