import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_guest/')({
  component: () => <h1>Hello</h1>,
});
