/** Locale-owned sandbox approval text; audit inputs remain verbatim. */

/** English escalation messages. */
export const en = {
  escalation: (mode: string, justification: string): string => `Allow this operation with ${mode} permissions: ${justification}`,
}

/** Chinese escalation messages. */
export const zh: Record<string, string> = {}

/** Japanese escalation messages. */
export const ja: Record<string, string> = {}

/** Spanish dictionary, checked against the English keys. */
export const es: Record<string, string> = {}

/** French dictionary, checked against the English keys. */
export const fr: Record<string, string> = {}

/** German dictionary, checked against the English keys. */
export const de: Record<string, string> = {}

/** Russian dictionary, checked against the English keys. */
export const ru: Record<string, string> = {}

/** Portuguese dictionary, checked against the English keys. */
export const pt: Record<string, string> = {}

/**
 * Build translations for the existing Client localized-text resolver.
 * @param mode - requested sandbox mode.
 * @param justification - raw model justification, preserved in every translation.
 * @returns localized approval text.
 */
export function escalationDisplayReason(mode: string, justification: string): Record<'en' | 'zh' | 'ja' | 'es' | 'fr' | 'de' | 'ru' | 'pt', string> {
  return {
    en: en.escalation(mode, justification),
    zh: zh.escalation(mode, justification),
    ja: ja.escalation(mode, justification),
    es: es.escalation(mode, justification),
    fr: fr.escalation(mode, justification),
    de: de.escalation(mode, justification),
    ru: ru.escalation(mode, justification),
    pt: pt.escalation(mode, justification),
  }
}
