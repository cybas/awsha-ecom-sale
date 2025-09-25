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
  const target = skuToWpId[product.sku];

  if (!target) {
    // Fallback for safety, though all products should have a target
    return (
      <Button asChild className={cn('w-full', className)}>
        <Link href={product.wpUrl} target="_blank">
          View Product
        </Link>
      </Button>
    );
  }

  // For Gummies, link to PDP to select options
  if (product.sku === 'CBDGUM') {
    return (
      <Button asChild className={cn('w-full', className)}>
        <Link href="https://awshad.com/shop-now/cbd-gummies/premium-cbdthc-calmagummies/">
          Select Options
        </Link>
      </Button>
    );
  }

  const href = addToCartUrl(target.id, target.attrs, 'cart', quantity);

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
