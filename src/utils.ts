export const getApiKey = (): string | null => localStorage.getItem(`API_KEY`);

export const setApiKey = (apiKey: string) => { localStorage.setItem(`API_KEY`, apiKey); };

export const removeApiKey = () => { localStorage.removeItem(`API_KEY`); };