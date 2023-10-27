import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsTelephoneFill } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { YMaps, Map, Placemark, ZoomControl, FullscreenControl } from '@pbe/react-yandex-maps';
import React, { useEffect, useState } from 'react';
import MainPageLogotip from '../images/MainPageLogotip.png';


function Feedback() {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);


    return (
        <div className="App">

            {loading ? (
                <div className='bodyloader '><span className="loader">  <img src={MainPageLogotip} width='300px' height='300px' alt='' />    </span>
                </div>
            ) : (<div>
                <div className="header d-flex  justify-content-center">
                    <span className='forspan '> Bukettini - лучший подарок человеку, у которого есть все! </span>
                </div>

                <div className='mainbackground  d-flex justify-content-center pt-5   '>
                    <div className='yandex  mx-5 py-2 border border-4 border-white'>
                        <p className='h5 text-white m-3 '> <BsTelephoneFill className='h5 text-white' /> +7-913-855-58-07. </p>
                        <p className='h5 text-white m-3'>  ул. Алтайская д. 20, ​1 этаж. <br />Вход со стороны  Красноамейской. </p>
                        <p className='h5 text-white m-3 mt-5'>  Написать нам </p>

                        <div class="p-2">
                            <form action="user.php" method="POST">
                                <textarea class="form-control " id="exampleFormControlTextarea1" rows="3"></textarea>
                                <input type="submit" class="btn btn-light mt-3" value="Отправить" />
                            </form>
                        </div>

                    </div>

                    <YMaps  >
                        <Map
                            defaultState={{
                                center: [56.481399, 84.966864],
                                zoom: 16,
                                controls: [],
                            }}
                            width='40%'
                            height='45%'                        >
                            <div className='h5 text-white '> Мы здесь </div>
                            <ZoomControl options={{ float: "right" }} />
                            <Placemark geometry={[56.481399, 84.966864]} />
                            <FullscreenControl />
                        </Map>
                    </YMaps>
                </div>



                <div className="footer d-flex justify-content-between">
                    <div> Информация в футере </div>
                    <div className=" d-flex justify-content-between mx-4 bg-dark  ">
                        <a className='px-2 text-white' href="http://anysite.ru" > <AiFillInstagram /></a>
                        <a className='px-2 text-white' href="http://anysite.ru" > <FaTelegram /></a>
                    </div>
                </div>
            </div>)
            }





        </div >
    )
}
export default Feedback;