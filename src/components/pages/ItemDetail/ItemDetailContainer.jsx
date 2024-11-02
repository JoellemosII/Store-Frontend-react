import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productos";
import {useParams} from "react-router-dom"
import { CartContext } from "../../../context/CartContexto";
import { toast } from "sonner";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const {addToCart , getTotalQuantity} = useContext(CartContext);
    const [item, setItem] = useState({});
    let totalInCart = getTotalQuantity(id);

    useEffect(() => {
    let productSelected = products.find((producto) => producto.id === id);
    setItem(productSelected);
    }, [id]);

    const agregarAlCarrito = (cantidad) => {
    let objeto = { ...item, quantity: cantidad };
    addToCart(objeto);
    toast.success("Producto agregado correctamente", {
        position: "bottom-right",
        closeButton: true,
    });
    };

    return (
    <ItemDetail
        item={item}
        agregarAlCarrito={agregarAlCarrito}
        totalInCart={totalInCart}
    />
    );
};

export default ItemDetailContainer;





