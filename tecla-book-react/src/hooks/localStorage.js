import { useState } from "react";

function useLocalStorage(dataName, initialValue) {
  const localStorageData = window.localStorage.getItem(dataName);

  let parsedData;

  if (localStorageData) {
    parsedData = JSON.stringify(localStorageData);
  } else {
    window.localStorage.setItem(dataName, JSON.stringify(initialValue));
    parsedData = initialValue;
  }

  const [data, setData] = useState(parsedData);

  const saveData = (newData) => {
    const strigData =
      typeof newData == "object" ? JSON.stringify(newData) : newData;
    window.localStorage.setItem(dataName, strigData);
    setData(newData);
  };

  return [data, saveData];
}

export { useLocalStorage };