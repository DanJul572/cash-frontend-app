import { name, version } from '../../package.json';

export const appVersion = version;

export const appName = import.meta.env.VITE_APP_NAME || name;

export const appNameAsTitle = appName
  .replace(/-/g, ' ')
  .replace(/\b\w/g, (char) => char.toUpperCase());

export const showAppVersionInConsole = () => {
  console.log(
    `%c${appNameAsTitle} %cv${appVersion}`,
    'color: #4CAF50; font-weight: bold; font-size: 14px;',
    'color: #888; font-style: italic;',
  );
};
