import Login from "./Login";
import Navbar from "../../layout/Navbar";
import SingUp from "./SingUp";
import "./home.css";

function Home() {
  return (
      <header className="container m-auto px-5">
        <Navbar />
        <SingUp />
        <Login />
      </header>
  );
}

export default Home;
