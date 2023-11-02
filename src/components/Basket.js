

import 'bootstrap/dist/css/bootstrap.min.css';
import { ImCross } from "react-icons/im";
import { useState, } from 'react';
import Modal from 'react-bootstrap/Modal';

function Basket(props) {

    const [adress, setadress] = useState([])
    const [phone, setphone] = useState([])
    const [inputs, setInputs] = useState([])

    // убираем с массива повторяющиеся элементы
    let b = [...new Set(props.basket)]

    // считаем сумму всех товаров вставляем
    const totalAmount = props.basket.reduce(
        function (sum, currentAccount) {
            return sum + currentAccount.price
        }, 0)

    // ссостояние управляет открытием модльного окна в котором  формируеться корзина
    const [show, setShow] = useState(false);
    const openmodalmenu = () => {
        setShow(!show)
    };

    const sendmessage = (totalAmount) => {
        // прокинуть с основного состояния массив и с него уже в  obj скинуть оставшиееся 

        let obj = {
            name: `${inputs}`,
            adress: `${adress}`,
            phone: `${phone}`,
            totalAmoun: `${totalAmount}`,
        }
        let resultForfetch = JSON.stringify(obj)
        alert(resultForfetch)

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
                                <div className='mx-2' id> {item.name}   </div>
                                <div className='mx-2'> цена: {item.price} руб. </div>
                                <button type="button" className="btn btn-dark btn-sm mx-2 px-2" onClick={() => props.deleteminus(item.id)}> - </button>
                                количество - {item.quantity} шт.
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
                                        <div >количество -{item.quantity} шт.</div>
                                    </div>
                                    <hr className='border border-4 border-dark mx-3' ></hr>
                                </div>
                            )
                        })}
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Как вас зовут уважаемый/ая?</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setInputs(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Адрес доставки</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setadress(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label"> Ваш номер, куда позвонить?</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setphone(e.target.value)} />
                            </div>
                            <button class="btn btn-dark" onClick={() => sendmessage(totalAmount)} >Отправить заявку</button>
                        </form>
                    </>
                </Modal.Body>
                <Modal.Footer className='bg-dark bg-opacity-50'>
                    <div >Итого {totalAmount}  рублей</div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default Basket;

