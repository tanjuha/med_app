import Login from "./Login";
import Navbar from "../../layout/Navbar";
import SingUp from "./SingUp";
import "./home.css";

function Home() {
  return (
    <div className="">
      <header className="">
        <h1 className="text-3xl font-bold underline">Test</h1>
        <Navbar />
        <SingUp />
        <Login />
      </header>
    </div>
  );
}

export default Home;
