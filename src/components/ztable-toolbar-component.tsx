import { Toolbar } from '@mui/x-data-grid';

import ZTableColumnManagementToolbarComponent from './ztable-column-management-toolbar-component';
import ZTableDownloadToolbarComponent from './ztable-download-toolbar-component';
import ZTableFilterToolbarComponent from './ztable-filter-toolbar-component';

export default function ZTableToolbarComponent() {
  return (
    <Toolbar>
      <ZTableColumnManagementToolbarComponent />
      <ZTableFilterToolbarComponent />
      <ZTableDownloadToolbarComponent />
    </Toolbar>
  );
}
