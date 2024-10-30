import { useState } from "react";
import { useEffect } from "react";
import { products } from "../../../productos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const{category} =useParams();
const [items, setItems] = useState([]);
useEffect(() => {
    const unaFraccion = products.filter(producto => producto.category === category)
    const getProductos = new Promise((resolve) => {
    resolve( category ? unaFraccion : products);
    });
    getProductos.then((res) => {
    setItems(res);
    });

}, [category]);
return <ItemList items={items} />;
};
