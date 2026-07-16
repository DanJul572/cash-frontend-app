import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { userCardComponentStyle } from '../styles';
import type { UserCardComponentPropsType } from '../types';

export default function UserCardComponent({
    user,
    onClick,
    isLoading,
}: UserCardComponentPropsType) {
    const initials = user.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

    return (
        <Card sx={userCardComponentStyle.cardStyle} onClick={() => onClick(user.id)}>
            <CardContent sx={userCardComponentStyle.cardContentStyle}>
                <Avatar src={user.photoUrl || undefined} sx={userCardComponentStyle.avatarStyle}>
                    {!user.photoUrl && initials}
                </Avatar>
                <Button
                    variant="outlined"
                    fullWidth
                    disabled={isLoading}
                    sx={userCardComponentStyle.buttonStyle}
                >
                    {user.name}
                </Button>
            </CardContent>
        </Card>
    );
}
