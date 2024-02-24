import VariablesAndConstants from "./variables/VariablesAndConstants";
import BooleanVariables from "./variables/BooleanVariables";
import VariableTypes from "./variables/VariableTypes"; 
import ArrowFunctions from "./functions/ArrowFunctions";
import ES5Functions from "./functions/ES5Functions";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ArrayIndexAndLength from "./arrays/ArrayIndexAndLength";


function JavaScript() {
    console.log('Hello World!');
    return(
        <div>
            <h1>JavaScript</h1>
            <VariablesAndConstants/>
            <BooleanVariables/>
            <VariableTypes/>
            <ArrowFunctions/>
            <ES5Functions/>
            <IfElse/>
            <TernaryOperator/>
        </div>
    );
}
export default JavaScript