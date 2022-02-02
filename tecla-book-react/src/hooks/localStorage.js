import {useState} from "react";

function useLocalStorage (dataName, initialValue) {
    
    const localStorage = window.localStorage.getItem(dataName);

    let parseData;

    if (localStorage) {
        parseData = JSON.parse(localStorageData);
        } else {
            window.localStorage.setItem(dataName, JSON.stringify(initialValue));
            parseData = initialValue;
        }
    const [data, setData] = useState(parseData);

    const saveData = (newData) => {
        const strigData =
        typeof newData == "object" ? JSON.stringify(newData) : newData;

        window.localStorage.setItem(dataName, strigData);
        setData (newData);
    };

    return [data, saveData];
    
    }

    export {useLocalStorage};

