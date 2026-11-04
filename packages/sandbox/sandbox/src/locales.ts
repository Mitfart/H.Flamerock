/** Locale-owned sandbox approval text; audit inputs remain verbatim. */

/** English escalation messages. */
export const en = {
  escalation: (mode: string, justification: string): string => `Allow this operation with ${mode} permissions: ${justification}`,
}

/**
 * Build the English approval text for the Client's localized-text resolver.
 * @param mode - requested sandbox mode.
 * @param justification - raw model justification.
 * @returns English approval text.
 */
export function escalationDisplayReason(mode: string, justification: string): { readonly en: string; readonly [locale: string]: string } {
  return { en: en.escalation(mode, justification) }
}
