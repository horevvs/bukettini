import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import MainPageLogotip from './images/MainPageLogotip.png';
import Slide from './components/Slide';
import { BsFillBasketFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';
import catalog from "./catalog.json";
import Basket from './components/Basket';



function MainComponent() {
    const [state, setState] = useState(catalog);
    const [basketshow, setbasketshow] = useState(true);
    const [baskethide, setbaskethide] = useState(true);
    const [basket, setbasket] = useState([]);
    let massiv = Array(catalog.length)
    massiv.fill(false)
    const [show, setShow] = useState(massiv);
    const [show2, setShow2] = useState([]);

    let ara = []

    const handleClose = (id) => {
        show2[id] = false
        setShow(show2)
        setShow(false)
    }

    // добавление в корзину
    const addtoBasket = (id) => {
        show2[id] = false
        setShow(show2)
        setShow(false)
        const Filtered = catalog.filter((el) => {
            return el.id === id;
        })
        setbasket([...basket, ...Filtered])
        console.log(basket)
        if (basket == ![]) {
            setbasketshow(!basketshow)
        }
        ara = basket
    }




    // показать модальное окно
    const handleShow = (id) => {
        show2[id] = true
        setShow(show2)
    };

    // показать скрыть корзину
    const handleClosebasket = () => {
        return setbaskethide(!baskethide)
    };

    return (
        <div className="App">
            <div className="header d-flex  justify-content-between">
                <img src={MainPageLogotip} width='80px' height='80px' className='animation' alt='' />
                <span className='forspan'> Bukettini - лучший подарок человеку, у которого есть все! </span>
                <div className='basket'>

                    <SlBasket onClick={handleClosebasket} />
                    <div className={baskethide ? "baskethide" : " "}  >
                        {basketshow ? (<div>  Пусто </div>)
                            : (
                                <Basket basket={basket} handleClosebasket={handleClosebasket} />
                            )}
                    </div>
                </div>
            </div>

            <div className='mainbackground   '>
                <div className='d-flex justify-content-center '>
                    <div className='d-flex  flex-wrap fustify justify-content-center'>
                        <div className=" px-5 py-3">
                            <button className='transformtext '> <span>Мужское</span></button>
                        </div>
                        <div className=" px-5 py-3 px-2 ">
                            <button className='transformtext '> <span>Женское</span></button>
                        </div>

                        <div className=" px-5 py-3">
                            <button className='transformtext '> <span>Товар в наличии</span></button>
                        </div>
                        <div className="px-5 py-3">
                            <button className='transformtext '><span>Обратная связь</span></button>
                        </div>
                    </div>

                    {/* <div className='mx-5 my-2 hide '>
                        <Slide />
                    </div> */}

                </div>

                <div className='d-flex  flex-wrap scroll justify-content-around  '>
                    {state.map((item) => {
                        return (
                            <div key={item.id} className='mb-2 carts justify-content-center' >
                                <img onClick={() => handleShow(item.id)} src={item.image} className=" cardstyle cursor " alt="..." />
                                <h5 className="bg-dark bg-opacity-75 text-white ">{item.name}</h5>
                                <div className=' sas  bg-dark bg-opacity-75  d-flex flex-column  justify-content-center align-items-center '>
                                    <div className=' border border-white text-white  bg-dark boxbutton text-center  pt-2 ' onClick={() => addtoBasket(item.id)}>
                                        <p class="font-weight-bold">  <SlBasket /> Добавить в корзину</p></div>
                                    <div className=' border border-white text-dark   bg-white boxbutton text-center mt-5 pt-2' onClick={() => handleShow(item.id)}>
                                        <p class="font-weight-bold"> <BsSearch className='mx-2' /> Просмотр</p></div>
                                </div>
                                <Modal show={show[item.id]}>
                                    <Modal.Header className='bg-dark bg-opacity-25' onClick={() => handleClose(item.id)} closeButton>
                                    </Modal.Header>
                                    <img src={item.image} className="img-fluid cursor" alt="..." />
                                    <Modal.Footer className='bg-dark bg-opacity-25'>
                                        <p> Название - {item.name} Стоимость- {item.price} рублей</p>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        )
                    })}
                </div>


            </div>

            <div className="footer d-flex justify-content-between">
                <div> Информация в футере </div>
                <div className=" d-flex justify-content-between mx-4 bg-dark  ">
                    <a className='px-2 text-white' href="http://anysite.ru" > <AiFillInstagram /></a>
                    <a className='px-2 text-white' href="http://anysite.ru" > <FaTelegram /></a>
                </div>
            </div>
        </div>
    )
}
export default MainComponent;