import { mockConfig } from '@mocks/mock';

async function enableMocking() {
    if (!mockConfig.enabled) return;

    const { worker } = await import('@mocks/browser');
    return worker.start({
        onUnhandledRequest: 'bypass', // request selain yang di-mock tetap jalan normal
    });
}

export { enableMocking };
