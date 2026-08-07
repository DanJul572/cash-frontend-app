export type TreeMenuResponseItemType = {
  id: string;
  label: string;
  href?: string;
  children?: TreeMenuResponseItemType[];
};

export type TreeMenuResponseType = {
  status: boolean;
  message: string;
  data: {
    items: TreeMenuResponseItemType[];
  };
};
