# Panduan Refactor / Module Baru

Dokumen ini berisi aturan dan panduan untuk AI agent ketika melakukan refactor module lama atau membuat module baru. Struktur yang dijadikan acuan adalah module `change-alternate` yang sudah di-refactor.

---

## Struktur Direktori Module

Setiap module harus memiliki struktur direktori berikut (berdasarkan module `change-alternate`):

```
modules/<module-name>/
├── components/
│   ├── index.ts
│   ├── <component-a>-component.tsx
│   └── <component-a>-skeleton-component.tsx
├── endpoints/
│   ├── index.ts
│   └── <module-name>-endpoint.ts
├── hooks/
│   ├── index.ts
│   └── use-<module-name>-page-hook.ts
├── locales/
│   ├── <module-name>-en.json
│   └── <module-name>-id.json
├── mappers/
│   ├── index.ts
│   └── <nama-response>-mapper.ts
├── mocks/
│   ├── index.ts
│   ├── <module-name>-<endpoint>-200-mock.ts
│   └── ...
├── mutations/
│   ├── index.ts
│   └── <action>-mutation.ts
├── pages/
│   ├── index.ts
│   └── <module-name>-page.tsx
├── queries/
│   ├── index.ts
│   └── <getter>-query.ts
├── requests/
│   ├── index.ts
│   ├── <getter>-request.ts
│   ├── <action>-request.ts
│   └── ...
├── schemas/
│   ├── index.ts
│   ├── <nama-response>-schema.ts
│   ├── search-param-schema.ts
│   └── ...
├── styles/
│   ├── index.ts
│   ├── <module-name>-page-style.ts
│   ├── <component>-component-style.ts
│   └── ...
├── types/
│   ├── index.ts
│   ├── <module-name>-<domain>-type.ts
│   ├── <nama-response>-type.ts
│   └── ...
└── utils/
    ├── index.ts
    └── <nama>-util.ts
```

---

## Aturan Penamaan

### 1. Naming Convention

| Layer                    | Aturan                                                     | Contoh                                                 |
| ------------------------ | ---------------------------------------------------------- | ------------------------------------------------------ |
| Folder module            | `kebab-case`                                               | `change-alternate`, `user-management`                  |
| File (kecuali component) | `kebab-case`                                               | `get-user-request.ts`, `user-card-component-style.ts`  |
| File component & page    | `kebab-case` dengan akhiran `-component.tsx` / `-page.tsx` | `user-card-component.tsx`, `change-alternate-page.tsx` |
| File skeleton            | akhiran `-skeleton-component.tsx`                          | `user-card-skeleton-component.tsx`                     |
| File style               | akhiran `-style.ts`                                        | `change-alternate-page-style.ts`                       |
| File type                | akhiran `-type.ts`                                         | `change-alternate-user-type.ts`                        |
| File schema              | akhiran `-schema.ts`                                       | `get-user-response-schema.ts`                          |
| File mapper              | akhiran `-mapper.ts`                                       | `get-user-response-mapper.ts`                          |
| File request             | akhiran `-request.ts`                                      | `get-user-request.ts`                                  |
| File mock                | akhiran `<status>-mock.ts`                                 | `change-alternate-get-user-200-mock.ts`                |
| File endpoint            | akhiran `-endpoint.ts`                                     | `change-alternate-endpoint.ts`                         |
| File util                | akhiran `-util.ts`                                         | `get-initial-name-util.ts`                             |

### 2. Export & Barrel File (`index.ts`)

Setiap sub-folder **WAJIB** memiliki `index.ts` (barrel file) yang me-re-export semua isi folder.

**Aturan:**

- Folder `components/` dan `pages/`: export menggunakan `export { default as PascalCase }` karena menggunakan `default export`.

**components/index.ts:**

```ts
export { default as UserCardComponent } from './user-card-component';
export { default as UserCardSkeletonComponent } from './user-card-skeleton-component';
```

**pages/index.ts:**

```ts
import ChangeAlternatePage from './change-alternate-page';

export { ChangeAlternatePage };
```

> **Catatan:** Untuk halaman, export menggunakan dua baris terpisah (import dulu baru export) karena tidak inline.

- Folder lain (`queries`, `mutations`, `requests`, `endpoints`, `mappers`, `schemas`, `types`, `styles`, `utils`, `hooks`, `mocks`, `locales`): export menggunakan `export * from '...'`.

**contoh queries/index.ts:**

```ts
export * from './get-user-query';
```

### 3. Component & Page Export Rules

Semua component dan page harus `export default`:

```tsx
// ✅ Benar
export default function UserCardComponent() { ... }

// ✅ Benar (untuk page)
export default function ChangeAlternatePage() { ... }
```

---

## Aturan Per Layer

### Endpoints (`endpoints/`)

- Gunakan object literal dengan key `PascalCase`.
- Value adalah string path API.
- Diawali dengan `/`.

```ts
export const ChangeAlternateEndpoint = {
    getUser: `/user-alternate/get-user`,
    setUser: `/user-alternate/set-user`,
    validateToken: `/user-alternate/validate-token`,
};
```

### Schemas (`schemas/`)

- Gunakan `z.object()` dari `zod`.
- Schema respons API mengikuti struktur response dari backend.
- Schema untuk search param di file terpisah (`search-param-schema.ts`).

```ts
import { z } from 'zod';

export const getUserResponseSchema = z.object({
    status: z.number(),
    data: z.array(userSchema),
});
```

### Types (`types/`)

- Untuk tipe yang diturunkan dari schema zod, gunakan `z.input<typeof schema>` atau `z.infer<typeof schema>`.

```ts
import type z from 'zod';

import type { getUserResponseSchema } from '../schemas';

export type GetUserResponseType = z.input<typeof getUserResponseSchema>;
```

- Untuk tipe data domain, buat type biasa.
- Mutation options type menggunakan `MutateOptions` dari `@tanstack/react-query`.

```ts
import type { MutateOptions } from '@tanstack/react-query';

export type SetUserResponseType = {
    status: boolean;
    message: string;
    data: null;
};

export type SetUserMutationOptionsType = MutateOptions<SetUserResponseType, Error, string>;
```

- Component props gunakan `interface` (bukan `type`).

```ts
export interface UserCardComponentPropsType {
    user: UserType;
    onClick: (userId: string) => void;
    isLoading: boolean;
}
```

### Mappers (`mappers/`)

- Gunakan `schema.transform()` dari zod untuk mapping response API ke format yang dibutuhkan frontend.
- Named export (bukan default export).

```ts
import { getUserResponseSchema } from '../schemas';

export const getUserResponseMapper = getUserResponseSchema.transform((res) =>
    res.data.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        photoUrl: user.photoUrl,
    })),
);
```

### Requests (`requests/`)

- Setiap request function melakukan panggilan API menggunakan `axiosInstance` dari `@instances`.
- Response mentah diparse menggunakan mapper (bila ada transformasi) atau langsung return `response.data`.

```ts
import { axiosInstance } from '@instances';

import { ChangeAlternateEndpoint } from '../endpoints';
import { getUserResponseMapper } from '../mappers';
import type { GetUserResponseType } from '../types';

export const getUserRequest = async () => {
    const response = await axiosInstance.get<GetUserResponseType>(ChangeAlternateEndpoint.getUser);
    return getUserResponseMapper.parse(response.data);
};
```

### Queries (`queries/`)

- Gunakan `useQuery` dari `@tanstack/react-query`.
- Setiap query adalah custom hook yang membungkus request.
- Named export dengan prefix `use`.

```ts
import { useQuery } from '@tanstack/react-query';

import { getUserRequest } from '../requests';

export const useGetUserQuery = () => {
    return useQuery({
        queryKey: ['auth', 'alternates'],
        queryFn: getUserRequest,
    });
};
```

### Mutations (`mutations/`)

- Gunakan `useMutation` dari `@tanstack/react-query`.
- Menerima options parameter untuk konfigurasi `onSuccess` / `onError`.
- Mutation key diawali `post` + action (contoh: `postSetUser`).

```ts
import { useMutation } from '@tanstack/react-query';

import { setUserRequest } from '../requests';
import type { SetUserMutationOptionsType } from '../types';

export const useSetUserMutation = (options: SetUserMutationOptionsType) => {
    return useMutation({
        mutationKey: ['postSetUser'],
        mutationFn: (userId: string) => setUserRequest(userId),
        ...options,
    });
};
```

### Hooks (`hooks/`)

- Halaman page utama menggunakan hook bernama `use<ModuleName>PageHook`.
- Hook ini mengkombinasikan query, mutation, dan logic navigasi.
- **WAJIB** `export default` (bukan named export).

```ts
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

import { useSetUserMutation } from '../mutations';
import { useGetUserQuery } from '../queries';

export default function useChangeAlternatePageHook() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { data: users, isLoading, error } = useGetUserQuery();
    const mutation = useSetUserMutation({
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['auth', 'me'] });
            navigate({ to: '/dashboard' });
        },
        onError: () => {},
    });
    const handleUserClick = (userId: string) => {
        mutation.mutate(userId);
    };
    return { users, isLoading, error, mutation, handleUserClick };
}
```

### Components (`components/`)

- Component adalah **presentational** — tidak boleh ada query/mutation langsung.
- Props menggunakan interface dari `../types`.
- Component skeleton untuk loading state dengan akhiran nama `SkeletonComponent`.
- **WAJIB** `export default`.

```tsx
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { userCardComponentStyle } from '../styles';
import type { UserCardComponentPropsType } from '../types';
import { getInitialName } from '../utils';

export default function UserCardComponent({
    user,
    onClick,
    isLoading,
}: UserCardComponentPropsType) {
    return (
        <Card sx={userCardComponentStyle.cardStyle} onClick={() => onClick(user.id)}>
            ...
        </Card>
    );
}
```

### Pages (`pages/`)

- Page adalah komponen level halaman yang menggunakan hook dari `../hooks`.
- Hanya melakukan wiring antara hook dan component.
- **WAJIB** `export default`.

```tsx
import Box from '@mui/material/Box';

import { useTitleHook } from '@hooks';

import { UserCardComponent, UserCardSkeletonComponent } from '../components';
import { useChangeAlternatePageHook } from '../hooks';
import { changeAlternateStyle } from '../styles';

export default function ChangeAlternatePage() {
    useTitleHook('Change Alternate');
    const { users, isLoading, mutation, handleUserClick } = useChangeAlternatePageHook();
    return <Box sx={changeAlternateStyle.containerStyle}>...</Box>;
}
```

### Styles (`styles/`)

- Setiap component/page memiliki file style terpisah.
- Gunakan `as const satisfies SxProps<Theme>` untuk type safety.
- Export sebagai object `Record<string, SxProps<Theme>>`.

```ts
import type { SxProps, Theme } from '@mui/material';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 4,
    gap: 3,
    height: '100vh',
} as const satisfies SxProps<Theme>;

export const changeAlternateStyle = {
    containerStyle,
    gridStyle,
} satisfies Record<string, SxProps<Theme>>;
```

### Locales (`locales/`)

- File JSON dengan key lowercase.
- Tersedia 2 bahasa: English (`-en.json`) dan Indonesia (`-id.json`).

### Mocks (`mocks/`)

- Gunakan `msw` (Mock Service Worker).
- Setiap endpoint memiliki file mock terpisah.
- Nama file: `<module-name>-<endpoint-name>-<status>-mock.ts`.
- Export sebagai array handler.

```ts
import { http, HttpResponse, delay } from 'msw';

import { ChangeAlternateEndpoint } from '@modules/change-alternate/endpoints';
import { getApiUrl } from '@utils';

export const changeAlternateGetUser200Mock = [
    http.get(`${getApiUrl(ChangeAlternateEndpoint.getUser)}`, async () => {
        await delay(500);
        return HttpResponse.json(mockData);
    }),
];
```

### Utils (`utils/`)

- Pure function, tidak ada side effect.
- Named export.

```ts
export const getInitialName = (name: string) => {
    return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
};
```

---

## Alur Data (Data Flow)

```
API Response
    → Schema (zod validation)
        → Type (z.input / z.infer)
            → Mapper (schema.transform)
                → Request (axios call + mapper.parse)
                    → Query / Mutation (tanstack query hook)
                        → Hook Page (orchestrator)
                            → Page (wiring)
                                → Component (presentational)
```

---

## Aturan Global

### 1. Import Rules

- Import dari folder `../` (relative) untuk intra-module.
- Import dari `@modules/<module-name>` untuk cross-module.
- Import dari `@hooks`, `@utils`, `@instances` untuk shared resources.
- import `type` menggunakan `import type { ... }` untuk type-only imports.

### 2. Component Rules

- TIDAK BOLEH ada query/mutation langsung di component.
- TIDAK BOLEH ada logic bisnis di component.
- Component hanya menerima props dan merender UI.

### 3. Page Rules

- Hanya boleh melakukan wiring (menghubungkan hook dengan component).
- Gunakan `useTitleHook('Page Title')` untuk set document title.

### 4. Style Rules

- Wajib menggunakan `as const` + `satisfies SxProps<Theme>` atau `satisfies Record<string, SxProps<Theme>>`.
- Jangan gunakan `makeStyles` atau `styled` — gunakan sx prop / style object.

### 5. Error Handling

- Error dari query dikelola di level Page (via hook return).
- Mutation menerima `onSuccess` / `onError` dari options.

### 6. Loading State

- Skeleton component untuk loading state.
- Naming: `<ComponentName>SkeletonComponent`.

### 7. Format File

- Ekstensi: `.ts` untuk logic, `.tsx` untuk komponen React.
- JSON untuk locales.

### 8. Penamaan Module

- Module name ditulis dalam `kebab-case`.
- Path endpoint menggunakan `/` prefix dan `kebab-case`.
- Query key menggunakan array of strings (contoh: `['auth', 'alternates']`).
- Mutation key menggunakan `post` + PascalCase action (contoh: `postSetUser`).

---

## Checklist Refactor / Module Baru

Ketika membuat module baru atau refactor module lama, pastikan semua folder dan file berikut terpenuhi:

- [ ] `components/` — component UI + skeleton
- [ ] `endpoints/` — konstanta endpoint API
- [ ] `hooks/` — hook orchestrator page
- [ ] `locales/` — file EN dan ID
- [ ] `mappers/` — transform response API
- [ ] `mocks/` — MSW mock handlers
- [ ] `mutations/` — mutation hooks
- [ ] `pages/` — page component
- [ ] `queries/` — query hooks
- [ ] `requests/` — fungsi panggilan API
- [ ] `schemas/` — zod validation schemas
- [ ] `styles/` — MUI sx style objects
- [ ] `types/` — TypeScript type definitions
- [ ] `utils/` — pure utility functions
- [ ] Setiap sub-folder memiliki `index.ts` barrel export
