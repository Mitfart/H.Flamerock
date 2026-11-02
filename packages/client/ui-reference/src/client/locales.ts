/** `reference` dictionaries for the unified `@` source and inline file navigation. */

import type {} from '@deepseek-ai/dsh-client-ui-slots'

/** Dictionary namespace owned by this plugin. */
export const NS = 'reference'

/**
 * Simplified Chinese dictionary (the key-set source of truth).
 *
 * The `time.*` bucket words are this namespace's own copy of the session-row
 * vocabulary: locale-owned copy keeps the words per plugin, while the
 * bucketing they name is the one shared {@link relativeTime} in ui-primitives.
 */
export const zh: Record<string, string> = {}

/** The reference namespace key union. */
export type ReferenceKey = keyof typeof zh

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    /** Reference menu and per-file navigation feedback. */
    reference: ReferenceKey
  }
}

/** English dictionary, checked complete against the zh key set. */
export const en = {
  'section.files': 'Files & folders',
  'section.subagents': 'Subagents',
  'section.sessions': 'Sessions',
  'candidate.noCwd': '(no cwd)',
  'crumb.root': 'Workspace',
  'fileOpen.title': 'Couldn’t open file',
  'fileOpen.failed': 'Couldn’t open “{path}”. Try again or close this message.',
  'fileOpen.close': 'Close',
  'fileOpen.retry': 'Retry',
  'time.now': 'now',
  'time.minutes': '{n}min',
  'time.hours': '{n}h',
  'time.days': '{n}d',
  'time.months': '{n}mo',
  'time.years': '{n}y',
} satisfies Record<ReferenceKey, string>

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
