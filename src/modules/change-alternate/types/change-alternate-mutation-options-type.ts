import type { MutateOptions } from '@tanstack/react-query';

export type ChangeAlternatePostResponseType = {
    status: boolean;
    message: string;
    data: null;
};

export type PostChangeAlternateMutationOptionsType = MutateOptions<
    ChangeAlternatePostResponseType,
    Error,
    string
>;
