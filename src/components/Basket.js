
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import { ImCross } from "react-icons/im";


function Basket(props) {

    let price = props.basket

    let b = [...new Set(props.basket)]
    // const [renderinput, setrenderinput] = useState(a);

    const totalAmount = price.reduce(
        function (sum, currentAccount) {
            return sum + currentAccount.price
        }, 0)

    // const price = () => {
    //     console.log(a)
    //     console.log(b)
    // };

    return (
        <div className="basketDisplay scrollbasket">
            <div className='d-flex justify-content-between  header'> <p className='mx-4 mt-4'>Оформление заказа</p>    <div>Итого  {totalAmount}  рублей</div>  <ImCross className='mx-4 mt-4' onClick={props.handleClosebasket} />       </div>


            {b.map((item) => {

                return (
                    <div>
                        <div className='d-flex mt-3  ' >
                            <img  src={item.image} className="cursor cardstyle  border  border-4 border-white mx-3" alt="..." />
                            <p> {item.name}   </p>
                            <p> {item.price}   </p>
                            {/* <p> 3шт   </p>
                            <p> количество </p> */}
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

