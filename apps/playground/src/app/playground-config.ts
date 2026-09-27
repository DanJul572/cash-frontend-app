import type { AuthenticatedConfigResponseType } from '@zapplib/core';

// Stands in for the backend's authenticated config that the components read (formats, page size)
export const playgroundConfig: AuthenticatedConfigResponseType = {
  dataPerPage: 10,
  dateTimeFormat: {
    date: 'DD/MM/YYYY',
    time: 'HH:mm',
    datetime: 'DD/MM/YYYY HH:mm',
  },
};
