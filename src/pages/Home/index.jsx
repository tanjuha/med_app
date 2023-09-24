import Login from "./Login";
import Navbar from "../../layout/Navbar";
import SingUp from "./SingUp";
import "./home.css";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <SingUp />
        <Login />
      </header>
    </div>
  );
}

export default Home;
