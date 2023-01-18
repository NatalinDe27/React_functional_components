

function Product ({ id, title, price, image, addNewProduct }) {

    return (
        <div className="product" key={id} onClick={addNewProduct} >
            <div className="product_style_img">
            <img src={image} alt={title}  /></div>
          {/*<button onClick={addNewProduct} className="myBtn">buy it</button>*/}
            <h3>{title}</h3>
            <p>{price}</p>
        </div>
    )
}

export default Product;