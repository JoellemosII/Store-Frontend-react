import { CardWidget } from "../../common/cardWidget/cardWidget";
import "./navbar.css";

export const Navbar = () =>{
    return(
        <>
        <div className="container-navbar">
            <img src="https://res.cloudinary.com/dwf9gj6mq/image/upload/v1728658180/logo_aqtyza.png" alt="logo StoreFrontend" />

            <ul>
                <li>Inicio</li>
                <li>Kids</li>
                <li>Adultos</li>
                <li>Gift Card</li>
            </ul>

            <CardWidget />
        </div>
        </>
    );
};