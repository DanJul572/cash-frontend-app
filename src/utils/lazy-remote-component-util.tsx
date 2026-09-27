import { type ComponentType, Suspense, lazy } from 'react';

// Imported by path, not through @components, to keep utils free of an import cycle
import RemoteModuleLoaderComponent from '@components/remote-module-loader/remote-module-loader-component';

/**
 * Lazily loads a page exposed by a Module Federation remote, showing a loader while the remote
 * entry, shared dependencies and page code download. A failed load reaches the route's
 * `errorComponent`.
 */
export const lazyRemoteComponent = <P extends object>(
  load: () => Promise<{ default: ComponentType<P> }>,
) => {
  const LazyComponent = lazy(load);

  return function RemoteComponent(props: P) {
    return (
      <Suspense fallback={<RemoteModuleLoaderComponent />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
};
