/**
 * `command` namespace dictionaries: the composer menu's section headings,
 * the client face (title, description, claim token) of the built-in Host
 * commands whose catalog descriptors carry English text only, and the
 * popupSelect shell's copy.
 */

import { builtinCommandTokens } from '@deepseek-ai/dsh-commands/builtin'

/** Simplified Chinese dictionary (the key-set source of truth). */
export const zh: Record<string, string> = {}

/** The command namespace key union. */
export type CommandKey = keyof typeof zh

/** English dictionary, checked complete against the zh key set. */
export const en = {
  'section.add': 'Add',
  'section.commands': 'Commands',
  'label.goal': 'Goal',
  'label.plan': 'Plan',
  'label.feedback': 'Feedback',
  'label.compact': 'Compact',
  'label.permission': 'Permission',
  'label.export': 'Export',
  'description.goal': 'Set or view the goal for a long-running task',
  'description.plan': 'Enter or leave plan mode',
  'description.feedback': 'Record feedback about this session',
  'description.compact': 'Compact older conversation history',
  'description.permission': 'Switch the permission preset (sandbox mode + approval policy)',
  'description.export': 'Download this Session log as a ZIP archive',
  'token.goal': builtinCommandTokens.en.goal,
  'token.plan': builtinCommandTokens.en.plan,
  'token.feedback': builtinCommandTokens.en.feedback,
  'token.compact': builtinCommandTokens.en.compact,
  'token.permission': builtinCommandTokens.en.permission,
  'token.export': builtinCommandTokens.en.export,
  'search.placeholder': 'Search…',
  'search.aria': 'Filter options',
  'status.loading': 'Loading options…',
  'status.applying': 'Applying…',
  'status.empty': 'No options',
  'overlay.aria': '/{command} options',
  'listbox.aria': '/{command} matches',
  'notice.attachmentsUnsupported': '/{command} does not accept attachments; remove them first',
} satisfies Record<CommandKey, string>

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
