import { CardWidget } from "../../common/cardWidget/cardWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () =>{
    return(
        <>
        <div className="container-navbar">
            <Link to ="/category/Inicio">
            <img src="https://res.cloudinary.com/dwf9gj6mq/image/upload/v1728658180/logo_aqtyza.png" alt="logo StoreFrontend" />
            </Link>

            <ul>
                <Link to="/">Inicio</Link>
                <Link to="/category/Kids">Kids</Link>
                <Link to="/category/Adultos">Adultos</Link>
                <Link to="/category/Giftcard">Gift Card</Link>
            </ul>

            <CardWidget />
        </div>
        </>
    );
};