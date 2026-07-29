import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';

import { changePasswordPageSkeletonComponentStyle } from '../styles';

export default function ChangePasswordPageSkeletonComponent() {
    return (
        <Box sx={changePasswordPageSkeletonComponentStyle.containerStyle}>
            <Skeleton
                variant="rectangular"
                width="400px"
                height={48}
                sx={changePasswordPageSkeletonComponentStyle.cardStyle}
            />
            <Skeleton variant="text" width={200} height={32} />
            <Skeleton variant="text" width={280} height={20} />
            <Card sx={changePasswordPageSkeletonComponentStyle.cardStyle}>
                <Skeleton variant="rounded" width="100%" height={56} />
                <Skeleton variant="rounded" width="100%" height={56} />
                <Skeleton
                    variant="rectangular"
                    width="100%"
                    height={40}
                    sx={changePasswordPageSkeletonComponentStyle.buttonStyle}
                />
            </Card>
        </Box>
    );
}
