
export const PARENT = {
  BOP4500: 21081, // 4500 Peppermint
  BOT4500: 21071, // 4500 Natural
  BON1500: 21068, // 1500 Natural
  N500:    23446, // 500mg (10ml) – simple product
  CBDGUM:  25467  // Gummies (variable; we'll route to PDP until set)
};

// TODO: REPLACE the 0 numbers with the *actual* variation IDs for “Single Bottle”
export const VARIATION = {
  BOP4500_SINGLE: 0,  // Variation ID for Peppermint 4500 • Single Bottle
  BOT4500_SINGLE: 0,  // Variation ID for Natural 4500 • Single Bottle
  BON1500_SINGLE: 0   // Variation ID for Natural 1500 • Single Bottle
};

const BUNDLE_ATTR_KEY = "attribute_pa_bundle";
const BUNDLE_ATTR_VAL = "single-bottle";


const BASE = "https://awshad.com";

export function cartUrlSimple(id:number, qty=1) {
  return `${BASE}/cart/?add-to-cart=${id}&quantity=${qty}`;
}

export function cartUrlBundle(parentId:number, variationId:number, qty=1, go: "cart" | "checkout" = "cart") {
  if (!variationId) return "#"; // Don't generate a link if the variation ID is missing

  const u = new URL(`${BASE}/${go}/`);
  u.searchParams.set("add-to-cart", String(parentId));
  u.searchParams.set("variation_id", String(variationId));
  u.searchParams.set(BUNDLE_ATTR_KEY, BUNDLE_ATTR_VAL);
  u.searchParams.set("quantity", String(qty));
  return u.toString();
}

export function buyNowUrl(sku: string, quantity: number = 1) {
  const parentId = PARENT[sku as keyof typeof PARENT];
  if (!parentId) return `${BASE}/checkout/`;

  if (sku === "N500") {
    const u = new URL(`${BASE}/checkout/`);
    u.searchParams.set("add-to-cart", String(parentId));
    u.searchParams.set("quantity", String(quantity));
    return u.toString();
  }

  const variationIdKey = `${sku}_SINGLE` as keyof typeof VARIATION;
  const variationId = VARIATION[variationIdKey];

  if (variationId) {
    return cartUrlBundle(parentId, variationId, quantity, "checkout");
  }

  // Fallback for variable products without a variation ID (e.g. CBDGUM) or if IDs are missing
  const productUrlMap: { [key: string]: string } = {
    CBDGUM: "https://awshad.com/shop-now/cbd-gummies/premium-cbdthc-calmagummies/",
  };
  
  return productUrlMap[sku] || `${BASE}/checkout/`;
}
