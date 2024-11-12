import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContexto";

import "/src/components/pages/cart/stylecartcontainer.css";

const CartContainer = () => {
    const { cart, clearCart, removeById, getTotalAmount} = useContext(CartContext);

    let totalEnElCarrito = getTotalAmount();

    return (
        <>
            <div>
                <h1>Aca el carrito</h1>

                {cart.map((product) => {
                return (
                    <div className="cartStyle"
                    key={product.id}>
                    <h2>{product.title}</h2>
                    <h3>Cantidad: {product.quantity}</h3>
                    <img src={product.imageUrl} alt={product.title} />
                    <button onClick={() => removeById(product.id)}>Eliminar</button>
                    </div>
            );
                })}

                {cart.length > 0 && <button onClick={clearCart}>Limpiar carrito</button>}
                <button>
                <Link to="/checkout" style={{ color: "black" }}>
                Finalizar compra
                </Link></button>

                <h2 style={{ color: cart.length > 0 ? "red" : "blue" }}>
                El total a pagar es ${totalEnElCarrito};
                </h2>

                <button><Link to ="/">Seguir Comprando</Link></button>
            </div>
        </>
    );
};

export default CartContainer;
/**Carrito */