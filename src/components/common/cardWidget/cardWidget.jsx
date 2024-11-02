import "./cardWidget.css";
import { Link } from "react-router-dom";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { useContext } from "react";
import { CartContext } from "../../../context/CartContexto";


export const CardWidget = () => {
    const {cart} = useContext(CartContext);
    return (
    <Link to = "/cart">
        <ShoppingCartTwoToneIcon />
        <span>{cart.length}</span>
    </Link>
);
};

/**Logo Carrito */