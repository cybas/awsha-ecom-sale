'use client';

import { useState } from 'react';
import QuantitySelector from '@/components/quantity-selector';
import { AddToCartButton } from '@/components/add-to-cart-button';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';

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
          sku={product.sku}
          quantity={quantity}
          className="flex-grow text-base py-6"
        />
      </div>
      <div>
        <AddToCartButton
          sku={product.sku}
          quantity={quantity}
          go="checkout"
          className="w-full py-6 text-base bg-white"
          overrides={{'variant': 'outline'}}
        />
      </div>
    </div>
  );
};

export default PdpActions;
