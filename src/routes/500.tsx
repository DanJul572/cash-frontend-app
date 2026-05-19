import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/500')({
  component: () => <h1>500 - Internal Server Error</h1>,
});
