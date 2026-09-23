import { Toolbar } from '@mui/x-data-grid';
import type { ZTableToolbarComponentPropsType } from '@type-defs/ztable-component-type';

import ZTableColumnManagementToolbarComponent from './ztable-column-management-toolbar-component';
import ZTableDownloadToolbarComponent from './ztable-download-toolbar-component';
import ZTableFilterToolbarComponent from './ztable-filter-toolbar-component';
import ZTableTitleToolbarComponent from './ztable-title-toolbar-component';

export default function ZTableToolbarComponent({
  title,
  filter,
  onFilterChange,
  onDownload,
}: ZTableToolbarComponentPropsType) {
  return (
    <Toolbar>
      <ZTableTitleToolbarComponent title={title} />
      <ZTableColumnManagementToolbarComponent />
      <ZTableFilterToolbarComponent filter={filter} onFilterChange={onFilterChange} />
      <ZTableDownloadToolbarComponent filter={filter} onDownload={onDownload} />
    </Toolbar>
  );
}
