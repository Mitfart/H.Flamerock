/** Locale-owned approval text; reviewer reasons remain verbatim in every language. */

/** English approval messages. */
export const en = {
  denied: 'Auto review denied this call.',
  deniedWithReason: (reason: string): string => `Auto review denied this call: ${reason}`,
}

/** Chinese approval messages. */
export const zh: Record<string, string> = {}

/** Japanese approval messages. */
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
 * Build all display translations without translating the reviewer's raw reason.
 * @param reason - optional reviewer explanation.
 * @returns text for the Client's localized-text resolver.
 */
export function deniedDisplayReason(reason?: string): Record<'en' | 'zh' | 'ja' | 'es' | 'fr' | 'de' | 'ru' | 'pt', string> {
  return reason === undefined
    ? { en: en.denied, zh: zh.denied, ja: ja.denied, es: es.denied, fr: fr.denied, de: de.denied, ru: ru.denied, pt: pt.denied }
    : {
      en: en.deniedWithReason(reason),
      zh: zh.deniedWithReason(reason),
      ja: ja.deniedWithReason(reason),
      es: es.deniedWithReason(reason),
      fr: fr.deniedWithReason(reason),
      de: de.deniedWithReason(reason),
      ru: ru.deniedWithReason(reason),
      pt: pt.deniedWithReason(reason),
    }
}
