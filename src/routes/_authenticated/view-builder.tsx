import { ContentStructureBuilder } from '@features/view-builder/components/ContentStructureBuilder';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/view-builder')({
    component: ContentStructureBuilder,
});
