import { Toolbar } from '@mui/x-data-grid';
import type { ZTableToolbarComponentPropsType } from '@type-defs/ztable-component-type';

import ZTableColumnManagementToolbarComponent from './ztable-column-management-toolbar-component';
import ZTableDownloadToolbarComponent from './ztable-download-toolbar-component';
import ZTableFilterToolbarComponent from './ztable-filter-toolbar-component';

export default function ZTableToolbarComponent({
  onFilterChange,
  onDownload,
}: ZTableToolbarComponentPropsType) {
  return (
    <Toolbar>
      <ZTableColumnManagementToolbarComponent />
      <ZTableFilterToolbarComponent onFilterChange={onFilterChange} />
      <ZTableDownloadToolbarComponent onDownload={onDownload} />
    </Toolbar>
  );
}
