import { Error500Page } from '@features/error/pages/';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/500')({
    component: Error500Page,
});
