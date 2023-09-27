import Navbar from "../../layout/Navbar";
import Button from "../../components/Button";
import "./home.css";

function Home() {
  return (
    <header className="container m-auto px-5">
      <Navbar />
      <h1 className="home-title">
        Your Health <span>Our Responsibility</span>
      </h1>
      <p className="text-center mb-5">
        Lorem ipsum dolor sit amet. Aut perferendis eius ex ducimus vero ut
        minus nesciunt et aspernatur illo et blanditiis explicabo qui officiis
        fuga eum cumque reiciendis
      </p>
      <Button className="btn-main bg-primary block m-auto " label="Get started"/>
    </header>
  );
}

export default Home;
