
export const skuToWpId: Record<string, number> = {
  BOP4500: 21081, // Full Spectrum CBD Oil 4500mg (Peppermint)
  BOT4500: 21071, // Full Spectrum CBD Oil 4500mg (Natural)
  BON1500: 21068, // Full Spectrum CBD Oil 1500mg (Natural)
  N500:    23446, // Full Spectrum CBD Oil 500mg (10ml) – Natural
  CBDGUM:  25467  // Premium CBD+THC Calmagummies
};


export function getWpProductId(sku: string): number | undefined {
  return skuToWpId[sku];
}

export const addToCartUrl = (id:number, go:"cart"|"checkout"="cart", qty=1) =>
  `https://awshad.com/${go}/?add-to-cart=${id}&quantity=${qty}`;

