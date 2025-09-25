'use client';

import { useEffect } from 'react';
import ProductCard from './product-card';
import type { Product } from '@/lib/types';
import { trackViewList } from '@/lib/analytics';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  useEffect(() => {
    // trackViewList(products);
  }, [products]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
