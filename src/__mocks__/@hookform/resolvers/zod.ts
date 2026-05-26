import { vi } from 'vitest';

export const zodResolver = vi.fn((_: unknown) => async (values: unknown) => ({
    values,
    errors: {},
}));
