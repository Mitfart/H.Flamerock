/** Typed product copy for recommendation cards. */
export const zh: Record<string, string> = {}

/** Keys shared by every card dictionary. */
export type RecommendationKey = keyof typeof zh

/** English card copy. */
export const en = {
  heading: 'Recommended plugin',
  official: 'Official',
  detailsFor: 'View details: {title}',
  'version-error': 'This plugin is incompatible with this DSH version. Update DSH and retry.',
  'management-error': 'Could not enable the plugin. Open its details to check the error and retry.',
  enable: 'Enable',
  dismiss: 'Not now',
  working: 'Working…',
  scope: 'Available in all conversations when enabled',
  enabled: 'Enabled',
  'already-enabled': 'Already selected in Plugins. Open details to check its runtime status.',
  dismissed: 'Dismissed',
  replaced: 'Replaced',
  'restart-required': 'Saved. Restart DSH to apply.',
  failed: 'Could not enable. Retry or check Plugins.',
  retry: 'Retry enabling',
  unconfirmed: 'Could not confirm whether the plugin was enabled. Retry to check.',
  'lookup-failed': 'Could not load this plugin’s details. Try again.',
  retryLookup: 'Try again',
  unavailable: 'This plugin cannot be enabled now. Check Plugins.',
  unknown: 'This recommendation is unavailable. Reopen the conversation.',
  'access-denied': 'You do not have permission to change this profile.',
  'not-live-root': 'Use this recommendation in its original conversation.',
  closing: 'The service is reloading. Try again shortly.',
  transport: 'Could not confirm the result. Refresh and try again.',
} satisfies Record<RecommendationKey, string>

/** Japanese card copy. */
export const ja: Record<string, string> = {}

/** Spanish card copy. */
export const es: Record<string, string> = {}

/** French card copy. */
export const fr: Record<string, string> = {}

/** German card copy. */
export const de: Record<string, string> = {}

/** Russian card copy. */
export const ru: Record<string, string> = {}

/** Portuguese card copy. */
export const pt: Record<string, string> = {}
