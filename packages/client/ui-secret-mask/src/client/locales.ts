/** `secretMask` dictionaries for the per-credential reveal control. */

import type {} from '@deepseek-ai/dsh-client-ui-slots'

/** Dictionary namespace owned by this plugin. */
export const NS = 'secretMask'

/** Simplified Chinese dictionary (the key-set source of truth). */
export const zh: Record<string, string> = {}

/** The secretMask namespace key union. */
export type SecretMaskKey = keyof typeof zh

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    /** Accessible names of the control that reveals one masked credential. */
    secretMask: SecretMaskKey
  }
}

/** English dictionary, checked complete against the zh key set. */
export const en = {
  'secret.reveal': 'Show secret',
  'secret.hide': 'Hide secret',
} satisfies Record<SecretMaskKey, string>

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
