import { setupWorker } from 'msw/browser';

import { authMeRequestMock } from '@mocks';

const enableMockingApiResponse = import.meta.env.VITE_ENABLE_MOCK === 'true';

const handlers = [...authMeRequestMock];
const worker = setupWorker(...handlers);

const enableMocking = async () => {
    if (!enableMockingApiResponse) return;
    return worker.start({
        onUnhandledRequest: 'bypass',
    });
};

export { enableMocking };
