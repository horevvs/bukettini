
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import { ImCross } from "react-icons/im";


function Basket(props) {

    const [renderinput, setrenderinput] = useState();


    return (
        <div className="basketDisplay scrollbasket">
            <div className='d-flex justify-content-between  header'> <p className='mx-4 mt-4'>Оформление заказа</p>   <ImCross className='mx-4 mt-4' onClick={props.handleClosebasket} />       </div>


            {props.basket.map((item) => {
                return (
                    <div>
                        <div className='d-flex mt-3  ' >
                            <img src={item.image} className="cursor cardstyle  border  border-4 border-white mx-3" alt="..." />
                            <p> {item.name}   </p>
                            <p> {item.price}   </p>
                            <p> 3шт   </p>
                            <ImCross className='mx-4 mt-4' />
                        </div>
                        <hr className='border border-4 border-white mx-3' ></hr>
                    </div>
                )
            })}


            <button className='transformtext mx-4  '> <span> Оформить заказ</span></button>



        </div>
    )
}
export default Basket;

