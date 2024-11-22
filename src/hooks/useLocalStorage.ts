export const useLocalStorage = () => {
  const setItemStorage = (key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getItemStorage = (key: string) => {
    const responseItemStorage = localStorage.getItem(key);

    if (responseItemStorage) {
      return JSON.parse(responseItemStorage);
    }

    return null;
  };

  const removeItemStorage = (key: string) => {
    localStorage.removeItem(key);
  };

  return {
    setItemStorage,
    getItemStorage,
    removeItemStorage,
  };
};
