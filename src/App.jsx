import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="flex w-full">
      <SideNav />
      <div className="w-4/5 fixed right-0">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
