import { FilterPanelTrigger, GridFilterListIcon, ToolbarButton } from '@mui/x-data-grid';

export default function ZTableFilterToolbarComponent() {
  return (
    <FilterPanelTrigger render={<ToolbarButton />}>
      <GridFilterListIcon fontSize="small" />
    </FilterPanelTrigger>
  );
}
