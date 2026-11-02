/** Locale-owned application-access approval messages. */

/** English application-access messages. */
export const en = {
  question: 'Allow computer use to launch, read, capture and control this application?',
  detail: 'Allowing or denying applies to every version and copy sharing the same application identity. Session access and denial apply only to this conversation.',
  approve: 'Allow for this session',
}

/** Chinese application-access messages. */
export const zh: Record<string, string> = {}

/** Japanese application-access messages. */
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

/** Display translations resolved by the Client; wire choices stay unchanged. */
export const applicationAccessDisplay = {
  question: {
    en: en.question,
    zh: zh.question,
    ja: ja.question,
    es: es.question,
    fr: fr.question,
    de: de.question,
    ru: ru.question,
    pt: pt.question,
  },
  detail: { en: en.detail, zh: zh.detail, ja: ja.detail, es: es.detail, fr: fr.detail, de: de.detail, ru: ru.detail, pt: pt.detail },
  approve: {
    en: en.approve,
    zh: zh.approve,
    ja: ja.approve,
    es: es.approve,
    fr: fr.approve,
    de: de.approve,
    ru: ru.approve,
    pt: pt.approve,
  },
}
