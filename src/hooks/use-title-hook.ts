import { appVersion } from '@utils';

export default function useTitle(title: string) {
    if (!title) {
        return (document.title = `Cash App v${appVersion}`);
    }
    return (document.title = `${title}`);
}
