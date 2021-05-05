import * as React from "react";
import {StateContext} from "./DataManagement/StateContext";
import {useLocalStorage} from "./FunctionCollection/functionCollection";

function Test() {
    const {state, setState} = React.useContext(StateContext);
    const [data, setData] = useLocalStorage("login2")
    const a = {value: "b"}
    const checkStorage = () => {
        console.log("session", sessionStorage);
        console.log("local", localStorage);
    }

    const modify = (event) => {
        setData(a)
    }

    const clear = () => {
        localStorage.clear()
    }

    return(
        <>
        <button onClick = {(event) => checkStorage()}>CHECK STORAGE</button>
        <input onChange = {(event) => modify(event)}/>
        <button onClick = {(event) => clear()}>CLEAR</button>
        <a href = "http://localhost:3000/">link</a>
        </>
    )
};

export default Test;