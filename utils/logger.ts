const isDebug = process.env.NODE_ENV !== 'production' || process.env.DEBUG === 'true';

export const debug = (...args: any[]) => {
  if (isDebug) console.debug('[debug]', ...args);
};

export const info = (...args: any[]) => {
  if (isDebug) console.info('[info]', ...args);
};

export const warn = (...args: any[]) => {
  console.warn('[warn]', ...args);
};

export const error = (...args: any[]) => {
  console.error('[error]', ...args);
};
