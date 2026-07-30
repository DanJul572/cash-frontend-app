import type { UserType } from './change-alternate-user-type';

export interface UserCardComponentPropsType {
    user: UserType;
    onClick: (userId: string) => void;
    isLoading: boolean;
}
