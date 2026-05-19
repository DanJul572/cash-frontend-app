import { createFileRoute } from '@tanstack/react-router';

import { Error500Page } from '@/features/error/pages/';

export const Route = createFileRoute('/500')({
    component: Error500Page,
});
