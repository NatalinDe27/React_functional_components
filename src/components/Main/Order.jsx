import OrderCard from './OrderCard'
// import {useState} from "react";
import React from "react";
import {useState} from "react";





function Order ({orders, remove,  }) {




    return (
        <div className="chosenProducts">
            {orders.map(product => {return (
                        <OrderCard
                            remove={remove}
                            product={product}
                            key={product.id}
                            // count={count}
                            // increment={increment}
                            // decrement={decrement}
                        />
                )}
            )}

        </div>
    )
}

export default Order;