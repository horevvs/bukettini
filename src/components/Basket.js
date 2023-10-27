
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import { ImCross } from "react-icons/im";


function Basket(props) {

    let price = props.basket

    let b = [...new Set(props.basket)]
    const [renderinput, setrenderinput] = useState(b);

    const totalAmount = price.reduce(
        function (sum, currentAccount) {
            return sum + currentAccount.price
        }, 0)


     var result = {};


        price.forEach(function(a){
                if (result[a.id] != undefined)
                    ++result[a.id];
                else
                    result[a.id] = 1;
            });
            


    return (
        <div className="basketDisplay scrollbasket">
            <div className='d-flex justify-content-between  header'> <p className='mx-4 mt-4'>Оформление заказа</p>    <div>Итого  {totalAmount}  рублей</div>  <ImCross className='mx-4 mt-4' onClick={props.handleClosebasket} />       </div>
            {b.map((item) =>  {

                return (


                    <div>
                        <div className='d-flex mt-3  ' >
                            <img src={item.image} className="cursor cardstyle  border  border-4 border-white mx-3" alt="..." />
                            <div className='mx-2'> {item.name}   </div>
                            <div className='mx-2'> {item.price}рублей  </div>
                            <div className='mx-2'>  
                            <button type="button" class="btn btn-primary btn-sm"> - </button>  количество - {result[item.id]}шт. <button type="button" class="btn btn-primary btn-sm">+</button>  </div>
                            <ImCross className='mx-4 mt-4' />
                        </div>
                        <hr className='border border-4 border-white mx-3' ></hr>
                    </div>
                )
            })}
            <button className='transformtext mx-4'> <span> Оформить заказ</span></button>
        </div>
    )
}
export default Basket;


// var arr = [
//     {
//         "id": 0,
//         "image": "mens/1.jpg",
//         "price": 200, 
//         "name": "food1111"
         
//     },
//     {
//         "id": 0,
//         "image": "/mens/2.jpg",
//         "price": 200, 
//         "name": "food2"
         
//     },
//     {
//         "id": 0,
//         "image": "/mens/3.jpg",
//         "price": 200, 
//         "name": "food3"
         
//     },
//     {
//         "id": 1,
//         "image": "/mens/4.jpg",
//         "price": 200, 
//         "name": "food4"
//     },
//     {
//         "id": 4,
//         "image": "/mens/5.jpg",
//         "price": 200, 
//         "name": "food5" 
//     }
//     ];
// var result = {};



// arr.forEach(function(a){
//     if (result[a.id] != undefined)
//         ++result[a.id];
//     else
//         result[a.id] = 1;
// });
//  console.log(result)
// ;