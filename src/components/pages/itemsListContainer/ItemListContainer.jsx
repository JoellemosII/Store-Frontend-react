import { useState } from "react";
import { useEffect } from "react";
import { products } from "../../../productos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";

export const ItemListContainer = () => {
    const{category} =useParams();

    const [items, setItems] = useState([]);
useEffect(() => {
    const unaFraccion = products.filter(producto => producto.category === category)
    
    const getProductos = new Promise((resolve) => {
    resolve( category ? unaFraccion : products);
    });
    
    getProductos.then((res) => {
        setTimeout(()=>{
            setItems(res);
        }, 1500);
    });

}, [category]);

if (items.length === 0) {
    return (
    <>
        <div className="loading">
            <Skeleton variant="rectangular" width={200} height={100} />
            <Skeleton variant="text" sx={{fontSize:"1rem"}} width={200} height={50} />
            <Skeleton variant="text" sx={{}}width={200} height={100} />
            <Skeleton variant="text" sx={{}} width={200} height={100} />
        </div>
        <div>
            <Skeleton variant="rectangular" width={200} height={100} />
            <Skeleton variant="text" width={200} height={50} />
            <Skeleton variant="text" width={200} height={100} />
            <Skeleton variant="text" width={200} height={100} />
        </div>
        <div>
            <Skeleton variant="rectangular" width={200} height={100} />
            <Skeleton variant="text" width={200} height={50} />
            <Skeleton variant="text" width={200} height={100} />
            <Skeleton variant="text" width={200} height={100} />
        </div>
        <div>
            <Skeleton variant="rectangular" width={200} height={100} />
            <Skeleton variant="text" width={200} height={50} />
            <Skeleton variant="text" width={200} height={100} />
            <Skeleton variant="text" width={200} height={100} />
        </div>
    </>
    );
}

return <ItemList items={items} />;
};
