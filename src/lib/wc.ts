// TODO: fill this mapping once we export product IDs from Woo
const skuToWpId: Record<string, number> = {
  // "BOP4500": 12345,
  // "BOT4500": 12346,
  // "BON1500": 12347,
  // "N500": 12348,
  // "CBDGUM": 12349,
};

export function getWpProductId(sku: string): number | undefined {
  return skuToWpId[sku];
}

export async function addToCartBySku(sku: string, quantity = 1) {
  const productId = getWpProductId(sku);
  if (!productId) {
    // Fallback UX: open WP PDP so user can add from WP if mapping is missing
    return { ok: false, reason: "MISSING_PRODUCT_ID" };
  }
  const body = new URLSearchParams({ product_id: String(productId), quantity: String(quantity) });
  try {
    const res = await fetch("https://awshad.com/?wc-ajax=add_to_cart", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      credentials: "include"
    });
    if (!res.ok) return { ok: false, reason: "NETWORK_ERROR" };
    // Woo returns JSON; we only need to know success for UI
    return { ok: true };
  } catch (error) {
    return { ok: false, reason: "NETWORK_ERROR" };
  }
}
