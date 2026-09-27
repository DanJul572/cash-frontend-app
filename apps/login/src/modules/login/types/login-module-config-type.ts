export type LoginModuleConfigType = {
  minLengthPassword: number;
};

declare module '@zapplib/core' {
  interface GuestModulesConfigType {
    login: LoginModuleConfigType;
  }
}
