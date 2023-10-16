import './App.css';
// import logotip from './images/logotip.svg'
// import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPageLogotip from './images/MainPageLogotip.png';
import Slide from './Slide';
import { BsFillBasketFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";



function MainComponent() {


    return (
        <div className="App">
            <div className="header d-flex  justify-content-between">
                <img src={MainPageLogotip} width='80px' height='80px' className='animation' alt />
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
                        <div class=" px-5 py-3">
                            <button className='transformtext '> <span>Женское</span></button>
                        </div>
                        <div class=" px-5 py-3">
                            <button className='transformtext '><span>Разное</span></button>
                        </div>
                        <div class=" px-5 py-3">
                            <button className='transformtext '> <span>Товар в наличии</span></button>
                        </div>
                        <div class="px-5 py-3">
                            <button className='transformtext '><span>Обратная связь</span></button>
                        </div>
                    </div>

                    <div className='mx-5 my-2  hide '>
                        <Slide /> 
                    </div>


                </div>
                <div className='  bg-dark'>ffffffffff</div>

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