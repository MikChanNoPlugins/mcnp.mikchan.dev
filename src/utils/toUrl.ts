export const toUrl = (url: string) => () => window.open(url, "_blank")?.focus();
