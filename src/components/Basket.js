
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';





function Basket(props) {





    return (
        <div className="baskettotal">
            <p> Список товаров</p>



            {props.basket.map((item) => {
                return (
                    <div className='mb-2' >
                        <p> {item.name} -{item.price} rub  </p>
                    </div>
                )
            })}






        </div>
    )
}
export default Basket;

