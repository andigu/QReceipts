let esc = encodeURIComponent
export const query = (url, params) => `${url}?${Object.keys(params)
  .map(k => esc(k) + '=' + esc(params[k]))
  .join('&')}`
