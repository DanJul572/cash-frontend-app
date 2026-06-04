import { useEffect } from 'react';

import { appNameAsTitle, appVersion } from '@utils';

export default function useTitle(title: string) {
    useEffect(() => {
        if (!title) {
            document.title = `${appNameAsTitle} v${appVersion}`;
        } else {
            document.title = title;
        }
    }, [title]);
}
