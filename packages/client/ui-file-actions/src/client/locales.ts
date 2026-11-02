/** Original-file actions and completion feedback. */

/** zh file-action labels. */
export const zh: Record<string, string> = {}

/** File-action dictionary keys. */
export type FileActionKey = keyof typeof zh

/** en file-action labels. */
export const en = {
  'menu.finder': 'Show in Finder',
  'menu.reveal': 'Show in folder',
  'menu.saveAs': 'Save as…',
  'menu.copied': 'Copied',
  'menu.copyImage': 'Copy image',
  'menu.download': 'Download',
  'menu.saveFailed': 'Could not save. Check the source and destination, then retry.',
  'menu.copyFailed': 'Could not copy. Check that the content is available, then retry.',
  'menu.saved': 'Saved',
  'menu.downloadStarted': 'Download started',
  'menu.downloaded': 'Download complete',
  'path.revealError': 'Could not show the file location. Try again.',
} satisfies Record<FileActionKey, string>

/** ja file-action labels. */
export const ja: Record<string, string> = {}

/** es file-action labels. */
export const es: Record<string, string> = {}

/** fr file-action labels. */
export const fr: Record<string, string> = {}

/** de file-action labels. */
export const de: Record<string, string> = {}

/** ru file-action labels. */
export const ru: Record<string, string> = {}

/** pt file-action labels. */
export const pt: Record<string, string> = {}
