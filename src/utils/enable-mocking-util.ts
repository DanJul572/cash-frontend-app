import { setupWorker } from 'msw/browser';

import { authMock } from '@mocks';

const enableMockingApiResponse = import.meta.env.VITE_ENABLE_MOCK === 'true';

const handlers = [...authMock];
const worker = setupWorker(...handlers);

const enableMocking = async () => {
    if (!enableMockingApiResponse) return;
    return worker.start({
        onUnhandledRequest: 'bypass',
    });
};

export { enableMocking };
