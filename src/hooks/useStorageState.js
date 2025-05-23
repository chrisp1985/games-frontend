import { useState, useEffect } from 'react';

const useStorageState = (key, initialState) => {
  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  useEffect(() => {
    localStorage.setItem(key, value);
    console.log("Logged Search for ", value);
  }, [value, key]);

  return [value, setValue];
};

export default useStorageState;