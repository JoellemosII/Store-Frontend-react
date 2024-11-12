import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContexto";
import"../checkout/checkstyle.css";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const Checkout = () => {
const {cart,getTotalAmount} = useContext(CartContext);
const [orderId,setOrderId] = useState(null);

const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
});

const funcionDelFormulario = (evento) => {
    evento.preventDefault();
    const total = getTotalAmount()
    // comunicarnos con la api
    const order ={
        buyer: userInfo,
        items: cart,
        total,
    };

    let refCollection = collection(db , "orders")
    addDoc(refCollection, order).then((res)=> setOrderId(res.id));

    let refCol = collection (db , "productos");
    order.items.forEach((item) =>{
        let refDoc = doc(refCol,item.id);
        updateDoc(refDoc, {stock:item.stock-item.quantity})
    });
};


const capturarInfo = (evento) =>{
    const{name, value } = evento.target;
    setUserInfo({...userInfo,[name]:value})
};

if(orderId){
    return <h2>Gracias por tu compra tu N° de orden es :{orderId} </h2>
}

return (
    <div>
        <form onSubmit={funcionDelFormulario}>
            <input
            type="text"
            placeholder="jorge duje"
            name="name"
            onChange={capturarInfo}
            />
            <input
            type="email"
            placeholder="jorge@gmail.com"
            name="email"
            onChange={capturarInfo}
            />
            <input
            type="text"
            placeholder="1155444878"
            name="phoneNumber"
            onChange={capturarInfo}
            />
            <button>comprar</button>
            <button type="button">Cancelar</button>
        </form>
    </div>
    );
};

export default Checkout;

