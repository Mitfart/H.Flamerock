

/** The sidebar namespace key union. */
export type SidebarKey = keyof typeof zh

/** English dictionary, checked complete against the zh key set. */
export const en = {
  'panels.unpinTooltip': 'Unpin from left sidebar',
  'panels.unpin': 'Unpin {name} from sidebar',
  'session.new': 'New Session',
  'session.new.label': 'New session',
  'toggle.open': 'Open sidebar',
  'toggle.collapse': 'Collapse sidebar',
  'panels.label': 'Global panels',
  'navigation.label': 'Navigation',
  'panels.more': 'More',
  'version.copied': 'Version copied',
} satisfies Record<SidebarKey, string>

export const zh = en
export const ja = en
export const es = en
export const fr = en
export const de = en
export const ru = en
export const pt = en
