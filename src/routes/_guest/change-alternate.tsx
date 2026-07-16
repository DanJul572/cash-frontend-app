import { createFileRoute } from '@tanstack/react-router';

import { ChangeAlternatePage } from '@modules/change-alternate/pages';

export const Route = createFileRoute('/_guest/change-alternate')({
    component: ChangeAlternatePage,
});
