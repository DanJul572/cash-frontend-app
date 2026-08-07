import type z from 'zod';

import type { TreeMenuItem } from '@types';

import { treeMenuResponseSchema } from '../schemas';

export const treeMenuResponseMapper = treeMenuResponseSchema.transform((res) => ({
  items: res.data.items.map(mapTreeMenuItem),
}));

const mapTreeMenuItem = (
  item: z.infer<typeof treeMenuResponseSchema>['data']['items'][number],
): TreeMenuItem => ({
  id: item.id,
  label: item.label,
  href: item.href,
  children: item.children?.map(mapTreeMenuItem),
});
