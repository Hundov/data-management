import * as React from "react";
import {StateControl} from "./StateControl";
import {ActionsObserver} from "./ActionsObserver";

export const StateContext = React.createContext();

function StateContextProvider(props) {
    const stateControl = StateControl();
    const actionsObserver = ActionsObserver();
    const state = stateControl.state;
    const setState = stateControl.setState;
    const getState = stateControl.getState;
    const subscribe = actionsObserver.subscribe;
    const notify = actionsObserver.notifyAll;

    console.log("state:", state)

    return (
        <StateContext.Provider value = {{stateControl, state, setState, getState, subscribe, notify}}>
            {props.children}
        </StateContext.Provider>
    );
};

export {StateContextProvider};