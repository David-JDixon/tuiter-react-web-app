import React from "react";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import ArrayStateVariable from "./ArrayStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ReduxExamples from "./ReduxExamples";
import ParentStateComponent from "./ParentStateComponent";

const Assignment4 = () => {
        function saysHello() {
                alert("Hello")
        }
    return(
        <div>
            <h1>Assignment 4</h1>
                <PassingFunctions theFunction={saysHello} />
                <ClickEvent />
                <PassingDataOnEvent />
                <EventObject />
                <Counter />
                <BooleanStateVariables />
                <ArrayStateVariable />
                <ObjectStateVariable />
                <ParentStateComponent />  
                <ReduxExamples />
        </div>
    );
};
export default Assignment4;