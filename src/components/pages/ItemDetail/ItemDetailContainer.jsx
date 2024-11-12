import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { db } from "../../../firebaseConfig";
import {collection ,doc,getDoc} from "firebase/firestore";
import {useParams} from "react-router-dom"
import { CartContext } from "../../../context/CartContexto";
import { toast } from "sonner";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const {addToCart , getTotalQuantity} = useContext(CartContext);
    const [item, setItem] = useState({});
    let totalInCart = getTotalQuantity(id);

    useEffect(() => {
        const productsCollection = collection(db, "productos");
        const docRef = doc(productsCollection, id);
        getDoc(docRef).then((res) => {
        setItem({ ...res.data(), id: res.id });
        });
    }, [id]);
    
    const agregarAlCarrito = (cantidad) => {
    let objeto = { ...item, quantity: cantidad };
    addToCart(objeto);
    toast.success("Producto agregado correctamente", {
        position: "bottom-right",
        closeButton: true,
        richColors: true,
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





