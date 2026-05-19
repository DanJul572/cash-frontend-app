import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_guest/about')({
  component: () => <h1>About</h1>,
});
