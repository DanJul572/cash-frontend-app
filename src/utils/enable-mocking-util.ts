import { setupWorker } from 'msw/browser';

import { requestMockHandlerConfig } from '@mocks';

const enableMockingApiResponse = import.meta.env.VITE_ENABLE_MOCKING_REQUEST === 'true';
const worker = setupWorker(...requestMockHandlerConfig);

const enableMocking = async () => {
    if (!enableMockingApiResponse) return;
    return worker.start({
        onUnhandledRequest: 'bypass',
    });
};

export { enableMocking };
