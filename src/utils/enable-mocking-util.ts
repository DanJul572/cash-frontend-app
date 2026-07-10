export const enableMocking = async () => {
    if (import.meta.env.PROD) {
        return;
    }

    const { setupWorker } = await import('msw/browser');
    const { requestMockHandler } = await import('@mocks');
    const worker = setupWorker(...requestMockHandler);

    return worker.start({
        onUnhandledRequest: 'bypass',
    });
};
