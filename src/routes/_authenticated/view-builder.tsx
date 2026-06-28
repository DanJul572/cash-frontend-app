import { ViewBuilderPage } from '@features/view-builder/pages';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/view-builder')({
    component: ViewBuilderPage,
});
