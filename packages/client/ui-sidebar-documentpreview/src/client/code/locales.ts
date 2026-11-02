/** Locale-owned code renderer name and CodeBlock controls. */
import type {} from '@deepseek-ai/dsh-client-ui-slots'

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    /** Code document implementation name and copy controls. */
    sidebarCodePreview: keyof typeof zh
  }
}

/** Simplified Chinese dictionary and key source. */
export const zh: Record<string, string> = {}

/** English dictionary with the same keys. */
export const en = {
  title: 'Code',
  copy: 'Copy',
  copied: 'Copied',
} satisfies Record<keyof typeof zh, string>

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
