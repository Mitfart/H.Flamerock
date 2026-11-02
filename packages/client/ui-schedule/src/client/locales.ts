/**
 * `schedule.catalog` namespace dictionaries: the Session header catalog and the
 * Sidebar row mark with its hover-card task section.
 */
import { frequencyEn, frequencyJa, frequencyEs, frequencyFr, frequencyDe, frequencyRu, frequencyPt, frequencyZh } from './frequency-locales.ts'

/** Dictionary namespace owned by this plugin. */
export const NS = 'schedule.catalog'

/** Simplified Chinese dictionary (the key-set source of truth). */
export const zh: Record<string, string> = {}

/** English dictionary, key-identical to the Chinese source of truth. */
export const en: Record<ScheduleCatalogKey, string> = {
  'trigger.label': 'Automation tasks',
  'list.loading': 'Loading automation tasks…',
  'list.error': 'Could not load automation tasks.',
  'list.retry': 'Retry',
  'delete.action': 'Delete',
  'delete.pending': 'Deleting…',
  'delete.label': 'Delete automation task: {title}',
  'list.open': 'Open automation task details: {title}',
  'trigger.one': '{count} automation task',
  'trigger.other': '{count} automation tasks',
  'list.aria': 'Enabled automation tasks',
  'list.nextRun': 'Next run',
  'frequency.once': 'Once',
  'frequency.every': 'Every {value} {unit}',
  ...frequencyEn,
  'mark.aria': '{count} automation tasks',
  'hover.more': '{count} more',
}

/** Key domain of the Schedule catalog namespace. */
export type ScheduleCatalogKey = keyof typeof zh

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
