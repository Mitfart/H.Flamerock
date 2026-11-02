/** Copy dictionaries for the plugin inventory Settings section. */

/** Simplified Chinese dictionary and key source of truth. */
export const zh: Record<string, string> = {}

/** Plugin inventory locale key union. */
export type PluginInventoryLocaleKey = keyof typeof zh

/** English dictionary checked against the Chinese key set. */
export const en = {
  tab: 'Plugin list',
  loading: 'Reading plugins…',
  clientSyncing: 'Syncing plugins on this page…',
  clientSyncFailed: 'Some plugins could not sync on this page. Host enablement is unchanged.',
  clientSyncRetry: 'Retry this page',
  error: 'Plugins are temporarily unavailable.',
  metadataError: 'Package metadata error: {error}',
  retry: 'Retry',
  search: 'Search plugins',
  empty: 'No plugins are available.',
  emptySearch: 'No matching plugins.',
  presetTitle: 'Session plugins',
  presetSubtitle: 'Composed per session by agent presets',
  switcherLabel: 'Choose the agent preset to inspect',
  presetOptionDefault: '{name} (default)',
  presetOptionBroken: '{name} (failed to load)',
  globalTitle: 'Global plugins',
  globalSubtitle: 'Shared by the system and every session',
  presetProvidedDetail: 'Disabled globally; agent presets provide it per session',
  enabledIn: 'Enabled in',
  matchesInOtherPresets: '{count} more matches in other presets: ',
  enabledTag: 'Enabled',
  disabledTag: 'Disabled',
  conditionalTag: 'Conditional',
  presetEnabledTag: 'Via presets',
  failedTag: 'Failed',
  moduleLabel: 'Module',
  fromPreset: 'From',
  condition: 'Disabled when',
  configuration: 'Configuration',
  runtime: 'Status',
  unobserved: 'Not running',
  pending: 'Waiting for dependencies',
  loadingPhase: 'Loading',
  active: 'Running',
  failed: 'Failed to start',
  unloading: 'Unloading',
} satisfies Record<PluginInventoryLocaleKey, string>

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
