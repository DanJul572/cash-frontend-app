import { setupWorker } from 'msw/browser';

import { requestMockListConfig } from '@configs';

const enableMockingApiResponse = import.meta.env.VITE_ENABLE_MOCKING_REQUEST === 'true';
const worker = setupWorker(...requestMockListConfig);

const enableMocking = async () => {
    if (!enableMockingApiResponse) return;
    return worker.start({
        onUnhandledRequest: 'bypass',
    });
};

export { enableMocking };
