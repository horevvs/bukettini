import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, } from 'react';
import MainPageLogotip from './images/MainPageLogotip.png';

import { BsSearch } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { SlSocialVkontakte } from "react-icons/sl";
import { BsWhatsapp } from "react-icons/bs";

import Modal from 'react-bootstrap/Modal';
import catalog from "./catalog.json";
import Basket from './components/Basket';
import { useNavigate } from 'react-router-dom';

function MainComponent() {

    //  создаем хук чтобы организовать навигацию
    const navigate = useNavigate();

    const [state, setState] = useState(catalog);
    const [baskethide, setbaskethide] = useState(true);
    const [basket, setbasket] = useState([]);

    let massiv = Array(catalog.length)
    massiv.fill(false)
    const [show, setShow] = useState(massiv);
    const [show2, setShow2] = useState([]);


    const handleClose = (id) => {
        show2[id] = false
        setShow(show2)
        setShow(false)
    }

    // добавление в корзину
    const addtoBasket = (id) => {

        catalog[id].quantity++

        const Filtered = catalog.filter((el) => {
            return el.id === id;
        })

        // тимлидушка говорит как надо сделать, чтобы массив сюда падал. как в баскете примере let b = [...new Set(props.basket)]

        setbasket([...basket, ...Filtered])

        console.log(basket)
    }

    // переход с задержкой
    const handleClick = () => {
        setTimeout(() => {
            navigate('/2');
        }, 500);
    }


    // показать модальное окно
    const handleShow = (id) => {
        show2[id] = true
        setShow(show2)
    };

    // construct url and update state items
    const findItemsByIdAndRefreshState = (id) => {
        let url = '/items?group_id=' + id;
        fetch
    }

    // показать скрыть корзину
    const handleClosebasket = () => {
        return setbaskethide(!baskethide)
    };

    // удалить с корзины
    const deleteFrombasket = (id) => {
        const Filtered = basket.filter((el) => {
            return el.id !== id;
        })
        setbasket(Filtered)
    };

    // удалить 
    const deleteminus = (id) => {
        catalog[id].quantity--
        let a = basket
        for (let i = a.length; i--;) {
            if (a[i].id === id) {
                a.splice(i, 1);
                break
            }
        }
        setbasket([...a, ...[]])
    };

    // прибавить в корзине
    const deletplus = (id) => {
        catalog[id].quantity++
        const Filtered = catalog.filter((el) => {
            return el.id === id;
        })
        setbasket([...basket, ...Filtered])
    };


    return (
        <div className="App">
            <div className="header d-flex  justify-content-between">
                <img src={MainPageLogotip} width='80px' height='80px' className='animation' alt='' />
                <span className='forspan'> Bukettini - лучший подарок человеку, у которого есть все! </span>
                <div className="px-5 py-3">
                    <button onClick={handleClick} className='transformtext '><span>Обратная связь</span></button>
                </div>
                <div className='basket'>

                    <div> <SlBasket className='mx-4 my-5  ' />
                            <span className=' mx-3  '>
                            {basket.length === 0 ? (null) : (<div onClick={handleClosebasket} className='digital text-dark bg-white'>  {basket.length} </div>)}</span>
                    </div>

                    <div className={baskethide ? "baskethide" : " "}  >
                        <Basket basket={basket} handleClosebasket={handleClosebasket} deleteFrombasket={deleteFrombasket} deleteminus={deleteminus} deletplus={deletplus} />
                    </div>
                </div>
            </div>

            <div className='mainbackground   '>
                <div className='d-flex justify-content-center '>
                    <div className='d-flex  flex-wrap fustify justify-content-center'>
                        {groups.map((group) => {
                            <div className=" px-5 py-3">
                            <button onClick={ findItemsByIdAndRefreshState(group.id)} className='transformtext '> <span>{group.name}</span></button>
                        </div>
                        })}
                    </div>
                </div>

                <div className='d-flex  flex-wrap scroll justify-content-around  '>
                    {state.map((item) => {
                        return (
                            <div key={item.id} className='mb-2 carts justify-content-center' >
                                <img onClick={() => handleShow(item.id)} src={item.image} className=" cardstyle cursor  border  border-5 border-white" alt="..." />
                                {/* <h5 className="bg-dark bg-opacity-75 text-white ">{item.name}</h5> */}
                                <div className=' sas  bg-dark bg-opacity-75  d-flex flex-column  justify-content-center align-items-center '>
                                    <div className='border border-white text-white  bg-dark boxbutton text-center pt-2' onClick={() => addtoBasket(item.id)}>
                                        <p className="font-weight-bold">  <SlBasket /> Добавить в корзину</p>
                                    </div>
                                    <div className=' border border-white text-dark   bg-white boxbutton text-center mt-5 pt-2' onClick={() => handleShow(item.id)}>
                                        <p className="font-weight-bold"> <BsSearch className='mx-2' /> Просмотр</p>
                                    </div>
                                </div>
                                <Modal show={show[item.id]}>
                                    <Modal.Header className='bg-dark bg-opacity-25' onClick={() => handleClose(item.id)} closeButton>
                                    </Modal.Header>
                                    <img src={item.image} className="img-fluid cursor border  border-5 border-white" alt="..." />
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
                <div className=" d-flex justify-content-between mx-4   ">
                    <a className='px-3 text-white  ' href="https://vk.com/bukettini" > <SlSocialVkontakte /></a>
                    <a className='px-3 text-white ' href="https://wa.me/89138208610" > <BsWhatsapp /></a>
                </div>
            </div>
        </div>
    )
}
export default MainComponent;