export const loadFromLocalStorage = (key: string) => {
  const serialisedState = localStorage.getItem(key);
  try {
    if (serialisedState === null) return null;
    return JSON.parse(serialisedState);
  } catch (e) {
    return serialisedState;
  }
};

export const saveToLocalStorage = (key: string, value) => {
  try {
    const serialState = JSON.stringify(value);
    localStorage.setItem(key, serialState);
  } catch (e) {
    console.warn(e);
  }
};
