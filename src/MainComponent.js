import './App.css';
// import logotip from './images/logotip.svg'
// import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPageLogotip from './images/MainPageLogotip.png';

import { BsFillBasketFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import Button from 'react-bootstrap/Button';


function MainComponent() {


    return (
        <div className="App">
            <div className="header d-flex  justify-content-between">
                <img src={MainPageLogotip} width='80px' height='80px' className='animation' />
                <span className='forspan'> Bukettini - лучший подарок человеку, у которого есть   все! </span>
                <div className='basket' >
                    <BsFillBasketFill />
                </div>
            </div>


            <div className='mainbackground '>
                <div className='d-flex flex-column' >
                    <div><Button variant="secondary">Secondary</Button>{' '}</div>
                    <div><Button variant="secondary">Secondary</Button>{' '}</div>
                    <div><Button variant="secondary">Secondary</Button>{' '}</div>
                </div>

         
            </div>





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