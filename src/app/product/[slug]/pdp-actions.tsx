'use client';

import { useState } from 'react';
import Link from 'next/link';
import QuantitySelector from '@/components/quantity-selector';
import AddToCartButton from '@/components/add-to-cart-button';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { AW } from '@/lib/constants';
import { skuToWpId, addToCartUrl } from '@/lib/wc';

interface PdpActionsProps {
  product: Product;
}

const PdpActions = ({ product }: PdpActionsProps) => {
  const [quantity, setQuantity] = useState(1);
  const target = skuToWpId[product.sku];

  // For gummies, the "Buy Now" button should also go to the PDP
  const buyNowHref = () => {
    if (!target) return `${AW}/checkout/`;
    if (product.sku === 'CBDGUM') {
      return "https://awshad.com/shop-now/cbd-gummies/premium-cbdthc-calmagummies/";
    }
    return addToCartUrl(target.id, target.attrs, "checkout", quantity);
  }

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
          <Link href={buyNowHref()} target={product.sku !== 'CBDGUM' ? "_blank" : "_self"}>
            {product.sku === 'CBDGUM' ? 'Select Options' : 'Buy Now'}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PdpActions;
