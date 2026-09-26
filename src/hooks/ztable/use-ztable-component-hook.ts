import { useState } from 'react';

import type { ZTableFilterValueType } from '@type-defs/ztable/ztable-component-type';

type UseZTableComponentHookParamsType = {
  onFilterChange?: (value: ZTableFilterValueType) => void;
};

export default function useZTableComponentHook({
  onFilterChange,
}: UseZTableComponentHookParamsType) {
  const [filter, setFilter] = useState<ZTableFilterValueType>({});

  const handleFilterChange = (value: ZTableFilterValueType) => {
    setFilter(value);
    onFilterChange?.(value);
  };

  return {
    filter,
    handleFilterChange,
  };
}
