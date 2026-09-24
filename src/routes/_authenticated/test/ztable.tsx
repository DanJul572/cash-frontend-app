import { createFileRoute } from '@tanstack/react-router';

import { TestZTablePage } from '@modules/test/pages';

export const Route = createFileRoute('/_authenticated/test/ztable')({
  component: TestZTablePage,
});
