import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import MainPageLogotip from './images/MainPageLogotip.png';
import Slide from './Slide';
import { BsFillBasketFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import catalog from "./catalog.json";
import Basket from './Basket';



function MainComponent() {
    const [state, setState] = useState(catalog);
    const [basketshow, setbasketshow] = useState(true);
    const [baskethide, setbaskethide] = useState(false);

    let massiv = Array(catalog.length)
    massiv.fill(false)

    const [show, setShow] = useState(massiv);
    const [show2, setShow2] = useState([false, false, false]);

    const handleClose = (id) => {
        show2[id] = false
        setShow(show2)
        setShow(false)
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
                        {basketshow ? (<div className='mr-5 emptyBasket'>  В корзине пусто</div>)
                            : (
                                <Basket  className=''/>
                            )}
                    </div>


                </div>


            </div>


            <div className='mainbackground   '>
                <div className='d-flex '>
                    <div className='d-flex flex-md-column  flex-wrap fustify justify-content-center'>
                        <div class=" px-5 py-3">
                            <button className='transformtext '> <span>Мужское</span></button>
                        </div>
                        <div class=" px-5 py-3 px-2 ">
                            <button className='transformtext '> <span>Женское</span></button>
                        </div>

                        <div class=" px-5 py-3">
                            <button className='transformtext '> <span>Товар в наличии</span></button>
                        </div>
                        <div class="px-5 py-3">
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
                            <div key={item.id} class="card cardstyle mx-2 my-2" >
                                <img onClick={() => handleShow(item.id)} src={item.image} class="card-img-top cursor " alt="..." />
                                <h5 class="card-title">{item.name}</h5>
                                <>
                                    <Modal show={show[item.id]} onHide={() => handleClose(item.id)} >
                                        <img onClick={() => handleClose(item.id)} src={item.image} class="card-img-top img-fluid  cursor" alt="..." />
                                        <Button onClick={() => handleClose(item.id)} className='bg-dark'> Добавить в корзину </Button>
                                    </Modal>
                                </>
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