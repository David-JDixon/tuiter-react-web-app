import ModuleList from "../Modules/List";
import StatusBar from "./status";


function Home() {
  return (
    <div>
      <h2>Home</h2>
      <ModuleList />
      <h2>Status</h2>
        <StatusBar />
    </div>
  );
}
export default Home;