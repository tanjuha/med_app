import Login from "./Login";
import Navbar from "../../layout/Navbar";
import SingUp from "./SingUp";
import "./home.css";

function Home() {
  return (
    // add class "dark" to <body/> - create dark theme, add child class with "dark: ... "
    <body className="">
      <header className="">
        <h1 className="text-3xl font-bold underline">Test</h1>
        <Navbar />
        <SingUp />
        <Login />
      </header>
    </body>
  );
}

export default Home;
