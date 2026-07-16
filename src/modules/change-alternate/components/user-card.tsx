import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import type { ChangeAlternateUserType } from '../types';

interface UserCardProps {
    user: ChangeAlternateUserType;
    onClick: (userId: string) => void;
    isLoading: boolean;
}

export default function UserCard({ user, onClick, isLoading }: UserCardProps) {
    const initials = user.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 2,
                gap: 2,
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                },
            }}
            onClick={() => onClick(user.id)}
        >
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                }}
            >
                <Avatar
                    src={user.photoUrl || undefined}
                    sx={{
                        width: 80,
                        height: 80,
                        fontSize: '1.5rem',
                        bgcolor: 'primary.main',
                    }}
                >
                    {!user.photoUrl && initials}
                </Avatar>
                <Button
                    variant="contained"
                    fullWidth
                    disabled={isLoading}
                    sx={{ textTransform: 'none' }}
                >
                    {user.name}
                </Button>
            </CardContent>
        </Card>
    );
}
