import { setupWorker } from 'msw/browser';

import { requestMockHandler } from '@mocks';

const enableMockingApiResponse = import.meta.env.VITE_ENABLE_MOCKING_REQUEST === 'true';
const worker = setupWorker(...requestMockHandler);

const enableMocking = async () => {
    if (!enableMockingApiResponse) return;
    return worker.start({
        onUnhandledRequest: 'bypass',
    });
};

export { enableMocking };
