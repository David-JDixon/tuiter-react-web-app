import ModuleList from "./List";
import TodoList from "./todos"; // Fix the file name to match the actual file name
function Modules() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-9">
                    <h2>Modules</h2>
                    <ModuleList />
            </div>
        </div>
    </div>
    );
}
export default Modules;