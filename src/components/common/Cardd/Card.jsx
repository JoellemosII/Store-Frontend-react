import "../Cardd/cardstyle.css";
import { Link } from "react-router-dom";
export const Card = ({ title, price, image, id}) => {
    return (
    <div className="card">
        <h2>{title}</h2>
        <img src={image} alt="" />
        <div className="propierity">
        <p> ${price}</p>
        <Link to ={`/itemDetail/${id}`}>
        <button className="detalle">Ver detalle</button>
        </Link>
        </div>
    </div>
    );
};
