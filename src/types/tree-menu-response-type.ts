export type TreeMenuResponseItemType = {
  id: string;
  label: string;
  href?: string;
  /** Iconify icon name, e.g. `ic:baseline-dashboard`. */
  icon?: string;
  children?: TreeMenuResponseItemType[];
};

export type TreeMenuResponseType = {
  status: boolean;
  message: string;
  data: {
    items: TreeMenuResponseItemType[];
  };
};
