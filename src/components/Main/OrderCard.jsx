// import Counter from "../common/Counter";
import React from 'react';
// import {useState} from "react";


function OrderCard (props,  ) {
    // const [counter, setCounter] = useState(Number(1) );
    // function increment (counter) {
    //     setCounter(counter + 1)
    // }
    // function decrement (counter) {
    //     if (counter > 1 ) {
    //         setCounter(counter - 1)
    //     }
    // }
console.log (props)
    console.log (props.product.counter + 1)




    return (
        <div className='orderCard'>
            <div className="order_style_img">
                <img src={props.product.image} alt={props.product.title}/></div>
            <div className="order_style_title"><p>{props.product.title}</p></div>


            {/*<Counter />*/}
            <div className="count" >{props.product.counter} </div>
            {/*<button onClick={() => ((props.product.counter)+1)}>+</button>*/}
            {/*<button onClick={() => ((props.product.counter)+1)}>-</button>*/}


            <button onClick={() =>props.increment(props.product.counter)}>+</button>
            <button onClick={() =>props.decrement(props.product.counter)}>-</button>



            <div className="order_style_price"><p>{props.product.price} $</p></div>

            {/*<div><p>{total} $</p></div>*/}
            <button onClick={() => props.remove(props.product)}>X</button>
        </div>
    )
}

export default OrderCard;

