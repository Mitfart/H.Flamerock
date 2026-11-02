/** File drag failure copy owned by the transfer plugin. */
export const zh: Record<string, string> = {}

/** English file drag failure copy. */
export const en = { failed: 'Drag failed. Try again.' } satisfies Record<keyof typeof zh, string>

/** Japanese file drag failure copy. */
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

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    /** File transfer failure feedback. */
    fileDrag: keyof typeof zh
  }
}
