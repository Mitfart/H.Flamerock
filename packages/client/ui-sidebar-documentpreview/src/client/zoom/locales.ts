/** Shared zoom copy embedded into renderer-owned dictionaries. */
export const zoomZh: Record<string, string> = {}

/** Shared English zoom copy. */
export const zoomEn = {
  zoomControls: 'Zoom controls',
  zoomMenu: 'Choose zoom',
  zoomOut: 'Zoom out',
  zoomIn: 'Zoom in',
  zoomFitWidth: 'Fit width',
  zoomValue: '{percent}%',
} satisfies Record<keyof typeof zoomZh, string>

/** Shared zoom dictionary keys. */
export type ZoomLocaleKey = keyof typeof zoomZh

/** Japanese copy, checked against the English keys. */
export const zoomJa: Record<string, string> = {}

/** Spanish dictionary, checked against the English keys. */
export const zoomEs: Record<string, string> = {}

/** French dictionary, checked against the English keys. */
export const zoomFr: Record<string, string> = {}

/** German dictionary, checked against the English keys. */
export const zoomDe: Record<string, string> = {}

/** Russian dictionary, checked against the English keys. */
export const zoomRu: Record<string, string> = {}

/** Portuguese dictionary, checked against the English keys. */
export const zoomPt: Record<string, string> = {}
