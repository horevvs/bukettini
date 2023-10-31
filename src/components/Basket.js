

import 'bootstrap/dist/css/bootstrap.min.css';
import { ImCross } from "react-icons/im";

function Basket(props) {


    // убираем с массива повторяющиеся элементы
    let b = [...new Set(props.basket)]

    // считаем сумму всех товаров вставляем
    const totalAmount = props.basket.reduce(
        function (sum, currentAccount) {
            return sum + currentAccount.price
        }, 0)

    // добавляем количество выбранных одинаковых товаров
    let result = {};
    props.basket.forEach(function (a) {
        if (result[a.id] !== undefined)
            ++result[a.id];
        else
            result[a.id] = 1;
    })


    return (
        <div className="basketDisplay scrollbasket">
            <div className='d-flex justify-content-between  header'>
                <p className='mx-4 mt-4'>Оформление заказа</p>
                <div className='mx-4 mt-4'>Итого  {totalAmount}  рублей</div>
                <ImCross className='mx-5 mt-4 cursor' onClick={props.handleClosebasket} />
            </div>

            {b.map((item) => {
                return (
                    <div key={item.id}>
                        <div className='d-flex mt-3   justify-content-between ' >
                            <img src={item.image} className="cursor cardstylebasket  border  border-4 border-dark mx-3" alt="..." />

                            <div >
                                <div className='mx-2'> {item.name}   </div>
                                <div className='mx-2'> цена: {item.price} руб. </div>
                                <button type="button" className="btn btn-dark btn-sm mx-2 px-2" onClick={() => props.deleteminus(item.id)}> - </button>
                                  количество - {result[item.id]} шт.
                                <button type="button" className="btn btn-dark btn-sm mx-2 px-2" onClick={() => props.deletplus(item.id)}> + </button>
                            </div>

                            <div className='mx-2'>
                                <ImCross className='mx-5 mt-2 cursor ' onClick={() => props.deleteFrombasket(item.id)} />
                            </div>

                        </div>
                        <hr className='border border-4 border-dark mx-3' ></hr>
                    </div>
                )
            })}
            <button className='transformtext mx-4'> <span> Оформить заказ</span></button>
        </div>
    )
}
export default Basket;

