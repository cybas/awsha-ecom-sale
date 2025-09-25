'use client';

import { useState } from 'react';
import { Loader2, ShoppingCart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { addToCartBySku } from '@/lib/wc';
import type { Product } from '@/lib/types';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { AW } from '@/lib/constants';

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
  const { toast, dismiss } = useToast();
  const router = useRouter();

  const handleAddToCart = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setIsLoading(true);
    const result = await addToCartBySku(product.sku, quantity);
    setIsLoading(false);

    if (result.ok) {
      setIsSuccess(true);
      toast({
        title: 'Added to cart!',
        description: `${product.name} is now in your cart.`,
        action: (
          <div className="flex gap-2">
            <ToastAction
              altText="Checkout"
              onClick={() => (window.location.href = `${AW}/checkout/`)}
            >
              Checkout
            </ToastAction>
             <Button variant="secondary" onClick={() => dismiss()}>Continue shopping</Button>
          </div>
        ),
      });
      setTimeout(() => setIsSuccess(false), 2000);
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh!',
        description: "Couldn't add from sale page. Opening product page...",
      });
      router.push(product.wpUrl);
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
