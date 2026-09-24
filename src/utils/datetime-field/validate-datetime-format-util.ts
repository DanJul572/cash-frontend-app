import {
  DATETIME_FORMAT_ALLOWED_CATEGORY_CONSTANT,
  DATETIME_FORMAT_REQUIRED_SECTION_CONSTANT,
  DATETIME_FORMAT_TOKEN_CONSTANT,
} from '@constants/datetime-field/datetime-field-component-constant';
import type {
  DateTimeFieldType,
  DateTimeFormatValidationResultType,
} from '@type-defs/datetime-field/datetime-field-component-type';

const LETTER_PATTERN = /[a-zA-Z]/;

const invalid = (
  errorKey: string,
  errorParams?: Record<string, string>,
): DateTimeFormatValidationResultType => ({ isValid: false, errorKey, errorParams });

/**
 * Validates a dayjs format string against what the matching MUI picker can render.
 * Text wrapped in `[...]` is treated as an escaped literal.
 */
export const validateDateTimeFormat = (
  fieldType: DateTimeFieldType,
  format: unknown,
): DateTimeFormatValidationResultType => {
  if (typeof format !== 'string' || format.trim() === '') {
    return invalid('datetimeFormatEmpty');
  }

  const tokens: string[] = [];
  let index = 0;

  while (index < format.length) {
    const char = format[index];

    if (char === '[') {
      const escapeEnd = format.indexOf(']', index);
      if (escapeEnd === -1) return invalid('datetimeFormatUnclosedEscape');
      index = escapeEnd + 1;
      continue;
    }

    if (!LETTER_PATTERN.test(char)) {
      index++;
      continue;
    }

    // A token is a run of the same letter, except the ordinal day `Do`.
    let end = index;
    while (format[end + 1] === char) end++;
    let token = format.slice(index, end + 1);
    if (token === 'D' && format[end + 1] === 'o') {
      token = 'Do';
      end++;
    }

    if (!Object.hasOwn(DATETIME_FORMAT_TOKEN_CONSTANT, token)) {
      return invalid('datetimeFormatUnsupportedToken', { token });
    }

    tokens.push(token);
    index = end + 1;
  }

  const allowedCategories = DATETIME_FORMAT_ALLOWED_CATEGORY_CONSTANT[fieldType];
  const forbiddenToken = tokens.find(
    (token) => !allowedCategories.includes(DATETIME_FORMAT_TOKEN_CONSTANT[token].category),
  );
  if (forbiddenToken) {
    return invalid('datetimeFormatForbiddenToken', { token: forbiddenToken, fieldType });
  }

  const sections = new Set(tokens.map((token) => DATETIME_FORMAT_TOKEN_CONSTANT[token].section));

  const missingHints = DATETIME_FORMAT_REQUIRED_SECTION_CONSTANT[fieldType]
    .filter((required) => !required.sections.some((section) => sections.has(section)))
    .map((required) => required.hint);
  if (missingHints.length > 0) {
    return invalid('datetimeFormatMissingToken', { tokens: missingHints.join(', ') });
  }

  const is12Hour = sections.has('hours12');
  if (is12Hour && !sections.has('meridiem')) {
    return invalid('datetimeFormatMissingMeridiem');
  }
  if (!is12Hour && sections.has('meridiem')) {
    return invalid('datetimeFormatUnexpectedMeridiem');
  }

  return { isValid: true, is12Hour };
};
