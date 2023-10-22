
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import { ImCross } from "react-icons/im";


function Basket(props) {



    return (
        <div className="basketDisplay ">
            <div className='d-flex justify-content-between mt-4 mx-5'> <p>Список товаров</p>   <ImCross className='' onClick={props.handleClosebasket} />       </div>



            {props.basket.map((item) => {
                return (
                    <div className='' >
                        <p> {item.name}   </p>
                    </div>
                )
            })}






        </div>
    )
}
export default Basket;

