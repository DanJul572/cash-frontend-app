import { useEffect, useRef, useState } from 'react';

import { ZTABLE_SEARCH_DEBOUNCE_DELAY_CONSTANT } from '@constants/ztable/ztable-search-toolbar-component-constant';
import useDebounceHook from '@hooks/use-debounce-hook';
import type { ZTableSearchToolbarComponentPropsType } from '@type-defs/ztable/ztable-component-type';

export default function useZTableSearchToolbarComponentHook({
  onSearch,
}: ZTableSearchToolbarComponentPropsType) {
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const debouncedKeyword = useDebounceHook(keyword.trim(), ZTABLE_SEARCH_DEBOUNCE_DELAY_CONSTANT);

  // Last keyword sent to the caller, so unchanged values are not emitted again.
  const lastSearchRef = useRef('');

  useEffect(() => {
    if (debouncedKeyword === lastSearchRef.current) return;
    lastSearchRef.current = debouncedKeyword;
    onSearch?.(debouncedKeyword);
  }, [debouncedKeyword, onSearch]);

  const handleKeywordChange = (value: string) => setKeyword(value);

  // Clearing is applied immediately instead of waiting for the debounce.
  const handleClear = () => {
    setKeyword('');
    if (lastSearchRef.current === '') return;
    lastSearchRef.current = '';
    onSearch?.('');
  };

  const handleToggle = () => setOpen((prev) => !prev);

  const handleClose = () => {
    handleClear();
    setOpen(false);
  };

  return {
    open,
    keyword,
    handleKeywordChange,
    handleClear,
    handleToggle,
    handleClose,
  };
}
