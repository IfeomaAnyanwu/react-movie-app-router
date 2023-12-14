import Footer from "../components/Footer";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav id="nav-bar">
        <div id="nav-header">
          <div id="logo">
            just <span>flicks</span>
          </div>
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars" />
          </button>
        </div>
        {/*----------End of logo and toggle bar----------*/}

        <ul className="nav-links" id="nav-links">
          <li className="active">
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/drama"}>Drama</Link>
          </li>

          <li>
            <Link to={"/comedy"}>Comedy</Link>
          </li>

          <li>
            <Link to={"/adventure"}>Adeventure</Link>
          </li>

          <li>
            <Link to={"/documentary"}>Documentary</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}
