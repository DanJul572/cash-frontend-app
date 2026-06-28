import type { SxProps, Theme } from '@mui/material';

const containerStyle = {
    p: 3,
    height: '90vh',
    display: 'flex',
    flexDirection: 'column',
} as const satisfies SxProps<Theme>;

const panelStyle = {
    p: 2,
    borderRadius: 3,
    border: '0.5px solid',
    borderColor: 'divider',
    bgcolor: 'background.paper',
    boxShadow: 'none',
} as const satisfies SxProps<Theme>;

const titleContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    paddingBottom: 1,
    flexShrink: 0,
} as const satisfies SxProps<Theme>;

const contentContainerStyle = {
    display: 'flex',
    gap: 1,
    flex: 1,
    minHeight: 0,
} as const satisfies SxProps<Theme>;

const leftContentContainerStyle = {
    ...panelStyle,
    flexShrink: 0,
    height: '100%',
    overflow: 'hidden',
} as const satisfies SxProps<Theme>;

const middleContentContainerStyle = {
    ...panelStyle,
    flex: 1,
    minWidth: 0,
    height: '100%',
    overflowY: 'auto',
} as const satisfies SxProps<Theme>;

const middleTitleStyle = {
    fontSize: 11,
    letterSpacing: '0.08em',
    display: 'block',
    mb: 1.5,
} as const satisfies SxProps<Theme>;

const emptyContentContainerStyle = { textAlign: 'center', py: 5 } as const satisfies SxProps<Theme>;

const emptyContentIconStyle = {
    fontSize: 36,
    color: 'text.disabled',
    mb: 1,
} as const satisfies SxProps<Theme>;

const rightContentContainerStyle = {
    ...panelStyle,
    width: 240,
    flexShrink: 0,
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
} as const satisfies SxProps<Theme>;

const rightContentDividerStyle = { my: 2 } as const satisfies SxProps<Theme>;

export const viewBuilderPageStyle = {
    containerStyle,
    titleContainerStyle,
    contentContainerStyle,
    leftContentContainerStyle,
    middleContentContainerStyle,
    middleTitleStyle,
    emptyContentContainerStyle,
    emptyContentIconStyle,
    rightContentContainerStyle,
    rightContentDividerStyle,
} satisfies Record<string, SxProps<Theme>>;
