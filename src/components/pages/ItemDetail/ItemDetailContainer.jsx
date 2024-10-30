import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productos";
import {useParams} from "react-router-dom"

const ItemDetailContainer = () => {
const {id} = useParams();
const [item, setItem] = useState({});

useEffect(() => {
let productoSelected = products.find((producto) => producto.id === id);
setItem(productoSelected);
}, [id]);

return <ItemDetail item={item} />;
};

export default ItemDetailContainer;

//   const agregarAlCarrito = (cantidad) => {
//     let objeto = { ...item, quantity: cantidad };
//    addToCart(objeto)
//   };

// // return <ItemDetail item={item} agregarAlCarrito={agregarAlCarrito} />;


