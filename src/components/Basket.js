
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';





function Basket(props) {





    return (
        <div className="basket">
            dd
         


            {props.basket.map((item) => {
                return (
                    <div className='mb-2' >
                        {item.id}
                    </div>
                )
            })}






        </div>
    )
}
export default Basket;

