export const saveItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key) => {
  const val = localStorage.getItem(key);
  if (val) return JSON.parse(val);
  else return null;
};
