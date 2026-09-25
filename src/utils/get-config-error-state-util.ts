import { ZodError } from 'zod';

/**
 * Builds the `/500` page state when a config response fails schema validation,
 * listing every missing or invalid config key (e.g. `dateTimeFormat.date: ...`).
 * Returns `undefined` for other errors so the page shows its default message.
 */
export const getConfigErrorState = (error: unknown) => {
  if (!(error instanceof ZodError)) return undefined;

  const errors = error.issues.map((issue) => {
    const key = issue.path.filter((segment) => segment !== 'data').join('.');
    return `${key}: ${issue.message}`;
  });

  return { message: 'Configuration Not Defined', errors };
};
