const BASE = "https://awshad.com";

// Build the server-side bridge URL:
// go: "cart" | "checkout"
// extras: optional overrides, e.g. { bundle: "single-bottle" } or { "attribute_pa_quantity": "30-gummies" }
export function bridgeUrl(
  sku: string,
  qty: number = 1,
  go: "cart" | "checkout" = "checkout", // default to checkout for Buy Now
  extras?: Record<string, string>,
  ret: string = "https://sale.awshad.com/" // fallback
) {
  const u = new URL(`${BASE}/`);
  u.searchParams.set("aw_cart_bridge", "1");
  u.searchParams.set("sku", sku);
  u.searchParams.set("qty", String(qty));
  u.searchParams.set("go", go);
  u.searchParams.set("from", "sale");
  u.searchParams.set("return", ret);
  if (extras) Object.entries(extras).forEach(([k, v]) => u.searchParams.set(k, v));
  return u.toString();
}
