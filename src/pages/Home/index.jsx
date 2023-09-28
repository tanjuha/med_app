import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import "./home.css";

function Home() {
  return (
    <header className="container m-auto px-5">
      <Navbar />
      <div className="text-center">
        <h1 className="home-title">
          Your Health <span>Our Responsibility</span>
        </h1>
        <p className="mb-6">
          Lorem ipsum dolor sit amet. Aut perferendis eius ex ducimus vero ut
          minus nesciunt et aspernatur illo et blanditiis explicabo qui officiis
          fuga eum cumque reiciendis
        </p>
        <NavLink className="btn-main bg-primary inline-block" to="/best-services">
          Get started
        </NavLink>
      </div>
    </header>
  );
}

export default Home;
