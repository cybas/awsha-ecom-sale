'use client';

import { useState } from 'react';
import Link from 'next/link';
import QuantitySelector from '@/components/quantity-selector';
import AddToCartButton from '@/components/add-to-cart-button';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { AW } from '@/lib/constants';

interface PdpActionsProps {
  product: Product;
}

const PdpActions = ({ product }: PdpActionsProps) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <AddToCartButton
          product={product}
          quantity={quantity}
          className="flex-grow text-base py-6"
        >
          Add to Cart
        </AddToCartButton>
      </div>
      <div>
        <Button variant="outline" className="w-full py-6 text-base bg-white" asChild>
          <Link href={`${AW}/checkout/`} target="_blank">
            Proceed to Checkout
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PdpActions;
