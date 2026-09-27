import type { MutateOptions } from '@tanstack/react-query';

export type SetUserResponseType = {
  status: boolean;
  message: string;
  data: null;
};

export type SetUserMutationOptionsType = MutateOptions<SetUserResponseType, Error, string>;
