
export const skuToWpId: Record<string, { id: number; attrs?: Record<string,string> }> = {
  // Variable oils (require pa_bundle)
  BOP4500: { id: 21081, attrs: { "attribute_pa_bundle": "single-bottle" } }, // 4500 Peppermint
  BOT4500: { id: 21071, attrs: { "attribute_pa_bundle": "single-bottle" } }, // 4500 Natural
  BON1500: { id: 21068, attrs: { "attribute_pa_bundle": "single-bottle" } }, // 1500 Natural

  // Simple product (no attribute needed)
  N500:    { id: 23446 },                                                     // 500mg (10ml) Natural

  // Gummies are variable (quantity/pack). Until we set a variation,
  // route users to the PDP (see button logic below).
  CBDGUM:  { id: 25467 }                                                      // Premium CBD+THC Calmagummies
};


export function getWpProductId(sku: string): number | undefined {
  return skuToWpId[sku]?.id;
}

export function addToCartUrl(
  id: number,
  attrs?: Record<string,string>,
  go: "cart" | "checkout" = "cart",
  qty = 1,
  base = "https://awshad.com"
){
  const u = new URL(`${base}/${go}/`);
  u.searchParams.set("add-to-cart", String(id));
  u.searchParams.set("quantity", String(qty));
  if (attrs) for (const [k,v] of Object.entries(attrs)) u.searchParams.set(k, v);
  return u.toString();
}
