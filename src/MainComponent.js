import './App.css';
// import logotip from './images/logotip.svg'
// import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPageLogotip from './images/MainPageLogotip.png';

import { BsFillBasketFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";


function MainComponent() {


    return (
        <div className="App">
            <div className="header d-flex  justify-content-between">
                <img src={MainPageLogotip} width='100px' height='100px' className='animation' />
                <span className='forspan'> Buketеini - лучший подарок человеку, у которого есть   все! </span>
                <div className='basket' >
                    <BsFillBasketFill width='100px' height='100px' />
                </div>
            </div>
            <div className='mainbackground'> оксновной контент  </div>


            <div className="footer d-flex justify-content-between">
                <div> Информация в футере </div>
                <div className=" d-flex justify-content-between mx-4 bg-dark  ">
                    <a className='px-2' href="http://anysite.ru" > <AiFillInstagram /></a>
                    <a className='px-2' href="http://anysite.ru" > <FaTelegram /></a>
                    <a className='px-2' href="http://anysite.ru" > <AiFillInstagram /></a>
                </div>
            </div>

        </div>
    )
}
export default MainComponent;