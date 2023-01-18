import React, { useEffect, useState} from 'react';
import './Main_style.css';
import MySelect from "./MySelect";
import Product from "./Product";
import Santa from "./santa.png";
import OrderCard from "./OrderCard";


const Main = () => {
    const [products, setProducts] = useState([]);
    const [listOrder, setListOrder] = useState([]);
    const [selectedSort, setSelectedSort] = useState('');

    const [counter, setCounter] = useState(1 );
    function increment (counter) {
        setCounter(counter + 1)
    }
    function decrement (counter) {
        if (counter > 1 ) {
            setCounter(counter - 1)
        }
    }

    const getData=()=>{
        fetch('./data.json'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                // console.log(response)
                return response.json();
            })
            .then(function(myJson) {
                // console.log(myJson);
                setProducts(myJson)
            });
    }
    useEffect(()=>{
        getData()
    },[])


    const sortProducts = (sort) => {
        setSelectedSort(sort);
        setProducts([...products].sort((a, b) => a [sort].localeCompare(b[sort])))
    }
    // let obj = {
    // counter:1
    // }

    const addNewProduct = (elem, ) => {

        let isInArray = false;
        listOrder.forEach(el => {
            if (el.id === elem.id) {
                isInArray = true;
                // setCounter(el.counter + 1)
            }
        })
        elem.counter = 1
        // const newProduct = {
        //     ...elem,
        //     ...obj,
        // }
        if (!isInArray) {
            setListOrder([...listOrder, elem])
        }


    }


    const removeProduct = ( product) => {
        setListOrder(listOrder.filter((elem) => elem.id !== product.id));
    };



    return (
        <>
            <div id="chosenOrders">

                <div style={{filter: "drop-shadow(0 0 10px white)", marginRight: '115px'}}>
                    <img src={Santa} alt="Santa"/>
                </div>
<div className="chosenProducts">

    {listOrder.map(product => {
        return(
        <OrderCard
                remove={removeProduct}
                product={product}
                key={product.id}
                counter={product.counter}
                increment={increment}
                decrement={decrement}

            />
        )}
    )}
</div>

            </div>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortProducts}
                    defaultValue="Sort by"
                    options={[
                        {value: 'title', name: 'FROM A TO Z'},
                        // {value: 'price', name: 'PRICE (HIGH - LOW)'},
                    ]}/>
            </div>
            <div className="products">
                 {products && products.map((product) => {
                    return (
                            <Product
                            addNewProduct={() => addNewProduct(product)}
                            key={product.id}
                            title={product.title}
                            price={product.price + ' $'}
                            image={product.image}
                            />
                    )
                })}
            </div>
        </>
    );
};

export default Main;


// if (!listOrder.length) {
//     return (
//         <h1 style={{textAlign: 'center'}}>
//             Make your choice!
//         </h1>
//     )
// }
