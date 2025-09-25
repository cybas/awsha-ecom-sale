'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Loader2, ShoppingCart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { addToCart } from '@/lib/cart';
import { trackAddToCart } from '@/lib/analytics';
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
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setIsLoading(true);
    // trackAddToCart(product, quantity);
    const result = await addToCart(product.id, quantity);
    setIsLoading(false);

    if (result.ok) {
      setIsSuccess(true);
      toast({
        title: 'Added to cart!',
        description: `${product.name} is now in your cart.`,
        action: (
          <ToastAction altText="View Cart" asChild>
            <Link href="https://awshad.com/cart" target="_blank" rel="noopener noreferrer">View Cart</Link>
          </ToastAction>
        ),
      });
      setTimeout(() => setIsSuccess(false), 2000);
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem adding the item to your cart.',
      });
    }
  };

  return (
    <Button
      onClick={handleAddToCart}
      disabled={isLoading || isSuccess}
      className={cn('w-full', className)}
      aria-live="polite"
    >
      {isLoading ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : isSuccess ? (
        <>
          <Check className="h-5 w-5" />
          <span className="ml-2">Added!</span>
        </>
      ) : (
        <>
          <ShoppingCart className="h-5 w-5" />
          <span className="ml-2">{children || 'Add to Cart'}</span>
        </>
      )}
    </Button>
  );
};

export default AddToCartButton;
