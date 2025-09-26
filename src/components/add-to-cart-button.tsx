'use client';

import { useState, useEffect } from 'react';
import { bridgeUrl } from '@/lib/bridge';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { SKUS } from '@/data/skus';

export function AddToCartButton({
  sku,
  quantity = 1,
  go = 'cart', // "cart" or "checkout"
  overrides, // optional: { bundle: "single-bottle" } etc.
  className,
  children,
  style,
}: {
  sku: string;
  quantity?: number;
  go?: 'cart' | 'checkout';
  overrides?: Record<string, string>;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const [returnUrl, setReturnUrl] = useState('https://sale.awshad.com/');

  useEffect(() => {
    // This ensures we get the client-side URL to prevent hydration mismatches
    setReturnUrl(window.location.href);
  }, []);

  // For variable oils, we must force the bundle type for the bridge to work.
  const isVariableOil = [SKUS.BOP4500, SKUS.BOT4500, SKUS.BON1500].includes(sku);
  const finalOverrides = isVariableOil
    ? { bundle: 'single-bottle', ...overrides }
    : overrides;

  // Gummies are variable and require options. Link to the PDP on the main site instead.
  if (sku === SKUS.CBDGUM) {
    return (
      <Button asChild className={cn('font-bold', className)} style={style}>
        <Link href="https://awshad.com/shop-now/cbd-gummies/premium-cbdthc-calmagummies/">
          Select Options
        </Link>
      </Button>
    );
  }

  const href = bridgeUrl(sku, quantity, go, finalOverrides, returnUrl);

  const buttonContent =
    children || (go === 'checkout' ? 'Buy Now' : 'Add to Cart');
  
  const finalStyle = {
    backgroundColor: 'hsl(var(--aw-green))',
    color: 'hsl(var(--primary-foreground))',
    ...style,
  };

  return (
    <Button asChild className={cn('font-bold', className)} style={finalStyle}>
      <a href={href}>
        {go === 'cart' && <ShoppingCart className="h-5 w-5" />}
        <span className="ml-2">{buttonContent}</span>
      </a>
    </Button>
  );
}
