import Counter from "../common/Counter";
import React from 'react';



function OrderCard (props,  ) {

    return (
        <div className='orderCard'>
            <div className="order_style_img">
                <img src={props.product.image} alt={props.product.title}/></div>
            <div className="order_style_title"><p>{props.product.title}</p></div>
            {/*<Counter />*/}
            <div className="order_style_count"><p>{props.product.count} </p></div>
            <div className="order_style_price"><p>{props.product.price} $</p></div>
            {/*<div><p>{total} $</p></div>*/}
            <button onClick={() => props.remove(props.product)}>X</button>
        </div>
    )
}

export default OrderCard;

