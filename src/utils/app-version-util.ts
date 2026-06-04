import app from '../../package.json';

export const appVersion = app.version;

export const showVersionInfo = () => {
    console.log(`App Version: ${appVersion}`);
};
