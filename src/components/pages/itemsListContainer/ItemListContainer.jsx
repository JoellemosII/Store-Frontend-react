// import { useEffect , useState} from "react";
// import {productos} from "../../productos";



// let misProductosPromesas = new Promise ((res , rej) =>{
//     setTimeout(() =>{
//         if(productos.length == 0){
//             rej("Productos vacios");
//         }else{
//             res(productos);
//         }
//     }, 2500);
// });

// export const ItemListContainer = () =>{
//     const [productos ,setProductos] = useState([])

//     useEffect (() =>{
//         misProductosPromesas
//         .then((data) =>{
//             setProductos(data);
//         })
//         .catch((err) =>{
//             console.log(err);
//         }).finally(() =>{
//             console.log("siempre se ejecuta")
//         });
//     }, []);

//     return(
//             <div className="il-container">
//             <ItemList myProducts={productos} />
//             </div>
//         );
// } 



// import { Card } from "../card/Card";
// export const ItemList = ({ myProducts }) => {
// return myProducts.map(({ id, title, price, stock, imageUrl }) => (
//     <Card
//     key={id}
//     title={title}
//     price={price}
//     stock={stock}
//     image={imageUrl}
//     />
// ));
// };
import "./ItemListContainer.css";
import { Card } from "../../common/card/card";

export const ItemListContainer = () => {
    return (
    <div>
        {/* <Card title ="Nike" price={1200} stock={10}/>
        <Card title ="Puma" price={1700} stock={100}/>
        <Card title ="Adidas" price={1500} stock={60}/> */}
        <Card/>
    </div>
);
};
