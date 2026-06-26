import { setupWorker } from 'msw/browser';

import { requestMockHandler } from '@mocks';

const worker = setupWorker(...requestMockHandler);

const enableMocking = async () => {
    return worker.start({
        onUnhandledRequest: 'bypass',
    });
};

export { enableMocking };
