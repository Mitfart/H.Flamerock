/** Web dictionaries for the chrome around a mod's band; the mods' own content is theirs. */

/** Locale namespace owned by the mods band. */
export const NS = 'claude-code-mods'

/** Simplified Chinese dictionary and key source. */
export const zh: Record<string, string> = {}

/** Mods band locale key union. */
export type ModsBandKey = keyof typeof zh

/** English dictionary checked against the Chinese key set. */
export const en = {
  band: 'Claude Code mods',
  pressing: 'Working…',
  'press.failed': 'The button failed: {message}',
  'press.stale': 'That button belonged to an earlier drawing; the band has refreshed',
} satisfies Record<ModsBandKey, string>

/** Japanese copy, checked against the English keys. */
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
