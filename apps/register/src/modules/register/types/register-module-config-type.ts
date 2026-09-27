export type RegisterModuleConfigType = {
  minLengthPassword: number;
  minLengthName: number;
};

declare module '@zapplib/core' {
  interface GuestModulesConfigType {
    register: RegisterModuleConfigType;
  }
}
