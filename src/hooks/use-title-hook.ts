import { useEffect } from 'react';

import { appVersion } from '@utils';

export default function useTitle(title: string) {
    useEffect(() => {
        if (!title) {
            document.title = `Cash App v${appVersion}`;
        } else {
            document.title = title;
        }
    }, [title]);
}
