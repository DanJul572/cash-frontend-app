import type { z } from 'zod';

import type { guestConfigResponseSchema } from '@schemas';

// The host passes each remote its slice of the guest config, so it declares every module's
// config from the same schema that validates the response.
type GuestModulesSchemaType = z.infer<typeof guestConfigResponseSchema>['data']['modules'];

declare module '@zapplib/core' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type -- adds the schema's keys
  interface GuestModulesConfigType extends GuestModulesSchemaType {}
}
