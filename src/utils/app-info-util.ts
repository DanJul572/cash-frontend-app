import app from '../../package.json';

export const appVersion = app.version;

export const appName = app.name;

export const appNameAsTitle = appName
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

export const showVersionInfo = () => {
    console.log(`${appNameAsTitle} v${appVersion}`);
};
