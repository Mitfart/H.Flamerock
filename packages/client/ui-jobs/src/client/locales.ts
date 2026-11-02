/** `job` namespace dictionaries. */

/** Dictionary namespace owned by this plugin. */
export const NS = 'job'

/** Simplified Chinese dictionary (the key-set source of truth). */
export const zh: Record<string, string> = {}

/** English dictionary, key-identical to the Chinese source of truth. */
export const en: Record<JobKey, string> = {
  'count.live.one': '{count} background job running',
  'count.live.other': '{count} background jobs running',
  'count.idle.one': '{count} background job',
  'count.idle.other': '{count} background jobs',
  'list.aria': 'Background jobs',
  'section.live': 'Running',
  'section.settledCount': 'Finished {count}',
  'section.clear': 'Clear',
  'row.expandAria': 'Show live output of {label}',
  'row.collapseAria': 'Hide live output of {label}',
  'kill.stop': 'Stop task {label}',
  'kill.confirm': 'Click again to confirm',
  'kill.confirmAction': 'Confirm stop',
  'kill.failed': 'Stop failed',
  'status.running': 'running',
  'status.stopping': 'stopping',
  'status.completed': 'completed',
  'status.killed': 'cancelled',
  'status.failed': 'failed',
  'duration.seconds': '{seconds}s',
  'duration.minutes': '{minutes}m {seconds}s',
  'duration.hours': '{hours}h {minutes}m',
  'duration.title.live': 'Running for {duration}',
  'duration.title.done': 'Took {duration}',
  'output.gap': '… earlier output dropped …',
  'output.error': 'live output stream interrupted: {error}',
  'terminal.signal': 'signal {signal}',
  'terminal.exitCode': 'exit {code}',
  'terminal.noExitCode': 'no exit code',
  'terminal.commandLine': 'Command line {n}',
  'terminal.running': 'running',
  'terminal.failed': 'failed',
  'terminal.done': 'done',
  'terminal.copy': 'Copy',
  'terminal.copied': 'Copied',
  'terminal.noOutput': '(no output)',
  'terminal.collapse': 'Collapse',
  'terminal.collapseAria': 'Collapse output',
  'terminal.expand': 'Show {n} more lines',
  'terminal.expandAria': 'Expand {n} collapsed output lines',
}

/** Key domain of the `job` namespace (zh is the source of truth). */
export type JobKey = keyof typeof zh

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
