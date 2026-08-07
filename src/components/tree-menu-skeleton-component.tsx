import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';

import { useSidebarContext } from '@contexts';
import { treeMenuSkeletonComponentStyle } from '@styles';

export default function TreeMenuSkeletonComponent() {
  const { isCollapsed } = useSidebarContext();

  if (isCollapsed) {
    return (
      <Card style={{ width: 72, height: '100%' }}>
        <Box style={treeMenuSkeletonComponentStyle.containerStyle}>
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton
              key={index}
              variant="rounded"
              style={treeMenuSkeletonComponentStyle.iconStyle}
            />
          ))}
        </Box>
      </Card>
    );
  }

  return (
    <Card
      style={{
        borderRadius: 0,
        height: '100vh ',
        overflowY: 'auto',
        padding: '10px',
        position: 'fixed',
        top: '64px',
        width: '350px',
        zIndex: 999,
        transition: 'width 0.3s ease-in-out',
        overflowX: 'hidden',
      }}
    >
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
