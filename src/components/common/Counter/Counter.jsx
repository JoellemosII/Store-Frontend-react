import { useState } from "react";
import "../Counter/counterstyle.css";
import { toast } from "sonner";
const Counter = ({ stock, agregarAlCarrito , totalInCart}) => {
const [contador, setContador] = useState(1);

const sumar = () => {
stock -  totalInCart > contador ? setContador(contador + 1) : toast.error('Limite de Stock Maximo',{
    position :"top-center",
    closeButton : true,
    richColors :true,
});
};
const restar = () => {
contador > 1 && setContador(contador - 1);
};

return (
    <>
        <div className="counter">
            <button onClick={restar}>restar</button>
            <h2>Unidades = {contador}</h2>
            <button onClick={sumar}>sumar</button>
        </div>

        <div className="btnAdd">
            <button onClick={() => agregarAlCarrito(contador)}>
            Agregar al carrito
            </button>
        </div>
    </>
);
};

export default Counter;
/**Contador */