# Graph Report - cash-frontend-app  (2026-09-28)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 2441 nodes · 4421 edges · 151 communities (134 shown, 17 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 50 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `94ffd665`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Remote register (mixed)
- Root config + Host shell (cross-cutting)
- Root config + Remote change-alternate (cross-cutting)
- Root config (package.json)
- Root config (tsconfig.app.json)
- @zapplib/ui (mixed)
- Root config (package.json) #2
- @zapplib/ui (mixed) #2
- Host modules / error
- Remote dashboard (mixed)
- Host entry (routeTree.gen.ts)
- Host shell (mixed)
- Remote forgot-password + Remote register (cross-cutting)
- @zapplib/core / config
- Host shell (mixed) #2
- @zapplib/ui (mixed) #3
- Host shell (mixed) #3
- Root config (tsconfig.json)
- @zapplib/ui + Remote playground (cross-cutting)
- Remote welcome (mixed)
- @zapplib/ui / styles / ztable
- Remote change-alternate (mixed)
- Remote login / config
- Remote validate-otp (mixed)
- Host __mocks__
- @zapplib/ui (mixed) #4
- Remote change-password / config
- Remote register / config
- Remote validate-otp / config
- Remote validate-otp (mixed) #2
- Remote change-password (mixed)
- Remote change-password (mixed) #2
- Remote validate-otp (mixed) #3
- Host shell (mixed) #4
- @zapplib/ui / components / ztable
- Host themes
- Remote change-alternate / config
- Remote change-password / config #2
- Remote dashboard / config
- Remote dashboard / config #2
- Remote forgot-password (mixed)
- Remote forgot-password / config
- Remote login (mixed)
- Remote login (mixed) #2
- Remote login / config #2
- Remote playground (mixed)
- Remote playground / config
- Remote register / config #2
- Remote validate-otp / config #2
- Remote welcome / config
- Root config (package.json) #3
- @zapplib/ui / config
- Host shell (mixed) #5
- Remote change-password (mixed) #3
- Remote change-password (mixed) #4
- Host shell (mixed) #6
- @zapplib/ui / config #2
- Host shell (mixed) #7
- Root config (tsconfig.node.json)
- Remote change-alternate (mixed) #2
- Remote change-alternate (mixed) #3
- Remote change-password / config #3
- Remote change-password (mixed) #5
- Remote playground / hooks
- Remote register / config #3
- Host shell (mixed) #8
- Host shell (mixed) #9
- @zapplib/core / config #2
- @zapplib/ui (mixed) #5
- Remote change-alternate / types
- Remote playground / config #2
- Host shell (mixed) #10
- Host shell (mixed) #11
- Remote change-alternate (mixed) #4
- Remote change-password / styles
- Remote forgot-password / config #2
- Remote login (mixed) #3
- Remote validate-otp (mixed) #4
- @zapplib/core (mixed)
- Host shell (mixed) #12
- Remote change-password / types
- Remote forgot-password (mixed) #2
- Remote forgot-password (mixed) #3
- Remote playground (mixed) #2
- Remote validate-otp / types
- Host shell (mixed) #13
- @zapplib/core (mixed) #2
- Host shell (mixed) #14
- Remote change-alternate / config #2
- Remote change-alternate (mixed) #5
- Remote login / types
- Host routes / _guest
- Remote change-alternate (mixed) #6
- Remote forgot-password (mixed) #4
- Host mocks / change-alternate-mock
- @zapplib/ui / config #3
- Host shell (mixed) #15
- Host shell (mixed) #16
- Host entry (remotes.d.ts)
- @zapplib/ui / types / ztable
- Host components / tree-menu
- Remote playground / app
- Remote welcome / config #2
- @zapplib/ui / config #4
- Root config (public)
- Remote change-alternate / standalone
- Remote playground (mixed) #3
- Remote register / standalone
- Remote validate-otp / standalone
- Host styles / tree-menu
- Remote change-password / standalone
- Remote forgot-password (mixed) #5
- Remote forgot-password / standalone
- Remote login / standalone
- Host shell (mixed) #17
- Host styles / tree-menu #2
- Remote change-alternate / config #3
- Remote forgot-password / config #3
- Remote validate-otp / styles
- Remote welcome / config #3
- Host utils
- @zapplib/core / config #3
- Remote login / mutations
- Remote login / styles
- Remote playground / config #3
- Remote playground / styles
- Host styles / remote-module-error
- Remote change-alternate / config #4
- Remote dashboard / config #3
- Remote forgot-password / config #4
- Remote forgot-password / types
- Remote login / config #3
- Remote playground / config #4
- Remote validate-otp / config #3
- Remote welcome / config #4
- @zapplib/ui / config #5
- @zapplib/ui / hooks / datetime-field
- Remote change-alternate / vite-env.d.ts
- Remote change-password / vite-env.d.ts
- Remote dashboard / vite-env.d.ts
- Remote forgot-password / vite-env.d.ts
- Remote login / vite-env.d.ts
- Remote playground / vite-env.d.ts
- Remote register / vite-env.d.ts
- Remote validate-otp / vite-env.d.ts
- Remote welcome / vite-env.d.ts
- Root config (.husky)
- Host __mocks__ #2
- Host __mocks__ #3
- Host entry (vite-env.d.ts)

## God Nodes (most connected - your core abstractions)
1. `getHttpClient()` - 22 edges
2. `compilerOptions` - 22 edges
3. `paths` - 21 edges
4. `useTitleHook()` - 20 edges
5. `paths` - 20 edges
6. `scripts` - 19 edges
7. `IconComponent()` - 18 edges
8. `compilerOptions` - 17 edges
9. `compilerOptions` - 17 edges
10. `compilerOptions` - 17 edges

## Surprising Connections (you probably didn't know these)
- `TreeMenuLinkTreeItemComponent()` --indirect_call--> `IconComponent()`  [INFERRED]
  src/components/tree-menu/tree-menu-link-tree-item-component.tsx → packages/ui/src/components/icon/icon-component.tsx
- `useRegisterPageHook()` --calls--> `getErrorMessage()`  [EXTRACTED]
  apps/register/src/modules/register/hooks/use-register-page-hook.ts → packages/core/src/utils/get-error-message-util.ts
- `RegisterPage()` --calls--> `useTitleHook()`  [EXTRACTED]
  apps/register/src/modules/register/pages/register-page.tsx → packages/core/src/hooks/use-title-hook.ts
- `RegisterPage()` --calls--> `PasswordFieldComponent()`  [EXTRACTED]
  apps/register/src/modules/register/pages/register-page.tsx → packages/ui/src/components/password-field/password-field-component.tsx
- `registerRequest()` --calls--> `getHttpClient()`  [EXTRACTED]
  apps/register/src/modules/register/requests/register-request.ts → packages/core/src/instances/http-client-instance.ts

## Import Cycles
- None detected.

## Communities (151 total, 17 thin omitted)

### Community 0 - "Remote register (mixed)"
Cohesion: 0.05
Nodes (44): apps_register_src_modules_register_constants_index_register_translation_namespace_constant, REGISTER_TRANSLATION_NAMESPACE_CONSTANT, apps_register_src_modules_register_endpoints_index_registerendpoint, RegisterEndpoint, apps_register_src_modules_register_hooks_index_useregisterpagehook, useRegisterPageHook(), registerTranslationResources, apps_register_src_modules_register_locales_register_en (+36 more)

### Community 1 - "Root config + Host shell (cross-cutting)"
Cohesion: 0.05
Nodes (52): appAliases, { config }, create(), getBoundary(), isAppAlias(), rootDir, FederationRemoteNameType, federationRemotes (+44 more)

### Community 2 - "Root config + Remote change-alternate (cross-cutting)"
Cohesion: 0.06
Nodes (58): axios, react, vite, zod, name, private, type, version (+50 more)

### Community 3 - "Root config (package.json)"
Cohesion: 0.04
Nodes (56): devDependencies, axios, @babel/core, babel-plugin-react-compiler, dayjs, @emotion/react, @emotion/styled, eslint (+48 more)

### Community 4 - "Root config (tsconfig.app.json)"
Cohesion: 0.04
Nodes (44): compilerOptions, allowImportingTsExtensions, declaration, declarationDir, emitDeclarationOnly, erasableSyntaxOnly, jsx, lib (+36 more)

### Community 5 - "@zapplib/ui (mixed)"
Cohesion: 0.08
Nodes (30): ZTableComponent(), useZTableComponentHook(), UseZTableComponentHookParamsType, PICKER_FORMAT, toDayjs(), toFilterValue(), useZTableFilterFieldComponentHook(), resolveFilterType() (+22 more)

### Community 6 - "Root config (package.json) #2"
Cohesion: 0.06
Nodes (35): axios, dayjs, react, vite, zod, msw, workerDirectory, packageManager (+27 more)

### Community 7 - "@zapplib/ui (mixed) #2"
Cohesion: 0.13
Nodes (25): packages_core_src_index_datetimefieldtype, DateTimeFieldType, DateFieldComponent(), DateTimeFieldComponent(), DateTimeFormatErrorComponent(), TimeFieldComponent(), ZTableFilterFieldComponent(), DATE_REQUIRED_SECTIONS (+17 more)

### Community 8 - "Host modules / error"
Cohesion: 0.08
Nodes (25): useTitleHook(), packages_core_src_index_usetitlehook, codeStyle, containerStyle, dividerStyle, error400Style, textStyle, codeStyle (+17 more)

### Community 9 - "Remote dashboard (mixed)"
Cohesion: 0.10
Nodes (18): apps_dashboard_src_modules_dashboard_constants_index_dashboard_translation_namespace_constant, DASHBOARD_TRANSLATION_NAMESPACE_CONSTANT, apps_dashboard_src_modules_dashboard_locales_dashboard_en, apps_dashboard_src_modules_dashboard_locales_dashboard_id, dashboardTranslationResources, DashboardPage(), containerStyle, dashboardPageStyle (+10 more)

### Community 10 - "Host entry (routeTree.gen.ts)"
Cohesion: 0.08
Nodes (29): Route, Route, Route, Route, Route, AuthenticatedDashboardRoute, AuthenticatedRoute, AuthenticatedRouteChildren (+21 more)

### Community 11 - "Host shell (mixed)"
Cohesion: 0.11
Nodes (18): ref_tanstack_react_query, ref_tanstack_react_router, src_layouts_index_rootlayout, RootLayout(), Error400Page(), Error404Page(), Error500Page(), src_modules_error_pages_index_error400page (+10 more)

### Community 12 - "Remote forgot-password + Remote register (cross-cutting)"
Cohesion: 0.15
Nodes (11): standaloneRouter, standaloneRouter, initStandaloneTranslation(), standaloneRouter, initStandaloneTranslation(), initStandaloneTranslation(), packages_core_src_index_createhttpclient, packages_core_src_index_sethttpclient (+3 more)

### Community 13 - "@zapplib/core / config"
Cohesion: 0.08
Nodes (26): typescript, vite-plugin-dts, exports, ./package.json, files, axios, react, vite (+18 more)

### Community 14 - "Host shell (mixed) #2"
Cohesion: 0.13
Nodes (20): AuthenticatedConfigProvider(), GuestConfigProvider(), packages_core_src_index_authenticatedconfigprovider, packages_core_src_index_guestconfigprovider, PageLoaderComponent(), src_components_index_topbarcomponent, src_components_index_treemenucomponent, GuestLayout() (+12 more)

### Community 15 - "@zapplib/ui (mixed) #3"
Cohesion: 0.10
Nodes (11): ZTABLE_SEARCH_DEBOUNCE_DELAY_CONSTANT, useDebounceHook(), uiTranslationResources, packages_ui_src_locales_ui_en, packages_ui_src_locales_ui_id, ZTableSearchToolbarComponentPropsType, src_configs_index_languageconfig, languageConfig (+3 more)

### Community 16 - "Host shell (mixed) #3"
Cohesion: 0.09
Nodes (21): src_constants_index_layout_header_height_constant, LAYOUT_HEADER_HEIGHT_CONSTANT, containerStyle, contentStyle, mainLayoutStyle, avatarStyle, containerStyle, iconButtonStyle (+13 more)

### Community 17 - "Root config (tsconfig.json)"
Cohesion: 0.08
Nodes (25): compilerOptions, baseUrl, ignoreDeprecations, paths, files, @assets/*, @components, @configs (+17 more)

### Community 18 - "@zapplib/ui + Remote playground (cross-cutting)"
Cohesion: 0.09
Nodes (23): axios, dayjs, react, vite, name, private, type, version (+15 more)

### Community 19 - "Remote welcome (mixed)"
Cohesion: 0.11
Nodes (15): WelcomePage(), apps_welcome_src_modules_welcome_styles_index_welcomepagestyle, containerStyle, dividerStyle, welcomePageStyle, apps_welcome_src_modules_welcome_types_index_welcomepagepropstype, WelcomePagePropsType, StandalonePageComponent() (+7 more)

### Community 20 - "@zapplib/ui / styles / ztable"
Cohesion: 0.08
Nodes (20): columnItemStyle, ztableColumnManagementToolbarComponentStyle, dataTypeCardStyle, dataTypeListStyle, dataTypeTextStyle, dialogActionsStyle, fileTypeCardStyle, fileTypeGridStyle (+12 more)

### Community 21 - "Remote change-alternate (mixed)"
Cohesion: 0.11
Nodes (16): apps_change_alternate_src_modules_change_alternate_components_index_usercardcomponent, apps_change_alternate_src_modules_change_alternate_components_index_usercardskeletoncomponent, UserCardSkeletonComponent(), apps_change_alternate_src_modules_change_alternate_hooks_index_usechangealternatepagehook, ChangeAlternatePage(), changeAlternateStyle, containerStyle, gridStyle (+8 more)

### Community 22 - "Remote login / config"
Cohesion: 0.08
Nodes (24): dependencies, axios, @emotion/react, @emotion/styled, @hookform/resolvers, i18next, @iconify/react, @mui/material (+16 more)

### Community 23 - "Remote validate-otp (mixed)"
Cohesion: 0.13
Nodes (15): apps_validate_otp_src_modules_validate_otp_endpoints_index_validateotpendpoint, ValidateOtpEndpoint, apps_validate_otp_src_modules_validate_otp_mappers_index_validateotprequestmapper, apps_validate_otp_src_modules_validate_otp_mappers_index_validateotpresponsemapper, validateOtpResponseMapper, apps_validate_otp_src_modules_validate_otp_schemas_index_validateotpformschema, apps_validate_otp_src_modules_validate_otp_schemas_index_validateotpresponseschema, validateOtpResponseSchema (+7 more)

### Community 24 - "Host __mocks__"
Cohesion: 0.11
Nodes (7): GuestConfigContext, GuestConfigProviderPropsType, GuestConfigResponseType, packages_core_src_types_index_guestconfigresponsetype, ref_react, ButtonProps, IconButtonProps

### Community 25 - "@zapplib/ui (mixed) #4"
Cohesion: 0.11
Nodes (9): StyledIcon, PasswordFieldComponent(), usePasswordFieldComponentHook(), fontSizeStyle, iconComponentStyle, iconStyle, IconComponentFontSizeType, IconComponentPropsType (+1 more)

### Community 26 - "Remote change-password / config"
Cohesion: 0.09
Nodes (21): devDependencies, @module-federation/vite, @types/react, @types/react-dom, typescript, vite, @vitejs/plugin-react, axios (+13 more)

### Community 27 - "Remote register / config"
Cohesion: 0.09
Nodes (21): devDependencies, @module-federation/vite, @types/react, @types/react-dom, typescript, vite, @vitejs/plugin-react, axios (+13 more)

### Community 28 - "Remote validate-otp / config"
Cohesion: 0.09
Nodes (22): dependencies, axios, @emotion/react, @emotion/styled, @hookform/resolvers, i18next, @mui/material, react (+14 more)

### Community 29 - "Remote validate-otp (mixed) #2"
Cohesion: 0.14
Nodes (11): apps_validate_otp_src_modules_validate_otp_constants_index_validate_otp_translation_namespace_constant, VALIDATE_OTP_TRANSLATION_NAMESPACE_CONSTANT, apps_validate_otp_src_modules_validate_otp_hooks_index_usecountdownresendcomponenthook, validateOtpTranslationResources, apps_validate_otp_src_modules_validate_otp_locales_validate_otp_en, apps_validate_otp_src_modules_validate_otp_locales_validate_otp_id, containerStyle, countdownResendComponentStyle (+3 more)

### Community 30 - "Remote change-password (mixed)"
Cohesion: 0.13
Nodes (13): ChangePasswordEndpoint, apps_change_password_src_modules_change_password_endpoints_index_changepasswordendpoint, apps_change_password_src_modules_change_password_mappers_index_changepasswordrequestmapper, apps_change_password_src_modules_change_password_mappers_index_changepasswordresponsemapper, apps_change_password_src_modules_change_password_mappers_index_validatepasswordtokenresponsemapper, validatePasswordTokenResponseMapper, useValidatePasswordTokenQuery(), apps_change_password_src_modules_change_password_requests_index_validatepasswordtokenrequest (+5 more)

### Community 31 - "Remote change-password (mixed) #2"
Cohesion: 0.15
Nodes (15): useChangePasswordPageHook(), changePasswordRequestMapper(), useChangePasswordMutation(), apps_change_password_src_modules_change_password_mutations_index_usechangepasswordmutation, apps_change_password_src_modules_change_password_queries_index_usevalidatepasswordtokenquery, changePasswordRequest(), apps_change_password_src_modules_change_password_requests_index_changepasswordrequest, changePasswordFormSchema() (+7 more)

### Community 32 - "Remote validate-otp (mixed) #3"
Cohesion: 0.13
Nodes (15): apps_validate_otp_src_modules_validate_otp_mutations_index_useresendotpmutation, apps_validate_otp_src_modules_validate_otp_mutations_index_usevalidateotpmutation, useResendOtpMutation(), useValidateOtpMutation(), apps_validate_otp_src_modules_validate_otp_requests_index_resendotprequest, apps_validate_otp_src_modules_validate_otp_requests_index_validateotprequest, resendOtpRequest(), validateOtpRequest() (+7 more)

### Community 33 - "Host shell (mixed) #4"
Cohesion: 0.15
Nodes (12): ref_dashboard, ref_forgotpassword, ref_welcome, src_components_index_remotemoduleerrorcomponent, RemoteModuleErrorComponent(), DashboardPage, Route, ForgotPasswordPage (+4 more)

### Community 34 - "@zapplib/ui / components / ztable"
Cohesion: 0.29
Nodes (13): IconComponent(), ZTableColumnManagementToolbarComponent(), ZTableDownloadToolbarComponent(), ZTableFilterToolbarComponent(), ZTableSearchButtonToolbarComponent(), ZTableSearchFieldToolbarComponent(), ZTableTitleToolbarComponent(), ZTableToolbarComponent() (+5 more)

### Community 35 - "Host themes"
Cohesion: 0.14
Nodes (11): titleStyle, ztableTitleToolbarComponentStyle, ZTableTitleToolbarComponentPropsType, ref_mui_material, themeConfig, deepOceanTheme, emberTheme, src_themes_index_teallighttheme (+3 more)

### Community 36 - "Remote change-alternate / config"
Cohesion: 0.11
Nodes (18): compilerOptions, erasableSyntaxOnly, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+10 more)

### Community 37 - "Remote change-password / config #2"
Cohesion: 0.11
Nodes (18): compilerOptions, erasableSyntaxOnly, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+10 more)

### Community 38 - "Remote dashboard / config"
Cohesion: 0.10
Nodes (19): dependencies, axios, @emotion/react, @emotion/styled, i18next, @mui/material, react, react-dom (+11 more)

### Community 39 - "Remote dashboard / config #2"
Cohesion: 0.11
Nodes (18): compilerOptions, erasableSyntaxOnly, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+10 more)

### Community 40 - "Remote forgot-password (mixed)"
Cohesion: 0.17
Nodes (11): forgotPasswordRequestMapper, forgotPasswordResponseMapper, apps_forgot_password_src_modules_forgot_password_mappers_index_forgotpasswordresponsemapper, forgotPasswordFormSchema, forgotPasswordResponseSchema, apps_forgot_password_src_modules_forgot_password_schemas_index_forgotpasswordformschema, apps_forgot_password_src_modules_forgot_password_schemas_index_forgotpasswordresponseschema, ForgotPasswordFormType (+3 more)

### Community 41 - "Remote forgot-password / config"
Cohesion: 0.11
Nodes (18): compilerOptions, erasableSyntaxOnly, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+10 more)

### Community 42 - "Remote login (mixed)"
Cohesion: 0.18
Nodes (10): apps_login_src_modules_login_constants_index_login_translation_namespace_constant, LOGIN_TRANSLATION_NAMESPACE_CONSTANT, apps_login_src_modules_login_hooks_index_useloginpagehook, loginTranslationResources, apps_login_src_modules_login_locales_login_en, apps_login_src_modules_login_locales_login_id, LoginPage(), apps_login_src_modules_login_styles_index_loginstyle (+2 more)

### Community 43 - "Remote login (mixed) #2"
Cohesion: 0.16
Nodes (11): apps_login_src_modules_login_endpoints_index_loginendpoint, LoginEndpoint, apps_login_src_modules_login_mappers_index_loginrequestmapper, apps_login_src_modules_login_mappers_index_loginresponsemapper, loginResponseMapper, apps_login_src_modules_login_schemas_index_loginresponseschema, loginResponseSchema, apps_login_src_modules_login_types_index_loginresponsetype (+3 more)

### Community 44 - "Remote login / config #2"
Cohesion: 0.11
Nodes (18): compilerOptions, erasableSyntaxOnly, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+10 more)

### Community 45 - "Remote playground (mixed)"
Cohesion: 0.15
Nodes (13): apps_playground_src_modules_playground_hooks_index_useplaygrounddatetimepagehook, apps_playground_src_modules_playground_hooks_index_useplaygroundztablepagehook, FIELD_COMPONENTS, PlaygroundDatetimePage(), PlaygroundZTablePage(), apps_playground_src_modules_playground_styles_index_playgrounddatetimepagestyle, apps_playground_src_modules_playground_styles_index_playgroundztablepagestyle, containerStyle (+5 more)

### Community 46 - "Remote playground / config"
Cohesion: 0.11
Nodes (18): compilerOptions, erasableSyntaxOnly, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+10 more)

### Community 47 - "Remote register / config #2"
Cohesion: 0.11
Nodes (18): compilerOptions, erasableSyntaxOnly, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+10 more)

### Community 48 - "Remote validate-otp / config #2"
Cohesion: 0.11
Nodes (18): compilerOptions, erasableSyntaxOnly, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+10 more)

### Community 49 - "Remote welcome / config"
Cohesion: 0.11
Nodes (18): compilerOptions, erasableSyntaxOnly, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+10 more)

### Community 50 - "Root config (package.json) #3"
Cohesion: 0.11
Nodes (19): scripts, build:all, build:app, build:dev, build:prod, build:stage, dev, dev:all (+11 more)

### Community 51 - "@zapplib/ui / config"
Cohesion: 0.11
Nodes (19): devDependencies, axios, dayjs, @emotion/react, @emotion/styled, i18next, @iconify/react, @mui/material (+11 more)

### Community 52 - "Host shell (mixed) #5"
Cohesion: 0.13
Nodes (15): packages_ui_src_index_pageloadercomponent, @fontsource/roboto, src_configs_index_themeconfig, AppRouter, setRouter(), src_instances_index_queryclientinstance, src_instances_index_setrouter, HistoryState (+7 more)

### Community 53 - "Remote change-password (mixed) #3"
Cohesion: 0.16
Nodes (10): apps_change_password_src_modules_change_password_constants_index_change_password_translation_namespace_constant, CHANGE_PASSWORD_TRANSLATION_NAMESPACE_CONSTANT, apps_change_password_src_modules_change_password_locales_change_password_en, apps_change_password_src_modules_change_password_locales_change_password_id, changePasswordTranslationResources, apps_change_password_src_modules_change_password_styles_index_changepasswordformcomponentstyle, ChangePasswordFormComponentPropsType, apps_change_password_src_modules_change_password_types_index_changepasswordformcomponentpropstype (+2 more)

### Community 54 - "Remote change-password (mixed) #4"
Cohesion: 0.16
Nodes (12): ChangePasswordFormComponent(), ChangePasswordPageSkeletonComponent(), apps_change_password_src_modules_change_password_components_index_changepasswordformcomponent, apps_change_password_src_modules_change_password_components_index_changepasswordpageskeletoncomponent, apps_change_password_src_modules_change_password_hooks_index_usechangepasswordpagehook, ChangePasswordPage(), apps_change_password_src_modules_change_password_styles_index_changepasswordpageskeletoncomponentstyle, apps_change_password_src_modules_change_password_styles_index_changepasswordstyle (+4 more)

### Community 55 - "Host shell (mixed) #6"
Cohesion: 0.14
Nodes (13): msw, src_mocks_auth_request_mock_index_authmerequest200mock, src_mocks_authenticated_config_mock_index_authenticatedconfigrequest200mock, src_mocks_change_alternate_mock_index_changealternategetuser200mock, src_mocks_change_alternate_mock_index_changealternatevalidatetoken200mock, changePasswordValidateToken200Mock, mockValidTokenData, src_mocks_change_password_mock_index_changepasswordvalidatetoken200mock (+5 more)

### Community 56 - "@zapplib/ui / config #2"
Cohesion: 0.11
Nodes (17): compilerOptions, erasableSyntaxOnly, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+9 more)

### Community 57 - "Host shell (mixed) #7"
Cohesion: 0.17
Nodes (9): ConfigEndpoint, src_endpoints_index_configendpoint, TreeMenuEndpoint, authenticatedConfigRequest200Mock, mockAuthenticatedConfigData, authenticatedConfigRequest500Mock, guestConfigRequest200Mock, mockGuestConfigData (+1 more)

### Community 58 - "Root config (tsconfig.node.json)"
Cohesion: 0.11
Nodes (17): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, moduleResolution, noEmit (+9 more)

### Community 59 - "Remote change-alternate (mixed) #2"
Cohesion: 0.18
Nodes (11): useChangeAlternatePageHook(), apps_change_alternate_src_modules_change_alternate_mutations_index_usesetusermutation, useGetUserQuery(), apps_change_alternate_src_modules_change_alternate_queries_index_usegetuserquery, apps_change_alternate_src_modules_change_alternate_queries_index_usevalidatealternatetokenquery, useValidateAlternateTokenQuery(), getUserRequest(), apps_change_alternate_src_modules_change_alternate_requests_index_getuserrequest (+3 more)

### Community 60 - "Remote change-alternate (mixed) #3"
Cohesion: 0.17
Nodes (9): getUserResponseMapper, validateAlternateTokenResponseMapper, getUserResponseSchema, userSchema, apps_change_alternate_src_modules_change_alternate_schemas_index_getuserresponseschema, apps_change_alternate_src_modules_change_alternate_schemas_index_validatealternatetokenresponseschema, validateAlternateTokenResponseSchema, GetUserResponseType (+1 more)

### Community 61 - "Remote change-password / config #3"
Cohesion: 0.12
Nodes (17): dependencies, axios, @emotion/react, @emotion/styled, @hookform/resolvers, i18next, @iconify/react, @mui/material (+9 more)

### Community 62 - "Remote change-password (mixed) #5"
Cohesion: 0.21
Nodes (7): changePasswordResponseMapper, changePasswordResponseSchema, apps_change_password_src_modules_change_password_schemas_index_changepasswordresponseschema, apps_change_password_src_modules_change_password_schemas_index_validatepasswordtokenresponseschema, validatePasswordTokenResponseSchema, ref_zod, authMeResponseSchema

### Community 63 - "Remote playground / hooks"
Cohesion: 0.16
Nodes (16): apps_playground_src_modules_playground_constants_index_playground_ztable_columns_constant, apps_playground_src_modules_playground_constants_index_playground_ztable_rows_constant, compareRows(), getCellValue(), matchesFilter(), matchesSearch(), usePlaygroundZTablePageHook(), useAuthenticatedConfig() (+8 more)

### Community 64 - "Remote register / config #3"
Cohesion: 0.12
Nodes (17): dependencies, axios, @emotion/react, @emotion/styled, @hookform/resolvers, i18next, @iconify/react, @mui/material (+9 more)

### Community 65 - "Host shell (mixed) #8"
Cohesion: 0.15
Nodes (11): packages_core_src_index_apiresponsetype, packages_core_src_index_status_code_constant, ApiResponseType, AuthEndpoint, src_endpoints_index_authendpoint, authMeRequest200Mock, mockAuthMeData, authMeRequest401Mock (+3 more)

### Community 66 - "Host shell (mixed) #9"
Cohesion: 0.15
Nodes (13): packages_core_src_index_authenticatedconfigresponsetype, packages_core_src_index_guestconfigresponsetype, axiosInstance, authenticatedConfigResponseMapper, guestConfigResponseMapper, authenticatedConfigResponseSchema, dateTimeFormatConfigSchema, guestConfigResponseSchema (+5 more)

### Community 67 - "@zapplib/core / config #2"
Cohesion: 0.12
Nodes (16): compilerOptions, erasableSyntaxOnly, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+8 more)

### Community 68 - "@zapplib/ui (mixed) #5"
Cohesion: 0.12
Nodes (8): alertStyle, codeStyle, dateTimeFormatErrorComponentStyle, containerStyle, labelStyle, pageLoaderComponentStyle, spinnerStyle, spinnerWrapperStyle

### Community 69 - "Remote change-alternate / types"
Cohesion: 0.17
Nodes (9): useSetUserMutation(), apps_change_alternate_src_modules_change_alternate_requests_index_setuserrequest, setUserRequest(), SetUserMutationOptionsType, SetUserResponseType, ChangeAlternatePagePropsType, UserType, apps_change_alternate_src_modules_change_alternate_types_index_setusermutationoptionstype (+1 more)

### Community 70 - "Remote playground / config #2"
Cohesion: 0.12
Nodes (16): dependencies, axios, dayjs, @emotion/react, @emotion/styled, i18next, @iconify/react, @mui/material (+8 more)

### Community 71 - "Host shell (mixed) #10"
Cohesion: 0.19
Nodes (11): packages_ui_src_index_iconcomponent, TopbarComponent(), TopbarRoleSelectorComponent(), useTopbarComponentHook(), useTopbarRoleSelectorComponentHook(), buttonStyle, checkIconStyle, menuHeaderStyle (+3 more)

### Community 72 - "Host shell (mixed) #11"
Cohesion: 0.19
Nodes (8): useActiveTreeMenuPathHook(), useTreeMenuComponentHook(), src_queries_index_usetreemenuquery, useTreeMenuQuery(), src_requests_index_treemenurequest, treeMenuRequest(), findActiveTreeMenuPath(), normalizePath()

### Community 73 - "Remote change-alternate (mixed) #4"
Cohesion: 0.15
Nodes (11): UserCardComponent(), apps_change_alternate_src_modules_change_alternate_styles_index_usercardcomponentstyle, avatarStyle, buttonStyle, cardContentStyle, cardCurrentUserStyle, cardStyle, userCardComponentStyle (+3 more)

### Community 74 - "Remote change-password / styles"
Cohesion: 0.13
Nodes (11): cardStyle, changePasswordFormComponentStyle, alertStyle, buttonStyle, cardStyle, changePasswordPageSkeletonComponentStyle, containerStyle, alertStyle (+3 more)

### Community 75 - "Remote forgot-password / config #2"
Cohesion: 0.13
Nodes (15): dependencies, axios, @emotion/react, @emotion/styled, @hookform/resolvers, i18next, @mui/material, react (+7 more)

### Community 76 - "Remote login (mixed) #3"
Cohesion: 0.22
Nodes (11): formatPayloads(), useLoginPageHook(), loginRequestMapper(), apps_login_src_modules_login_mutations_index_useloginmutation, useLoginMutation(), loginRequest(), apps_login_src_modules_login_schemas_index_loginformschema, loginFormSchema() (+3 more)

### Community 77 - "Remote validate-otp (mixed) #4"
Cohesion: 0.22
Nodes (9): CountdownResendComponent(), apps_validate_otp_src_modules_validate_otp_components_index_countdownresendcomponent, apps_validate_otp_src_modules_validate_otp_hooks_index_usevalidateotppagehook, useCountdownResendComponentHook(), useValidateOtpPageHook(), ValidateOtpPage(), apps_validate_otp_src_modules_validate_otp_styles_index_validateotppagestyle, standaloneValidateOtpConfig (+1 more)

### Community 78 - "@zapplib/core (mixed)"
Cohesion: 0.18
Nodes (8): packages_core_src_constants_index_status_code_constant, STATUS_CODE_CONSTANT, axios, AxiosRequestConfig, getHttpClient(), HttpClientOptionsType, getApiUrl(), ref_axios

### Community 79 - "Host shell (mixed) #12"
Cohesion: 0.18
Nodes (9): packages_core_src_index_isaxios401error, isAxios401Error(), queryClientInstance, authMeResponseMapper, src_mappers_index_authmeresponsemapper, authMeRequest(), src_requests_index_authmerequest, src_schemas_index_authmeresponseschema (+1 more)

### Community 80 - "Remote change-password / types"
Cohesion: 0.23
Nodes (7): AlertType, ChangePasswordFormType, ChangePasswordModuleConfigType, GuestModulesConfigType, @zapplib/core, ChangePasswordPagePropsType, ChangePasswordResponseMappedType

### Community 81 - "Remote forgot-password (mixed) #2"
Cohesion: 0.18
Nodes (8): ForgotPasswordEndpoint, apps_forgot_password_src_modules_forgot_password_endpoints_index_forgotpasswordendpoint, apps_forgot_password_src_modules_forgot_password_mappers_index_forgotpasswordrequestmapper, forgotPasswordRequest(), apps_forgot_password_src_modules_forgot_password_requests_index_forgotpasswordrequest, apps_forgot_password_src_modules_forgot_password_types_index_forgotpasswordformtype, apps_forgot_password_src_modules_forgot_password_types_index_forgotpasswordmutationoptionstype, apps_forgot_password_src_modules_forgot_password_types_index_forgotpasswordresponsetype

### Community 82 - "Remote forgot-password (mixed) #3"
Cohesion: 0.19
Nodes (9): apps_forgot_password_src_modules_forgot_password_hooks_index_useforgotpasswordpagehook, ForgotPasswordPage(), alertStyle, cardStyle, containerStyle, forgotPasswordStyle, apps_forgot_password_src_modules_forgot_password_styles_index_forgotpasswordstyle, apps_forgot_password_src_modules_forgot_password_types_index_forgotpasswordpagepropstype (+1 more)

### Community 83 - "Remote playground (mixed) #2"
Cohesion: 0.21
Nodes (8): initPlaygroundTranslation(), apps_playground_src_modules_playground_constants_index_playground_translation_namespace_constant, PLAYGROUND_TRANSLATION_NAMESPACE_CONSTANT, usePlaygroundDatetimePageHook(), playgroundTranslationResources, apps_playground_src_modules_playground_locales_playground_en, apps_playground_src_modules_playground_locales_playground_id, useDateTimeFormatConfigHook()

### Community 84 - "Remote validate-otp / types"
Cohesion: 0.24
Nodes (7): validateOtpRequestMapper(), validateOtpFormSchema(), ALertType, apps_validate_otp_src_modules_validate_otp_types_index_validateotpmoduleconfigtype, GuestModulesConfigType, ValidateOtpModuleConfigType, @zapplib/core

### Community 85 - "Host shell (mixed) #13"
Cohesion: 0.20
Nodes (8): ref_changealternate, ref_changepassword, ChangeAlternatePage, ChangeAlternateRouteComponent(), ChangePasswordPage, ChangePasswordRouteComponent(), src_schemas_index_tokensearchparamschema, tokenSearchParamSchema

### Community 86 - "@zapplib/core (mixed) #2"
Cohesion: 0.27
Nodes (5): AuthenticatedConfigContext, AuthenticatedConfigProviderPropsType, AuthenticatedConfigResponseType, DateTimeFormatConfigType, packages_core_src_types_index_authenticatedconfigresponsetype

### Community 87 - "Host shell (mixed) #14"
Cohesion: 0.19
Nodes (10): @mui/x-tree-view, CustomTreeItem, TreeMenuLinkTreeItemComponent(), mapTreeMenuItem(), treeMenuResponseMapper, src_schemas_index_treemenuresponseschema, treeMenuItemSchema, treeMenuResponseSchema (+2 more)

### Community 88 - "Remote change-alternate / config #2"
Cohesion: 0.15
Nodes (13): dependencies, axios, @emotion/react, @emotion/styled, i18next, @mui/material, react, react-dom (+5 more)

### Community 89 - "Remote change-alternate (mixed) #5"
Cohesion: 0.24
Nodes (8): ChangeAlternateEndpoint, apps_change_alternate_src_modules_change_alternate_endpoints_index_changealternateendpoint, apps_change_alternate_src_modules_change_alternate_mappers_index_getuserresponsemapper, apps_change_alternate_src_modules_change_alternate_mappers_index_validatealternatetokenresponsemapper, apps_change_alternate_src_modules_change_alternate_types_index_getuserresponsetype, apps_change_alternate_src_modules_change_alternate_types_index_setuserresponsetype, apps_change_alternate_src_modules_change_alternate_types_index_validatealternatetokenresponsetype, packages_core_src_index_gethttpclient

### Community 90 - "Remote login / types"
Cohesion: 0.22
Nodes (7): ALertType, apps_login_src_modules_login_types_index_loginmoduleconfigtype, GuestModulesConfigType, LoginModuleConfigType, @zapplib/core, LoginPagePropsType, standaloneLoginConfig

### Community 91 - "Host routes / _guest"
Cohesion: 0.22
Nodes (9): useGuestConfig(), packages_core_src_index_useguestconfig, ref_register, ref_validateotp, RegisterPage, RegisterRouteComponent(), Route, ValidateOtpPage (+1 more)

### Community 92 - "Remote change-alternate (mixed) #6"
Cohesion: 0.26
Nodes (6): apps_change_alternate_src_modules_change_alternate_constants_index_change_alternate_translation_namespace_constant, CHANGE_ALTERNATE_TRANSLATION_NAMESPACE_CONSTANT, apps_change_alternate_src_modules_change_alternate_locales_change_alternate_en, apps_change_alternate_src_modules_change_alternate_locales_change_alternate_id, changeAlternateTranslationResources, initStandaloneTranslation()

### Community 93 - "Remote forgot-password (mixed) #4"
Cohesion: 0.27
Nodes (6): apps_forgot_password_src_modules_forgot_password_constants_index_forgot_password_translation_namespace_constant, FORGOT_PASSWORD_TRANSLATION_NAMESPACE_CONSTANT, apps_forgot_password_src_modules_forgot_password_locales_forgot_password_en, apps_forgot_password_src_modules_forgot_password_locales_forgot_password_id, forgotPasswordTranslationResources, ref_i18next

### Community 94 - "Host mocks / change-alternate-mock"
Cohesion: 0.23
Nodes (6): playgroundConfig, packages_core_src_index_getapiurl, changeAlternateGetUser200Mock, mockAlternatesData, changeAlternateValidateToken200Mock, mockValidTokenData

### Community 95 - "@zapplib/ui / config #3"
Cohesion: 0.17
Nodes (12): peerDependencies, dayjs, @emotion/react, @emotion/styled, @iconify/react, @mui/material, @mui/x-data-grid, @mui/x-date-pickers (+4 more)

### Community 96 - "Host shell (mixed) #15"
Cohesion: 0.20
Nodes (8): src_endpoints_index_treemenuendpoint, src_instances_index_axiosinstance, src_mappers_index_treemenuresponsemapper, mockTreeMenuData, treeMenuRequest200Mock, src_types_index_treemenuresponsetype, TreeMenuResponseItemType, TreeMenuResponseType

### Community 97 - "Host shell (mixed) #16"
Cohesion: 0.24
Nodes (7): ref_login, authMeQuery, src_queries_index_authmequery, Route, LoginPage, LoginRouteComponent(), Route

### Community 98 - "Host entry (remotes.d.ts)"
Cohesion: 0.18
Nodes (10): packages_core_src_index_guestmodulesconfigtype, GuestModulesConfigType, changeAlternate/ChangeAlternatePage, changePassword/ChangePasswordPage, dashboard/DashboardPage, forgotPassword/ForgotPasswordPage, login/LoginPage, register/RegisterPage (+2 more)

### Community 99 - "@zapplib/ui / types / ztable"
Cohesion: 0.29
Nodes (8): DATA_TYPE_OPTION_CONSTANT, FILE_TYPE_OPTION_CONSTANT, ZTableDownloadColumnType, ZTableDownloadToolbarComponentPropsType, DataType, DataTypeOption, FileType, FileTypeOption

### Community 100 - "Host components / tree-menu"
Cohesion: 0.35
Nodes (7): src_assets_logo, TreeMenuComponent(), TreeMenuHeaderComponent(), TreeMenuSkeletonComponent(), treeMenuHeaderComponentStyle, src_utils_index_appnameastitle, src_utils_index_appversion

### Community 101 - "Remote playground / app"
Cohesion: 0.27
Nodes (8): ButtonLink, PlaygroundLayoutComponent(), toolbarStyle, playgroundPages, indexRoute, pageRoutes, playgroundRouter, rootRoute

### Community 102 - "Remote welcome / config #2"
Cohesion: 0.20
Nodes (10): dependencies, axios, @emotion/react, @emotion/styled, @mui/material, react, react-dom, @tanstack/react-query (+2 more)

### Community 103 - "@zapplib/ui / config #4"
Cohesion: 0.22
Nodes (10): import, types, exports, ./components/*, ./package.json, publishConfig, exports, main (+2 more)

### Community 104 - "Root config (public)"
Cohesion: 0.36
Nodes (8): activeClientIds, getResponse(), handleRequest(), IS_MOCKED_RESPONSE, resolveMainClient(), respondWithMock(), sendToClient(), serializeRequest()

### Community 105 - "Remote change-alternate / standalone"
Cohesion: 0.28
Nodes (7): containerStyle, StandalonePlaceholderComponent(), pageRoute, placeholderPaths, placeholderRoutes, rootRoute, standaloneRouter

### Community 106 - "Remote playground (mixed) #3"
Cohesion: 0.25
Nodes (6): PLAYGROUND_ZTABLE_COLUMNS_CONSTANT, PLAYGROUND_ZTABLE_ROWS_CONSTANT, apps_playground_src_modules_playground_types_index_playgroundztablerowtype, PlaygroundZTableRowType, packages_ui_src_index_ztablecolumntype, ZTableColumnType

### Community 107 - "Remote register / standalone"
Cohesion: 0.28
Nodes (7): containerStyle, StandalonePlaceholderComponent(), pageRoute, placeholderPaths, placeholderRoutes, rootRoute, standaloneRouter

### Community 108 - "Remote validate-otp / standalone"
Cohesion: 0.28
Nodes (7): containerStyle, StandalonePlaceholderComponent(), pageRoute, placeholderPaths, placeholderRoutes, rootRoute, standaloneRouter

### Community 109 - "Host styles / tree-menu"
Cohesion: 0.22
Nodes (4): containerStyle, contentStyle, subContainerStyle, treeMenuComponentStyle

### Community 110 - "Remote change-password / standalone"
Cohesion: 0.32
Nodes (6): containerStyle, StandalonePlaceholderComponent(), pageRoute, placeholderPaths, placeholderRoutes, rootRoute

### Community 111 - "Remote forgot-password (mixed) #5"
Cohesion: 0.36
Nodes (5): useForgotPasswordPageHook(), useForgotPasswordMutation(), apps_forgot_password_src_modules_forgot_password_mutations_index_useforgotpasswordmutation, apps_forgot_password_src_modules_forgot_password_types_index_alerttype, getErrorMessage()

### Community 112 - "Remote forgot-password / standalone"
Cohesion: 0.32
Nodes (6): containerStyle, StandalonePlaceholderComponent(), pageRoute, placeholderPaths, placeholderRoutes, rootRoute

### Community 113 - "Remote login / standalone"
Cohesion: 0.32
Nodes (6): containerStyle, StandalonePlaceholderComponent(), pageRoute, placeholderPaths, placeholderRoutes, rootRoute

### Community 114 - "Host shell (mixed) #17"
Cohesion: 0.36
Nodes (5): RemoteModuleLoaderComponent(), containerStyle, labelStyle, remoteModuleLoaderComponentStyle, lazyRemoteComponent()

### Community 115 - "Host styles / tree-menu #2"
Cohesion: 0.25
Nodes (7): cardStyle, containerStyle, contentStyle, iconStyle, itemStyle, textStyle, treeMenuSkeletonComponentStyle

### Community 116 - "Remote change-alternate / config #3"
Cohesion: 0.29
Nodes (7): devDependencies, @module-federation/vite, @types/react, @types/react-dom, typescript, vite, @vitejs/plugin-react

### Community 117 - "Remote forgot-password / config #3"
Cohesion: 0.29
Nodes (7): devDependencies, @module-federation/vite, @types/react, @types/react-dom, typescript, vite, @vitejs/plugin-react

### Community 118 - "Remote validate-otp / styles"
Cohesion: 0.29
Nodes (6): alertStyle, boxesRowStyle, cardStyle, containerStyle, otpBoxStyle, validateOtpPageStyle

### Community 119 - "Remote welcome / config #3"
Cohesion: 0.29
Nodes (7): devDependencies, @module-federation/vite, @types/react, @types/react-dom, typescript, vite, @vitejs/plugin-react

### Community 120 - "Host utils"
Cohesion: 0.29
Nodes (6): name, version, appName, appNameAsTitle, appVersion, showAppVersionInConsole()

### Community 121 - "@zapplib/core / config #3"
Cohesion: 0.29
Nodes (7): devDependencies, axios, react, @types/react, typescript, vite, vite-plugin-dts

### Community 122 - "Remote login / mutations"
Cohesion: 0.33
Nodes (3): apps_login_src_modules_login_requests_index_loginrequest, apps_login_src_modules_login_types_index_loginformtype, apps_login_src_modules_login_types_index_loginmutationoptionstype

### Community 123 - "Remote login / styles"
Cohesion: 0.33
Nodes (4): alertStyle, cardStyle, containerStyle, loginStyle

### Community 124 - "Remote playground / config #3"
Cohesion: 0.33
Nodes (6): devDependencies, @types/react, @types/react-dom, typescript, vite, @vitejs/plugin-react

### Community 125 - "Remote playground / styles"
Cohesion: 0.33
Nodes (5): cardStyle, containerStyle, headerStyle, playgroundDatetimePageStyle, valueStyle

### Community 127 - "Remote change-alternate / config #4"
Cohesion: 0.40
Nodes (5): scripts, build, dev, preview, typecheck

### Community 128 - "Remote dashboard / config #3"
Cohesion: 0.40
Nodes (5): scripts, build, dev, preview, typecheck

### Community 129 - "Remote forgot-password / config #4"
Cohesion: 0.40
Nodes (5): scripts, build, dev, preview, typecheck

### Community 131 - "Remote login / config #3"
Cohesion: 0.40
Nodes (5): scripts, build, dev, preview, typecheck

### Community 132 - "Remote playground / config #4"
Cohesion: 0.40
Nodes (5): scripts, build, dev, preview, typecheck

### Community 133 - "Remote validate-otp / config #3"
Cohesion: 0.40
Nodes (5): scripts, build, dev, preview, typecheck

### Community 134 - "Remote welcome / config #4"
Cohesion: 0.40
Nodes (5): scripts, build, dev, preview, typecheck

### Community 135 - "@zapplib/ui / config #5"
Cohesion: 0.40
Nodes (5): scripts, build, prepublishOnly, publish:verdaccio, typecheck

## Knowledge Gaps
- **1007 isolated node(s):** `GuestModulesConfigType`, `RegisterResponseMappedType`, `FederationRemoteNameType`, `ControllerProps`, `FieldState` (+1002 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 1226 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **17 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `@mui/x-tree-view` connect `Host shell (mixed) #14` to `Host components / tree-menu`, `Root config (package.json) #2`?**
  _High betweenness centrality (0.097) - this node is a cross-community bridge._
- **Why does `msw` connect `Host shell (mixed) #6` to `Host shell (mixed) #15`, `Host shell (mixed) #8`, `Root config (package.json) #2`, `Host shell (mixed) #7`, `Host mocks / change-alternate-mock`?**
  _High betweenness centrality (0.097) - this node is a cross-community bridge._
- **Why does `@fontsource/roboto` connect `Host shell (mixed) #5` to `Root config (package.json) #2`?**
  _High betweenness centrality (0.090) - this node is a cross-community bridge._
- **What connects `GuestModulesConfigType`, `RegisterResponseMappedType`, `FederationRemoteNameType` to the rest of the system?**
  _1007 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Remote register (mixed)` be split into smaller, more focused modules?**
  _Cohesion score 0.05157894736842105 - nodes in this community are weakly interconnected._
- **Should `Root config + Host shell (cross-cutting)` be split into smaller, more focused modules?**
  _Cohesion score 0.053830227743271224 - nodes in this community are weakly interconnected._
- **Should `Root config + Remote change-alternate (cross-cutting)` be split into smaller, more focused modules?**
  _Cohesion score 0.05555555555555555 - nodes in this community are weakly interconnected._