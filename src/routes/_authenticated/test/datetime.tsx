import { createFileRoute } from '@tanstack/react-router';

import { TestDatetimePage } from '@modules/test/pages';

export const Route = createFileRoute('/_authenticated/test/datetime')({
  component: TestDatetimePage,
});
