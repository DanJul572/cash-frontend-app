import type { DateTimeFormatConfigType } from './datetime-format-config-type';

/**
 * Guest config of every module, keyed by module name. Core stays unaware of modules:
 * each module adds its own key through declaration merging, e.g.
 *
 * ```ts
 * declare module '@zapplib/core' {
 *   interface GuestModulesConfigType {
 *     login: LoginModuleConfigType;
 *   }
 * }
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type -- filled by module augmentation
export interface GuestModulesConfigType {}

export type GuestConfigResponseType = {
  dateTimeFormat: DateTimeFormatConfigType;
  modules: GuestModulesConfigType;
};
