import { useState } from 'react';

import type { JsonPreviewHookPropsType } from '../types';
import { schematoJsonUtil } from '../utils';

const useJsonPreviewHook = ({ nodes }: JsonPreviewHookPropsType) => {
    const [copied, setCopied] = useState(false);
    const json = JSON.stringify(schematoJsonUtil(nodes), null, 2);

    const handleCopy = () => {
        navigator.clipboard.writeText(json).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        });
    };

    return {
        copied,
        handleCopy,
    };
};

export default useJsonPreviewHook;
