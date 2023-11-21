

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
        })
        // создаем объек отфильтрованных значений
        let items = {
            items: Filtered
        }

        let abc = Object.assign(items, form);
        let res = JSON.stringify(abc)

        console.log(res)
        fetch('https://flowers.birb.pro/api/ajax/basket',
            {
                method: 'POST',
                body: {
                    "items": [
                      {
                        "id": 5,
                        "quantity": 2
                      },
                      {
                        "id": 4,
                        "quantity": 2
                      }
                    ],
                    "form": {
                      "name": "печкин",
                      "address": "на деревню дедушке",
                      "phone": "12-34-56-78"
                    }
                  }
                ,
                headers: { 'Content-type': 'application/json; charset=UTF-8', }
            }
        ).then(response => console.log(response.status))
    };

    return (
        <div className="basketDisplay scrollbasket">
            <div className='d-flex justify-content-between  header'>
            <button className='transformtext mx-4 mt-4' onClick={openmodalmenu} > <span> Оформить заказ</span></button>
                <div className='mx-4 mt-4 '>Итого  {totalAmount}  рублей</div>
                <ImCross className='mx-5 mt-4 cursor' onClick={props.handleClosebasket} />
            </div>

            {b.map((item) => {
                return (
                    <div key={item.id}>
                        <div className='d-flex mt-3 flex-column flex-md-row  justify-content-between  align-items-center' >
                            <img src={item.image} className="cursor cardstylebasket  border  border-4 border-dark mx-3" alt="..." />
                            <div >
                                <div className='mx-2 text-center' id> {item.name}   </div>
                                <div className='mx-2 text-center'> цена: {item.price} руб. </div>
                                <button type="button" className="btn btn-dark btn-sm mx-2 px-2" onClick={() => props.deleteminus(item.id)}> - </button>
                                количество - {item.quantity} шт.
                                <button type="button" className="btn btn-dark btn-sm mx-2 px-2" onClick={() => props.deletplus(item.id)}> + </button>
                            </div>
                            <div className='mx-2'>
                                <BsFillTrashFill className='mx-5 mt-4  cursor ' onClick={() => props.deleteFrombasket(item.id)} />
                            </div>

                        </div>
                        <hr className='border border-4 border-dark mx-3' ></hr>
                    </div>
                )
            })}

           

            <Modal show={show}>  
                <Modal.Header className='bg-dark bg-opacity-75 fs-3 text-white font-weight-bold' onClick={openmodalmenu} closeButton>Отправить  заявку </Modal.Header>
                <Modal.Body>
                    <>
                        {b.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className='d-flex mt-3   justify-content-between ' >
                                        <div className=''> {item.name}   </div>
                                        <div >количество  - {item.quantity} шт.</div>
                                    </div>
                                  
                                </div>
                            )
                        })}
                        <form class="mt-3">
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
                   


                        </form>
                    </>
                </Modal.Body>
                <Modal.Footer className='bg-dark bg-opacity-50'>
                    <div  className='fs-3 text-white font-weight-bold'>Итого: {totalAmount}  руб.</div>
                    
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default Basket;

