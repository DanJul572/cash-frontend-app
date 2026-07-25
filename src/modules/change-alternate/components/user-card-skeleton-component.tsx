import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';

import { userCardSkeletonComponentStyle } from '../styles';

const SKELETON_COUNT = 3;

export default function UserCardSkeletonComponent() {
    return (
        <>
            {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                <Card key={index} sx={userCardSkeletonComponentStyle.cardStyle}>
                    <CardContent sx={userCardSkeletonComponentStyle.cardContentStyle}>
                        <Skeleton
                            variant="circular"
                            sx={userCardSkeletonComponentStyle.avatarSkeletonStyle}
                        />
                        <Skeleton
                            variant="rectangular"
                            sx={userCardSkeletonComponentStyle.buttonSkeletonStyle}
                        />
                    </CardContent>
                </Card>
            ))}
        </>
    );
}
