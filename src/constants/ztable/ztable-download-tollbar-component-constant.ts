import ArticleIcon from '@mui/icons-material/Article';
import ChecklistIcon from '@mui/icons-material/Checklist';
import DescriptionIcon from '@mui/icons-material/Description';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import StorageIcon from '@mui/icons-material/Storage';
import TableChartIcon from '@mui/icons-material/TableChart';
import VisibilityIcon from '@mui/icons-material/Visibility';

import type {
  DataTypeOption,
  FileTypeOption,
} from '@type-defs/ztable/ztable-download-tollbar-component-type';

export const FILE_TYPE_OPTION_CONSTANT: FileTypeOption[] = [
  { value: 'xlsx', label: 'XLSX', icon: TableChartIcon, color: 'success.main' },
  { value: 'csv', label: 'CSV', icon: ArticleIcon, color: 'info.main' },
  { value: 'pdf', label: 'PDF', icon: PictureAsPdfIcon, color: 'error.main' },
  { value: 'txt', label: 'TXT', icon: DescriptionIcon, color: 'text.secondary' },
];

export const DATA_TYPE_OPTION_CONSTANT: DataTypeOption[] = [
  {
    value: 'all',
    labelKey: 'allData',
    descriptionKey: 'allDataDescription',
    icon: StorageIcon,
  },
  {
    value: 'current',
    labelKey: 'currentData',
    descriptionKey: 'currentDataDescription',
    icon: VisibilityIcon,
  },
  {
    value: 'selected',
    labelKey: 'selectedData',
    descriptionKey: 'selectedDataDescription',
    icon: ChecklistIcon,
  },
];
