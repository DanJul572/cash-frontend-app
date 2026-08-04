import { createFileRoute } from '@tanstack/react-router';

import { WelcomePage } from '@modules/welcome/pages';

export const Route = createFileRoute('/')({
  component: WelcomePage,
});
