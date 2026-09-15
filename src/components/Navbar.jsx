import { FaBars } from "react-icons/fa";

function Navbar(){
    return(
        <nav className="navbar">
            <div className="nav-left">
                <div className="menu">
                    <FaBars/>
                    <span>MENU</span>
                </div>
                <a href="#">PRODUCTS</a>
                <a href="#">About</a>
            </div>
            <div className="logo">
                DERMIQT
            </div>
            <div className="nav-right">
                <a href="#">REVIEWS</a>
                <a href="#">BLOG</a>
                <button> SHOP NOW</button>
            </div>

        </nav>

    );
}
export default Navbar;