/* eslint-disable no-console */
const isDebug = import.meta.env.DEV || import.meta.env.VITE_DEBUG === 'true';

export const debug = (...args: unknown[]): void => {
  if (isDebug) console.debug('[debug]', ...args);
};

export const info = (...args: unknown[]): void => {
  if (isDebug) console.info('[info]', ...args);
};

export const warn = (...args: unknown[]): void => {
  console.warn('[warn]', ...args);
};

export const error = (...args: unknown[]): void => {
  console.error('[error]', ...args);
};
