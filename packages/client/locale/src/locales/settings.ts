/** `settings.locale` namespace dictionaries (the Language row's copy). */

/** English dictionary for the settings.locale namespace. */
export const en = {
  'language.title': 'Language',
} satisfies Record<string, string>

/** The settings.locale namespace key union. */
export type SettingsLocaleKey = keyof typeof en
