import { setupWorker } from 'msw/browser';

import { mockConfig } from '@configs';
import { authMock } from '@mocks';

const handlers = [...authMock];
const worker = setupWorker(...handlers);

const enableMocking = async () => {
    if (!mockConfig.enabled) return;
    return worker.start({
        onUnhandledRequest: 'bypass',
    });
};

export { enableMocking };
