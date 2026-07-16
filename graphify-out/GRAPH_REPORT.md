# Graph Report - . (2026-07-15)

## Corpus Check

- Corpus is ~14,602 words - fits in a single context window. You may not need a graph.

## Summary

- 91 nodes · 31 edges · 70 communities (4 shown, 66 thin omitted)
- Extraction: 68% EXTRACTED · 32% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.74)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)

- Community 0
- Community 1
- Community 2
- Community 3
- App Favicon - Purple Lightning
- Vite Logo
- CollapsedMenuIconComponent
- CollapsibleMenuItemButtonComponent
- CollapsedMenuPopoverComponent
- PageLoaderComponent
- TreeMenuLinkTreeItemComponent
- SidebarContextType
- SidebarProvider
- useSidebarContext
- useCollapsibleMenuIconComponentHook
- useCollapsibleMenuItemComponentHook
- usePasswordFieldComponentHook
- useTitleHook
- PagesType
- UtilsType
- MainLayout
- useChangePassword
- ALertType
- ChangePasswordFormType
- ChangePasswordResponseMappedType
- ChangePasswordResponseType
- PostChangePasswordMutationOptionsType
- Error404Page
- Error500Page
- useForgotPasswordPageHook
- ALertType
- ForgotPasswordFormType
- ForgotPasswordResponseMappedType
- ForgotPasswordResponseType
- PostForgotPasswordMutationOptionsType
- useLoginPageHook
- ALertType
- LoginFormType
- LoginResponseMappedType
- LoginResponseType
- PostLoginMutationOptionsType
- useRegisterPageHook
- ALertType
- RegisterFormType
- PostRegisterMutationOptionsType
- RegisterResponseMappedType
- RegisterResponseType
- useCountdownResendComponentHook
- useValidateOtpPageHook
- ALertType
- ValidateOtpFormType
- PostResendOtpMutationOptionsType
- PostValidateOtpMutationOptionsType
- ResendOtpResponseType
- ValidateOtpResponseMappedType
- ValidateOtpResponseType
- WelcomePage
- FileRoutesByFullPath
- FileRoutesById
- FileRoutesByTo
- FileRouteTypes
- RootRouteChildren
- ApiResponseType
- AuthMeResponseType
- CollapsibleMenuIconComponentPropsType
- CollapsibleMenuItemButtonComponentPropsType
- CollapsibleMenuItemComponentPropsType
- CollapsedMenuPopoverComponentPropsType
- RouterContextType
- TreeMenuItem

## God Nodes (most connected - your core abstractions)

1. `React TypeScript Vite Template` - 6 edges
2. `ESLint Configuration` - 6 edges
3. `Icon Sprite Sheet` - 6 edges
4. `Bluesky Icon` - 5 edges
5. `Discord Icon` - 5 edges
6. `GitHub Icon` - 4 edges
7. `Social / Star Icon` - 4 edges
8. `X (Twitter) Icon` - 4 edges
9. `index.html Entry Point` - 3 edges
10. `@vitejs/plugin-react` - 2 edges

## Surprising Connections (you probably didn't know these)

- `pnpm Workspace Configuration` --conceptually_related_to--> `React TypeScript Vite Template` [INFERRED]
  pnpm-workspace.yaml → README.md

## Import Cycles

- None detected.

## Hyperedges (group relationships)

- **Vite Plugin Ecosystem** — readme_vitejs_plugin_react, readme_vitejs_plugin_react_swc, readme_oxc, readme_swc [EXTRACTED 1.00]
- **ESLint Configuration Stack** — readme_eslint_configuration, readme_tseslint_configs, readme_eslint_plugin_react_x, readme_eslint_plugin_react_dom, readme_tsconfig_node_tsconfig_app, readme_type_aware_lint_rules [EXTRACTED 1.00]
- **Social Platform Icon Group** — public_iconssvg_bluesky_icon, public_iconssvg_discord_icon, public_iconssvg_x_icon [INFERRED 0.85]
- **Developer Platform Icon Group** — public_iconssvg_github_icon, public_iconssvg_discord_icon, public_iconssvg_documentation_icon [INFERRED 0.75]

## Communities (70 total, 66 thin omitted)

### Community 0 - "Community 0"

Cohesion: 0.25
Nodes (8): pnpm Workspace Configuration, Oxc, React Compiler, React TypeScript Vite Template, SWC, Vite HMR, @vitejs/plugin-react, @vitejs/plugin-react-swc

### Community 1 - "Community 1"

Cohesion: 0.71
Nodes (7): Icon Sprite Sheet, Bluesky Icon, Discord Icon, Documentation Icon, GitHub Icon, Social / Star Icon, X (Twitter) Icon

### Community 2 - "Community 2"

Cohesion: 0.33
Nodes (6): ESLint Configuration, eslint-plugin-react-dom, eslint-plugin-react-x, tsconfig.node.json and tsconfig.app.json, typescript-eslint Configs, Type-Aware Lint Rules

### Community 3 - "Community 3"

Cohesion: 0.50
Nodes (4): index.html Entry Point, VITE_APP_NAME Environment Variable, favicon.svg, src/main.tsx Entry Module

## Knowledge Gaps

- **78 isolated node(s):** `CollapsedMenuIconComponent`, `CollapsibleMenuItemButtonComponent`, `CollapsedMenuPopoverComponent`, `PageLoaderComponent`, `TreeMenuLinkTreeItemComponent` (+73 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **66 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions

_Questions this graph is uniquely positioned to answer:_

- **Why does `React TypeScript Vite Template` connect `Community 0` to `Community 2`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Why does `ESLint Configuration` connect `Community 2` to `Community 0`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `Bluesky Icon` (e.g. with `Discord Icon` and `X (Twitter) Icon`) actually correct?**
  _`Bluesky Icon` has 4 INFERRED edges - model-reasoned connections that need verification._
- **Are the 4 inferred relationships involving `Discord Icon` (e.g. with `Bluesky Icon` and `X (Twitter) Icon`) actually correct?**
  _`Discord Icon` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `CollapsedMenuIconComponent`, `CollapsibleMenuItemButtonComponent`, `CollapsedMenuPopoverComponent` to the rest of the system?**
  _78 weakly-connected nodes found - possible documentation gaps or missing edges._
