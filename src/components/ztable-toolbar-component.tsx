import { Toolbar } from '@mui/x-data-grid';

import ZTableDownloadToolbarComponent from './ztable-download-toolbar-component';
import ZTableFilterToolbarComponent from './ztable-filter-toolbar-component';

export default function ZTableToolbarComponent() {
  return (
    <Toolbar>
      <ZTableFilterToolbarComponent />
      <ZTableDownloadToolbarComponent />
    </Toolbar>
  );
}
