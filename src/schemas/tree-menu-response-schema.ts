import z from 'zod';

const treeMenuItemSchema: z.ZodType<{
  id: string;
  label: string;
  href?: string;
  children?: z.infer<typeof treeMenuItemSchema>[];
}> = z.lazy(() =>
  z.object({
    id: z.string(),
    label: z.string(),
    href: z.string().optional(),
    children: z.array(treeMenuItemSchema).optional(),
  }),
);

export const treeMenuResponseSchema = z.object({
  status: z.boolean(),
  message: z.string(),
  data: z.object({
    items: z.array(treeMenuItemSchema),
  }),
});
