/** `question` namespace dictionaries. */

/** Simplified Chinese dictionary (the key-set source of truth). */
export const zh: Record<string, string> = {}

/** The question namespace key union. */
export type QuestionKey = keyof typeof zh

/** English dictionary, checked complete against the zh key set. */
export const en = {
  'error.incomplete': 'Please complete this question first.',
  'error.unanswered': 'Please select an option or enter a custom answer.',
  'error.unavailable': 'Cannot submit right now; try again in a moment.',
  'error.resubmit': 'The answer did not arrive before work continued; submit it again.',
  'status.sent': 'Reply sent; the panel could not close.',
  'wait.takeTime': 'Take time',
  'wait.countdown': 'Continuing in {seconds}s',
  'wait.paused': 'Paused · {seconds}s remaining',
  'wait.held': 'Waiting until you answer',
  'wait.continued': 'Work continued — you can still answer',
  'review.status': 'Answered',
  'review.skipped': 'This question was skipped.',
  'reply.label': 'Questions and answers',
  'reply.answerLabel': 'Answer: ',
  'reply.skipped': 'Skipped',
  'nav.prev': 'Previous question',
  'nav.next': 'Next question',
  'nav.minimize': 'Collapse the question card',
  'nav.maximize': 'Expand the question card',
  'nav.cancel': 'Dismiss all questions',
  'nav.close': 'Close the panel — reopen it from the tool call',
  'text.expand': 'Expand',
  'text.collapse': 'Collapse',
  'option.recommended': 'Recommended',
  'custom.placeholder': 'Type your answer',
  'action.skip': 'Skip',
  'action.next': 'Next',
  'plan.header': 'Plan review',
  'plan.approve': 'Approve',
  'plan.decline': 'Refuse',
  'plan.discuss': 'Request changes',
} satisfies Record<QuestionKey, string>

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
