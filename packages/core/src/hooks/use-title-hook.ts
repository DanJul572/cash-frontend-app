import { useEffect } from 'react';

export default function useTitleHook(title: string) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);
}
