/** Localized labels for the NodeJS inspector bottom panel and command. */
export const zh: Record<string, string> = {}

/** English labels checked against the bottom-panel dictionary. */
export const en: Record<keyof typeof zh, string> = {
  title: 'NodeJS inspector',
  toggle: 'Toggle NodeJS inspector',
  close: 'Collapse',
  resize: 'Resize NodeJS inspector panel',
  frameTitle: 'NodeJS inspector',
}

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    /** Shared Inspector frontend copy. */
    inspectorPanel: keyof typeof zh
  }
}

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
