import app from '../../package.json';

export const appVersion = app.version;

export const appName = import.meta.env.VITE_APP_NAME || app.name;

export const appNameAsTitle = appName
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

export const showVersionInfo = () => {
    console.log(
        `%c${appNameAsTitle} %cv${appVersion}`,
        'color: #4CAF50; font-weight: bold; font-size: 14px;',
        'color: #888; font-style: italic;',
    );
};
