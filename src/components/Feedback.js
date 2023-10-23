import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPageLogotip from '../images/MainPageLogotip.png';

import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";



function MainComponent() {


    return (
        <div className="App">
            <div className="header d-flex  justify-content-between">
                <img src={MainPageLogotip} width='80px' height='80px' className='animation' alt='' />
                <span className='forspan'> Bukettini - лучший подарок человеку, у которого есть все! </span>
            </div>

           
      dsdsd


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