import { useState } from "react";
import "../Counter/counterstyle.css";
import { toast } from "sonner";
import AddCircleOutlineOutlinedIcon  from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
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
            <button><RemoveCircleOutlineOutlinedIcon  onClick={restar}/></button>
            <h2>Unidades = {contador}</h2>
            <button><AddCircleOutlineOutlinedIcon onClick={sumar} /></button>
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