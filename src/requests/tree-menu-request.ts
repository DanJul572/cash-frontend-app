import { TreeMenuEndpoint } from '@endpoints';
import { axiosInstance } from '@instances';

import { treeMenuResponseMapper } from '../mappers';
import type { TreeMenuResponseType } from '../types';

export const treeMenuRequest = async () => {
  const response = await axiosInstance.get<TreeMenuResponseType>(TreeMenuEndpoint.treeMenu);
  const result = treeMenuResponseMapper.parse(response.data);
  return result;
};
