'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PARENT, VARIATION, cartUrlSimple, cartUrlBundle } from '@/lib/wc';
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
  const { sku } = product;
  let href: string | null = null;

  if (sku === "CBDGUM") {
    return (
      <Button asChild className={cn('w-full', className)}>
        <Link href="https://awshad.com/shop-now/cbd-gummies/premium-cbdthc-calmagummies/">
          Select Options
        </Link>
      </Button>
    );
  }
  
  if (sku === "N500") {
    href = cartUrlSimple(PARENT.N500, quantity);
  } else {
    const parentId = PARENT[sku as keyof typeof PARENT];
    const variationIdKey = `${sku}_SINGLE` as keyof typeof VARIATION;
    const variationId = VARIATION[variationIdKey];
    
    if (parentId && variationId) {
      href = cartUrlBundle(parentId, variationId, quantity);
    } else {
      // Fallback to the product page if IDs are not found
      href = product.wpUrl;
    }
  }

  if (href === "#" || !href) {
     return (
      <Button asChild className={cn('w-full', className)}>
        <Link href={product.wpUrl} target="_blank">
          View Product
        </Link>
      </Button>
    );
  }

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
