// import { createContext, useState } from "react";
// export const CartContexto = createContext();

// export const CartContextProvider = ({children}) =>{
// const [cart , setCart] = useState([]);
// //logica del carrito 
// //agregar al carrito  
// const addToCart = (product) =>{
// setCart([...cart, product])
// };
// //eliminar del carrito  
// const removeById = (id) =>{
// let arrayFiltrado = cart.filter((elemento)=> elemento.id !==id)
// setCart(arrayFiltrado)
// };
// //total a pagar ,
// //limpiar carrito
// const clearCart = () =>{};
// setCart([]);
// let data = {cart , addToCart, removeById , clearCart}
//     return <CartContexto.Provider value = {data}>
//         {children}
//     </CartContexto.Provider>
// };