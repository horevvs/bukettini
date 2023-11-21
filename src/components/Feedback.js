import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsTelephoneFill } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { YMaps, Map, Placemark, ZoomControl, FullscreenControl } from '@pbe/react-yandex-maps';
import React, { useEffect, useState } from 'react';
import MainPageLogotip from '../images/MainPageLogotip.png';
import { useNavigate } from 'react-router-dom';

function Feedback() {

    const [inputs, setInputs] = useState([])

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    const navigate = useNavigate();

    const handleClick = () => {
        setTimeout(() => {
            navigate('/');
        }, 500);
    }

    const sendmessage = () => {
        let object = {
            textmessage: `${inputs}`,
        }


        fetch('https://flowers.birb.pro/api/ajax/feedback',
            {
                method: 'POST',
                body: object,
                headers: { 'Content-type': 'application/json; charset=UTF-8', },
            }
        ).then(response => console.log(response.status))




    };


    return (
        <div className="App">

            {loading ? (
                <div className='bodyloader '><span className="loader">  <img src={MainPageLogotip} width='100px' height='100px' alt='' />    </span>
                </div>
            ) : (<div>
                <div className="header d-flex  justify-content-around">
                    <button onClick={handleClick} className='transformtext mx-2  mt-4'><span>Главное меню</span></button>
                    <span className='mt-4  text-center fs-3 d-none  d-sm-block'> Bouquet of food  - лучший подарок человеку, у которого есть все! </span>
                    {/* <span className='forspan fs-2 '> Bukettini - лучший подарок человеку, у которого есть все! </span> */}
                    {/* <a href="https://wtsapp.online/89138719229"> написать в ватсап</a> */}
                </div>


                <div className='mainbackground  d-flex  flex-column align-items-center p-2  '>
                    <div className='yandex  mx-5 py-3 border border-4 border-white'>
                        <p className='h5 text-white m-3 '> <BsTelephoneFill className='h5 text-white' /> +7-123-456-78-90. </p>
                        <p className='h5 text-white m-3'> ул.Ленина д.1, ​1 этаж. <br /> Вход со стороны   улицы. </p>
                        <p className='h5 text-white m-3'> Ежедневно с 10:00 до 18:00. </p>
                        <p className='h5 text-white m-3 '> Написать нам </p>
                        <div class="p-2">
                            <form >
                                <textarea class="form-control " id="exampleFormControlTextarea1"  placeholder='пишите все, что думаете' onChange={(e) => setInputs(e.target.value)}></textarea>
                                <input type="" class="btn btn-light mt-3" value="Отправить" onClick={sendmessage} />
                            </form>
                        </div>
                    </div>

                    <iframe className='p-2'  src="https://yandex.ru/map-widget/v1/?um=constructor%3A7faf9d2abfa277971360ea76124a97e91477a93bdc00385c1d8856382d2359bf&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
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





        </div>
    )
}
export default Feedback;