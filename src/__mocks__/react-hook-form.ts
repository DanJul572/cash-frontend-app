import type { PropsWithChildren, ReactNode, BaseSyntheticEvent } from 'react';

import { vi } from 'vitest';

type FieldValues = Record<string, unknown>;

type FieldState = {
    invalid: boolean;
    isTouched: boolean;
    isDirty: boolean;
    error: undefined;
};

type FormState = {
    errors: Record<string, unknown>;
    isDirty: boolean;
    isSubmitting: boolean;
    isSubmitted: boolean;
    isSubmitSuccessful: boolean;
    isValid: boolean;
    isValidating: boolean;
    isLoading: boolean;
    touchedFields: Record<string, unknown>;
    dirtyFields: Record<string, unknown>;
    submitCount: number;
    defaultValues: Record<string, unknown>;
};

interface ControllerProps {
    name: string;
    defaultValue?: unknown;
    render: (props: {
        field: ReturnType<typeof makeField>;
        fieldState: FieldState;
        formState: FormState;
    }) => ReactNode;
}

const defaultFormState: FormState = {
    errors: {},
    isDirty: false,
    isSubmitting: false,
    isSubmitted: false,
    isSubmitSuccessful: false,
    isValid: false,
    isValidating: false,
    isLoading: false,
    touchedFields: {},
    dirtyFields: {},
    submitCount: 0,
    defaultValues: {},
};

const defaultFieldState: FieldState = {
    invalid: false,
    isTouched: false,
    isDirty: false,
    error: undefined,
};

const makeField = (name: string, defaultValue?: unknown) => ({
    name,
    value: defaultValue ?? '',
    onChange: vi.fn(),
    onBlur: vi.fn(),
    ref: vi.fn(),
});

const makeFormMethods = () => ({
    register: vi.fn((name: string) => ({
        name,
        ref: vi.fn(),
        onChange: vi.fn(),
        onBlur: vi.fn(),
    })),
    unregister: vi.fn(),
    watch: vi.fn((name?: string) => (name ? '' : {})),
    getValues: vi.fn((name?: string) => (name ? '' : {})),
    getFieldState: vi.fn(() => defaultFieldState),
    setValue: vi.fn(),
    setError: vi.fn(),
    clearErrors: vi.fn(),
    reset: vi.fn(),
    resetField: vi.fn(),
    trigger: vi.fn(async () => true),
    setFocus: vi.fn(),
    handleSubmit: vi.fn(
        (onValid: (data: FieldValues) => void) => async (e?: BaseSyntheticEvent) => {
            e?.preventDefault?.();
            onValid({});
        },
    ),
    formState: defaultFormState,
    control: {},
});

export const useForm = vi.fn(() => makeFormMethods());

export const useFormContext = vi.fn(() => makeFormMethods());

export const useFormState = vi.fn(() => defaultFormState);

export const useWatch = vi.fn(
    (options?: { defaultValue?: unknown }) => options?.defaultValue ?? '',
);

export const useController = vi.fn((options?: { name?: string; defaultValue?: unknown }) => ({
    field: makeField(options?.name ?? '', options?.defaultValue),
    fieldState: defaultFieldState,
    formState: defaultFormState,
}));

export const useFieldArray = vi.fn(() => ({
    fields: [] as unknown[],
    append: vi.fn(),
    prepend: vi.fn(),
    insert: vi.fn(),
    remove: vi.fn(),
    swap: vi.fn(),
    move: vi.fn(),
    update: vi.fn(),
    replace: vi.fn(),
}));

export const Controller = vi.fn(({ name, defaultValue, render }: ControllerProps) =>
    render({
        field: makeField(name, defaultValue),
        fieldState: defaultFieldState,
        formState: defaultFormState,
    }),
);

export const FormProvider = vi.fn(({ children }: PropsWithChildren) => children);

export default {
    useForm,
    useFormContext,
    useFormState,
    useWatch,
    useController,
    useFieldArray,
    Controller,
    FormProvider,
};
