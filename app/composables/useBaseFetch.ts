import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";

/**
 * A custom fetch composable that provides a base configuration for API requests.
 *
 * This function wraps Nuxt's `useFetch` with predefined defaults, such as
 * automatically setting the base URL from runtime configuration when available.
 *
 * @template T - The expected response data type
 * @param url - The URL to fetch (relative to baseURL if configured)
 * @param options - Additional fetch options to merge with defaults
 * @returns The result of `useFetch` with merged options
 *
 * @example
 * // Basic usage with automatic base URL
 * const { data, error } = await useBaseFetch<User[]>('/api/users');
 *
 * @example
 * // With custom options
 * const { data } = await useBaseFetch<User>('/api/user/1', {
 *   method: 'POST',
 *   body: { name: 'John' }
 * });
 */
export function useBaseFetch<T>(url: string, options: UseFetchOptions<T> = {}) {
  const config = useRuntimeConfig();

  // Default options that will be applied to all requests
  const defaults: UseFetchOptions<T> = {};

  // Set baseURL from runtime config if available
  // Note: The runtime config should have `public.baseURL` defined
  // in nuxt.config.ts or the `NUXT_PUBLIC_BASE_URL` environment set
  if (config.public.baseURL) {
    defaults.baseURL = config.public.baseURL as string;
  }

  // Merge user options with defaults (user options take precedence)
  const params = defu(options, defaults);

  return useFetch(url, params);
}
