import React from "react";
import {StateContextProvider} from "./DataManagement/StateContext";
import Test from "./test";

export default (props) => (
	<div className="App">
		<StateContextProvider>
			<Test />
		</StateContextProvider>
	</div>
);