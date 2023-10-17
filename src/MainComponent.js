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



function MainComponent() {
    const [state, setState] = useState(catalog);



    const [show, setShow] = useState([false, false]);
    const handleClose = () => setShow(false);


    const handleShow = (id) => {

//         let a =show.map((item) => {

// if (item=id)

//         })

        alert(id)
        console.log(show)

    };


    return (
        <div className="App">
            <div className="header d-flex  justify-content-between">
                <img src={MainPageLogotip} width='80px' height='80px' className='animation' alt='' />
                <span className='forspan'> Bukettini - лучший подарок человеку, у которого есть все! </span>
                <div className='basket' >
                    <BsFillBasketFill />
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
                                <img src={item.image} class="card-img-top " alt="..." />
                                <h5 class="card-title">{item.name}</h5>
                                <>
                                    <Button variant="dark" onClick={() => handleShow(item.id)}>
                                        Launch demo modal
                                    </Button>
                                    <Modal show={show[item.id]} onHide={() => handleClose(item.id)} animation={false}>
                                        <Modal.Header closeButton>
                                        </Modal.Header>
                                        <Modal.Body>1</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                        </Modal.Footer>
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