import * as React from "react";
import {StateContext} from "../DataManagement/StateContext";

export const useLocalStorage = (localStorageKey) => {
    const [data, setData] = React.useState(JSON.parse(localStorage.getItem(localStorageKey)) || "");

    React.useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(data));
    }, [data]);

    return [data, setData];
};

function FunctionSubscriber() {
    const {setState, subscribe} = React.useContext(StateContext);


};

export {FunctionSubscriber};