import "./cardWidget.css";
import { Link } from "react-router-dom";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
// import { useContext } from "react";
// import { CartContexto } from "../../../context/CartContexto";


export const CardWidget = () => {
    // const {cart} = useContext(CartContexto);
    return (
    <Link to = "/cart">
        <ShoppingCartTwoToneIcon />
        {/* <span>{cart.length}</span> */}
    </Link>
);
};
