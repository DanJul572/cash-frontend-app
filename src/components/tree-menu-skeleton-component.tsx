import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';

import { treeMenuSkeletonComponentStyle } from '@styles';

export default function TreeMenuSkeletonComponent() {
  return (
    <Card style={treeMenuSkeletonComponentStyle.expandedCardStyle}>
      <Box style={treeMenuSkeletonComponentStyle.containerStyle}>
        {Array.from({ length: 5 }).map((_, parentIndex) => (
          <Box key={parentIndex}>
            <Box style={treeMenuSkeletonComponentStyle.itemStyle}>
              <Skeleton variant="rounded" style={treeMenuSkeletonComponentStyle.iconStyle} />
              <Skeleton variant="rounded" style={treeMenuSkeletonComponentStyle.textStyle} />
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  );
}
