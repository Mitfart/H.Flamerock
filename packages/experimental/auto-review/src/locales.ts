/** English approval text; reviewer reasons remain verbatim. */

/** English approval messages. */
export const en = {
  denied: 'Auto review denied this call.',
  deniedWithReason: (reason: string): string => `Auto review denied this call: ${reason}`,
}

/**
 * Build the English display text without translating the reviewer's raw reason.
 * @param reason - optional reviewer explanation.
 * @returns English text for the Client's localized-text resolver.
 */
export function deniedDisplayReason(reason?: string): { readonly en: string; readonly [locale: string]: string } {
  return reason === undefined
    ? { en: en.denied }
    : { en: en.deniedWithReason(reason) }
}
