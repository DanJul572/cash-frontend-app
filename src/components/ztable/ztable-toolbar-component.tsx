import useZTableSearchToolbarComponentHook from '@hooks/ztable/use-ztable-search-toolbar-component-hook';
import { Toolbar } from '@mui/x-data-grid';
import type { ZTableToolbarComponentPropsType } from '@type-defs/ztable/ztable-component-type';

import ZTableColumnManagementToolbarComponent from './ztable-column-management-toolbar-component';
import ZTableDownloadToolbarComponent from './ztable-download-toolbar-component';
import ZTableFilterToolbarComponent from './ztable-filter-toolbar-component';
import ZTableSearchButtonToolbarComponent from './ztable-search-button-toolbar-component';
import ZTableSearchFieldToolbarComponent from './ztable-search-field-toolbar-component';
import ZTableTitleToolbarComponent from './ztable-title-toolbar-component';

export default function ZTableToolbarComponent({
  title,
  filter,
  onFilterChange,
  onSearch,
  onDownload,
}: ZTableToolbarComponentPropsType) {
  const { open, keyword, handleKeywordChange, handleClear, handleToggle, handleClose } =
    useZTableSearchToolbarComponentHook({ onSearch });

  return (
    <>
      <Toolbar>
        <ZTableTitleToolbarComponent title={title} />
        {onSearch && (
          <ZTableSearchButtonToolbarComponent
            active={keyword.trim() !== ''}
            onClick={handleToggle}
          />
        )}
        <ZTableColumnManagementToolbarComponent />
        <ZTableFilterToolbarComponent filter={filter} onFilterChange={onFilterChange} />
        <ZTableDownloadToolbarComponent filter={filter} onDownload={onDownload} />
      </Toolbar>
      {onSearch && (
        <ZTableSearchFieldToolbarComponent
          open={open}
          value={keyword}
          onChange={handleKeywordChange}
          onClear={handleClear}
          onClose={handleClose}
        />
      )}
    </>
  );
}
