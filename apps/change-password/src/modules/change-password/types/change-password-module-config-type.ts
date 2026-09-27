export type ChangePasswordModuleConfigType = {
  minLengthPassword: number;
};

declare module '@zapplib/core' {
  interface GuestModulesConfigType {
    changePassword: ChangePasswordModuleConfigType;
  }
}
