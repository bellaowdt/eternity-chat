export const getMainDomain = () => {
  return window.location.origin;

  const origin = window.location.origin;
  const url = new URL(origin);
  const hostname = url.hostname;
  const parts = hostname.split('.');
  return parts.length > 2 ? parts.slice(-2).join('.') : hostname;
};
