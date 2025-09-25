'use client';

import { bridgeUrl } from '@/lib/bridge';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';


export function AddToCartButton({
  sku,
  quantity = 1,
  go = 'cart', // "cart" or "checkout"
  overrides, // optional: { bundle: "single-bottle" } etc.
  className,
  children,
}: {
  sku: string;
  quantity?: number;
  go?: 'cart' | 'checkout';
  overrides?: Record<string, string>;
  className?: string;
  children?: React.ReactNode;
}) {
  const href = bridgeUrl(sku, quantity, go, overrides);

  if (sku === "CBDGUM" && go === "cart") {
    return (
      <Button asChild className={cn(className)}>
        <Link href="/product/premium-cbdthc-calmagummies">Select Options</Link>
      </Button>
    )
  }

  return (
    <Button asChild className={cn(className)}>
      <a href={href}>
        {go === 'cart' && <ShoppingCart className="h-5 w-5" />}
        <span className="ml-2">{children || (go === 'checkout' ? 'Buy Now' : 'Add to Cart')}</span>
      </a>
    </Button>
  );
}
