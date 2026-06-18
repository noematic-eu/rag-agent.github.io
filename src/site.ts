export const CONTACT_EMAIL = 'contact@noematic.eu';
export const GITHUB_AGENT = 'https://github.com/noematic-eu/rag-agent';
export const GITHUB_ROUTER = 'https://github.com/noematic-eu/rag-router';
export const SITE_NAME = 'Noematic';
export const SITE_URL = 'https://rag.noematic.eu/';

/** Live demo agent base URL (empty = demo hidden). Override via PUBLIC_RAG_AGENT_URL at build time. */
export const RAG_AGENT_URL = (
  import.meta.env.PUBLIC_RAG_AGENT_URL ?? 'https://rag-agent.noematic.eu'
)
  .trim()
  .replace(/\/$/, '');

/** Payhip checkout for monthly supporter subscription (empty = fallback to contact). */
export const CHECKOUT_SUPPORTER_URL = (
  import.meta.env.PUBLIC_CHECKOUT_SUPPORTER_URL ?? 'https://payhip.com/b/Wj5Rl'
).trim();

/** Lemon Squeezy checkout for pay-what-you-want contributions (empty = fallback to contact). */
export const CHECKOUT_DONATION_URL = (
  import.meta.env.PUBLIC_CHECKOUT_DONATION_URL ??
    'https://store.noematic.eu/checkout/buy/736733f7-41f5-42fe-adee-8560101545ab'
).trim();

/** PayPal donate link (empty = hidden secondary CTA). */
export const CHECKOUT_DONATION_PAYPAL_URL = (import.meta.env.PUBLIC_CHECKOUT_DONATION_PAYPAL_URL ?? '').trim();

const LEMON_SQUEEZY_HOSTS = ['lemonsqueezy.com', 'store.noematic.eu'];

/** True when the checkout URL is served by Lemon Squeezy (overlay embed supported). */
export function isLemonSqueezyCheckout(url: string): boolean {
  if (!url) return false;
  try {
    const host = new URL(url).hostname;
    return LEMON_SQUEEZY_HOSTS.some((h) => host === h || host.endsWith(`.${h}`));
  } catch {
    return false;
  }
}

/** Append ?embed=1 for Lemon Squeezy in-page checkout overlay. */
export function lemonSqueezyEmbedHref(url: string): string {
  if (!url) return '';
  const parsed = new URL(url);
  parsed.searchParams.set('embed', '1');
  return parsed.toString();
}
