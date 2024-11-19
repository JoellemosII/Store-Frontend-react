import { Card } from "../../common/Cardd/Card";
import "../itemsListContainer/itemlist.css"

const ItemList = ({ items }) => {
return (
    <>
    <h2>Listado de productos</h2>
        <div className="itemlist">
            {items.map(({ id, title, imageUrl,price, stock,  }) => (
                <Card
                key={id}
                title={title}
                image={imageUrl}
                price={price}
                stock={stock}
                id={id}
                />
            ))};
        </div>
    </>
);
};

export default ItemList;

/**home */
