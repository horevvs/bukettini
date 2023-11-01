

import 'bootstrap/dist/css/bootstrap.min.css';
import { ImCross } from "react-icons/im";
import { useState, } from 'react';
import Modal from 'react-bootstrap/Modal';

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


    const [show, setShow] = useState(false);
    const openmodalmenu = () => {
        setShow(!show)
    };



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
            <button className='transformtext mx-4' onClick={openmodalmenu} > <span> Оформить заказ</span></button>
            <Modal show={show}>
                <Modal.Header className='bg-dark bg-opacity-25' onClick={openmodalmenu} closeButton>Отправить  заявку </Modal.Header>
                <Modal.Body>
                    <>

                        {b.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className='d-flex mt-3   justify-content-between ' >
                                        <div className='mx-2'> {item.name}   </div>
                                        <div >количество - {result[item.id]} шт.</div>
                                    </div>
                                    <hr className='border border-4 border-dark mx-3' ></hr>
                                </div>
                            )
                        })}
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Как вас зовут уважаемый/ая?</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Адрес доставки</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label"> Ваш номер, куда позвонить?</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <button type="submit" class="btn btn-dark">Отправить заявку</button>
                        </form>

                    </>
                </Modal.Body>
                <Modal.Footer className='bg-dark bg-opacity-75'>
                    <div className=''>Итого  {totalAmount}  рублей</div>

                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default Basket;

