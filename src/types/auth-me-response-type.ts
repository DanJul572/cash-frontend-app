export type AuthMeRoleResponseType = {
  isActive: boolean;
  roleId: number;
  roleName: string;
};

export type AuthMeResponseType = {
  id: string;
  name: string;
  email: string;
  role: AuthMeRoleResponseType[];
};
