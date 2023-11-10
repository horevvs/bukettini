

import 'bootstrap/dist/css/bootstrap.min.css';
import { ImCross } from "react-icons/im";
import { BsFillTrashFill } from "react-icons/bs";
import { useState, } from 'react';
import Modal from 'react-bootstrap/Modal';



function Basket(props) {

    const [address, setaddress] = useState([])
    const [phone, setphone] = useState([])
    const [inputs, setInputs] = useState([])

    // убираем с массива повторяющиеся элементы
    let b = [...new Set(props.basket)]
    console.log(b);
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

    const sendmessage = () => {
        // создаем json form
        let form = {
            form: {
                name: `${inputs}`,
                address: `${address}`,
                phone: `${phone}`,
            }
        }
           // фильтруем получаем массив объекто как нам надо
        let Filtered = b.map((item) => {
            return ({ id: item.id, quantity: item.quantity })
        } )
        // создаем объек отфильтрованных значений
        let items = {
            items: Filtered
        }

        let abc = Object.assign(items,form);
        let res = JSON.stringify(abc)
        console.log(res)
       
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
                                <BsFillTrashFill className='mx-5 mt-5  cursor ' onClick={() => props.deleteFrombasket(item.id)} />
                            </div>

                        </div>
                        <hr className='border border-4 border-dark mx-3' ></hr>
                    </div>
                )
            })}

            <button className='transformtext mx-4' onClick={openmodalmenu} > <span> Оформить заказ</span></button>

            <Modal show={show}>
                <Modal.Header className='bg-dark bg-opacity-75' onClick={openmodalmenu} closeButton>Отправить  заявку </Modal.Header>
                <Modal.Body>
                    <>
                        {b.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className='d-flex mt-3   justify-content-between ' >
                                        <div className='mx-2'> {item.name}   </div>
                                        <div >количество  - {item.quantity} шт.</div>
                                    </div>
                                    <hr className='border border-2 border-dark' ></hr>
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
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setaddress(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label"> Ваш номер, куда позвонить?</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setphone(e.target.value)} />
                            </div>
                            <button class="btn btn-dark" onClick={() => sendmessage(totalAmount)} >Отправить заявку</button>
                            {/* <div class="form-check form-check-inline mx-2">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label class="form-check-label" for="inlineCheckbox1">оплата по карте</label>
                            </div>

                            <div class="form-check form-check-inline  btn-secondary">
                                <input class="form-check-input btn-secondary" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label class="form-check-label btn-secondary" for="inlineCheckbox1">наличными</label>
                            </div> */}


                        </form>
                    </>
                </Modal.Body>
                <Modal.Footer className='bg-dark bg-opacity-50'>
                    <div >Итого: {totalAmount}  руб.</div>
                    <button class="btn btn-dark" onClick={() => sendmessage(totalAmount)} >Отправить заявку</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default Basket;

