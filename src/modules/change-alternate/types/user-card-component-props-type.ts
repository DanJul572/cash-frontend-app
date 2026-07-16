import type { ChangeAlternateUserType } from './change-alternate-user-type';

export interface UserCardComponentPropsType {
    user: ChangeAlternateUserType;
    onClick: (userId: string) => void;
    isLoading: boolean;
}
