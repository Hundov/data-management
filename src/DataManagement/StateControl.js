import * as React from "react";
import {set, has} from "lodash";
import produce from "immer";
import {stateSchema} from "../DataFramework/frameworks";

function stateReducer(parameters, updateArg) {
    if (updateArg.constructor === Object) {
        if (has(updateArg, "_path") && has(updateArg, "_value")) {
        const {_path, _value} = updateArg;

        return produce(parameters, draft => {
            set(draft, _path, _value);
        });

        } else {
        return {...parameters, ...updateArg};
        };
    };
};

function StateControl() {
    const [state, updateState] = React.useReducer(stateReducer, JSON.parse(sessionStorage.getItem("@state")) || stateSchema.getDefault());
    
    React.useEffect(() => {
        sessionStorage.setItem("@state", JSON.stringify(state));
    }, [state]);

    const setState = (route, value) => {
        const path = route.split(".");
    
        if (path.length === 1) {   
            updateState({
              [route]: value
            });
      
            return;
          };
    
          if (path.length >= 2) {
            updateState({
              _path: route,
              _value: value
            });
      
            return;
        };
    };

    const getState = (route) => {
        const path = route.split(".");
        var item = state;

        for (var i = 0; i < path.length; i++) {
            item = item[path[i]];
        };

        return item
    };

    return {
        state,
        setState,
        getState
    };
};

export {StateControl};