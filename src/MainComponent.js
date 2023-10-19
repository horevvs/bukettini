import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import MainPageLogotip from './images/MainPageLogotip.png';
import Slide from './components/Slide';
import { BsFillBasketFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
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
    const [show2, setShow2] = useState([false, false, false]);

    const handleClose = (id) => {
        show2[id] = false
        setShow(show2)
        setShow(false)
    }



    const addtoBasket = (id) => {
        // show2[id] = false
        // setShow(show2)
        // setShow(false)
        const Filtered = state.filter((el) => {
            return el.id === id;
        })
        const collection3 = basket.concat(Filtered);
        setbasket(collection3)
        console.log(basket)
    }




    const handleShow = (id) => {
        show2[id] = true
        setShow(show2)
    };

    const handleClosebasket = () => {
        return setbaskethide(!baskethide)
    };

    return (
        <div className="App">
            <div className="header d-flex  justify-content-between">
                <img src={MainPageLogotip} width='80px' height='80px' className='animation' alt='' />
                <span className='forspan'> Bukettini - лучший подарок человеку, у которого есть все! </span>
                <div className='basket'>
                    <BsFillBasketFill onClick={handleClosebasket} />
                    <div className={baskethide ? "baskethide" : " "}  >
                        {basketshow ? (<div className='mr-5 emptyBasket'>  Пусто</div>)
                            : (
                                <Basket className='' />
                            )}
                    </div>
                </div>
            </div>

            <div className='mainbackground   '>
                <div className='d-flex '>
                    <div className='d-flex flex-md-column  flex-wrap fustify justify-content-center'>
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

                    <div className='mx-5 my-2 hide '>
                        <Slide />
                    </div>

                </div>

                <div className='d-flex  flex-wrap scroll justify-content-around '>
                    {state.map((item) => {
                        return (
                            <div key={item.id} className='mb-2' >
                                <img onClick={() => handleShow(item.id)} src={item.image} className=" cardstyle cursor  py-2" alt="..." />
                                <h5 className="card-title text-white">{item.name}</h5>
                                <Modal show={show[item.id]} onHide={() => handleClose(item.id)} className=''>
                                    <img onClick={() => handleClose(item.id)} src={item.image} className="img-fluid cursor" alt="..." />
                                    <Button onClick={() => addtoBasket(item.id)} className='bg-dark border border-dar'> Добавить в корзину </Button>
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