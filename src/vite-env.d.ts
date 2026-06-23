/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string;
    readonly VITE_ENABLE_MOCKING_REQUEST: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
