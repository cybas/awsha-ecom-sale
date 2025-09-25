import type { Product } from './types';

/**
 * Stubs for analytics tracking.
 * In a real app, you would integrate with an analytics service.
 */

export function trackViewList(products: Product[]) {
  // console.log('Analytics: Viewing product list', { count: products.length });
}

export function trackViewProduct(product: Product) {
  // console.log('Analytics: Viewing product', { id: product.id, name: product.name });
}

export function trackAddToCart(product: Product, quantity: number) {
  // console.log('Analytics: Adding to cart', { id: product.id, name: product.name, quantity });
}
