const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>{item.title}</h2>{" "}
      <img src ={item.imageUrl} alt="" style ={{width: "150px" ,height:"150px"}}/> 
    </div>
  );
};

export default ItemDetail;
