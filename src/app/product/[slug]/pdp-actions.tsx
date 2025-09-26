'use client';

import { useState } from 'react';
import QuantitySelector from '@/components/quantity-selector';
import { AddToCartButton } from '@/components/add-to-cart-button';
import type { Product } from '@/lib/types';
import { SKUS } from '@/data/skus';

interface PdpActionsProps {
  product: Product;
}

const PdpActions = ({ product }: PdpActionsProps) => {
  const [quantity, setQuantity] = useState(1);

  // For variable oils, we need to force the bundle type.
  const isVariableOil = [SKUS.BOP4500, SKUS.BOT4500, SKUS.BON1500].includes(product.sku);
  const overrides = isVariableOil ? { bundle: "single-bottle" } : undefined;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <AddToCartButton
          sku={product.sku}
          quantity={quantity}
          overrides={overrides}
          className="flex-grow text-base py-6 font-bold"
        />
      </div>
      <div>
        <AddToCartButton
          sku={product.sku}
          quantity={quantity}
          go="checkout"
          overrides={overrides}
          className="w-full py-6 text-base font-bold"
          style={{ backgroundColor: 'hsl(var(--aw-green))', color: 'hsl(var(--primary-foreground))' }}
        />
      </div>
    </div>
  );
};

export default PdpActions;
