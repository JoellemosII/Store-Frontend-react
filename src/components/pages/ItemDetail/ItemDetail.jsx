import Counter from "../../common/Counter/Counter";
import "../ItemDetail/itemdetail.css"
import { Link } from "react-router-dom";


const ItemDetail = ({ item, agregarAlCarrito, totalInCart }) => {
  return (
    <>
      <div className="details">
        <h2>{item.title}</h2>
        <h2>{item.description}</h2>
        <img src={item.imageUrl} alt="" />
        <Counter
          stock={item.stock}
          agregarAlCarrito={agregarAlCarrito}
          totalInCart={totalInCart}
          />
          <button><Link to ="/">Seguir Comprando</Link></button>
      </div>
    </>
  );
};
export default ItemDetail;
/**Ver detalle */