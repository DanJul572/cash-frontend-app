import { createFileRoute, redirect } from '@tanstack/react-router';

import { authMeQuery } from '@/queries';

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async ({ context }) => {
    const user = await context.queryClient.fetchQuery(authMeQuery);

    if (!user) {
      throw redirect({ to: '/login' });
    }

    return { user };
  },
});
