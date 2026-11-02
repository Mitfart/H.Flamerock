/** Copy owned by the Quote interaction plugin. */

/** Quote plugin dictionary namespace. */
export const NS = 'messageQuotes'

/** Simplified Chinese dictionary and key source. */
export const zh: Record<string, string> = {}

/** Supported Quote interaction copy keys. */
export type MessageQuotesKey = keyof typeof zh

/** English dictionary. */
export const en: Record<MessageQuotesKey, string> = {
  'quote.add': 'Quote text',
}

/** Japanese dictionary. */
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
