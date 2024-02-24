import ModuleList from "../Modules/List";
import StatusBar from "./status";
import TodoList from "../Modules/todos";


function Home() {
  return (
    <div className="container">
      <div className="row">
      <div className="col-lg-9">
        <h2>Home</h2>
        <ModuleList />
      </div>
      <div className="col-lg-2">
        <h2>Status</h2>
        <StatusBar />
        <TodoList />
      </div>
    </div>
    </div>
  );
}
export default Home;
//Add flex container
//Add Images
//Finish assignment pieces
//Todos