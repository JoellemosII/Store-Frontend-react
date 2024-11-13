import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { db } from "../../../firebaseConfig.js";
import{collection, getDocs,query,where} from "firebase/firestore";

export const ItemListContainer = () => {
        const{category} = useParams();

        const [items, setItems] = useState([]);
    useEffect(() => {
    const porductsCollection = collection(db, "productos")
    let docsRef = porductsCollection;
    if(category){
        docsRef = query(porductsCollection,where("category" , "==",category));
    }


    getDocs(docsRef).then((res)=>{
        let arrayEntendible = res.docs.map((doc)=> {
            return {...doc.data(),id:doc.id};
        });
        setItems(arrayEntendible)
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
        </>
        );
    }
    return (<ItemList items={items} />);
};