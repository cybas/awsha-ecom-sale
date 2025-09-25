const BASE = "https://awshad.com";

// Build the server-side bridge URL:
// go: "cart" | "checkout"
// extras: optional overrides, e.g. { bundle: "single-bottle" } or { "attribute_pa_quantity": "30-gummies" }
export function bridgeUrl(
  sku: string,
  qty: number = 1,
  go: "cart" | "checkout" = "cart",
  extras?: Record<string, string>
) {
  const u = new URL(`${BASE}/`);
  u.searchParams.set("aw_cart_bridge", "1");
  u.searchParams.set("sku", sku);
  u.searchParams.set("qty", String(qty));
  u.searchParams.set("go", go);
  if (extras) Object.entries(extras).forEach(([k,v]) => u.searchParams.set(k, v));
  return u.toString();
}
