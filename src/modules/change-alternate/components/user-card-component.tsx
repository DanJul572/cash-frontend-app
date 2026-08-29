import { useTranslation } from 'react-i18next';

import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { userCardComponentStyle } from '../styles';
import type { UserCardComponentPropsType } from '../types';
import { getInitialName } from '../utils';

export default function UserCardComponent({
  user,
  onClick,
  isLoading,
}: UserCardComponentPropsType) {
  const { t } = useTranslation('changeAlternate');

  const cardSx = user.isCurrentUser
    ? { ...userCardComponentStyle.cardStyle, ...userCardComponentStyle.cardCurrentUserStyle }
    : userCardComponentStyle.cardStyle;

  return (
    <Card sx={cardSx} onClick={() => onClick(user.id)}>
      <CardContent sx={userCardComponentStyle.cardContentStyle}>
        <Badge
          badgeContent={user.isCurrentUser ? t('badgeCurrentUser') : t('badgeAlternate')}
          color={user.isCurrentUser ? 'success' : 'warning'}
        >
          <Avatar src={user.photoUrl || undefined} sx={userCardComponentStyle.avatarStyle}>
            {!user.photoUrl && getInitialName(user.name)}
          </Avatar>
        </Badge>
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
