import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
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
    const [state, setState] = useState([]);
    const [state2, setState2] = useState([]);
    const [groups, setGroups] = useState([]);

    const [Filterbasket, setFilterbasket] = useState(true);
    const [inputsmin, setInputsmin] = useState([])
    const [inputsmax, setInputsmax] = useState([])

    useEffect(() => {
        fetch('https://flowers.birb.pro/api/items')
            .then((response) => response.json())
            .then((json) => {
                setState(json.data);
                setState2(json.data)
            }).then(
                fetch('https://flowers.birb.pro/api/groups')
                    .then((response) => response.json())
                    .then((json) => {
                        setGroups(json.data)
                    })
            )

    }, [])




    //  создаем хук чтобы организовать навигацию
    const navigate = useNavigate();


    const [baskethide, setbaskethide] = useState(true);
    const [basket, setbasket] = useState([]);

    let massiv = Array(state.length)
    massiv.fill(false)
    const [show, setShow] = useState(massiv);
    const [show2, setShow2] = useState([]);


    const handleClose = (id) => {
        show2[id] = false
        setShow(show2)
        setShow(false)
    }
    // j откры закры корзину для фильтрации
    const FilterdBasket = () => {
        setFilterbasket(!Filterbasket)
    }

    // добавление в корзину
    const addtoBasket = (id) => {
        let a = id - 1
        state2[a].quantity++
        const Filtered = state2.filter((el) => {
            return el.id === id;
        })
        // тимлидушка говорит как надо сделать, чтобы массив сюда падал. как в баскете примере let b = [...new Set(props.basket)]
        setbasket([...basket, ...Filtered])

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

    // показать скрыть корзину
    const handleClosebasket = () => {
        return setbaskethide(!baskethide)
    };

    // удалить с корзины
    const deleteFrombasket = (id) => {
        const Filtered = basket.filter((el) => {
            return el.id !== id;
        })

        state2.forEach((el) => {
            if (el.id == id)
                el.quantity = 0
        })

        console.log(state2)
        setbasket(Filtered)
    };

    // удалить 
    const deleteminus = (id) => {
        let c = id - 1
        state2[c].quantity--
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
        let c = id - 1
        state2[c].quantity++
        const Filtered = state2.filter((el) => {
            return el.id === id;
        })
        setbasket([...basket, ...Filtered])
    };

    // отображает фильтрацию по группам
    const findItemsByIdAndRefreshState = (id) => {

        fetch('https://flowers.birb.pro/api/items?group_id=' + id)
            .then((response) => response.json())
            .then((json) => {

                setState(json.data)
                console.log(state2)
                //     let a = json.data[1].category
                //     let ac = state[id].category
                //     // console.log(a )
                //     const Filtered = state.filter((el) => {
                //         return el.category === a;
                //     })
                //  setState(Filtered)
                //     console.log(Filtered)
            })
    }

    function handleClick2() {
        fetch('https://flowers.birb.pro/api/items')
            .then((response) => response.json())
            .then((json) => {
                setState(json.data)

            })


    }

    function handleClick2() {
        fetch('https://flowers.birb.pro/api/items')
            .then((response) => response.json())
            .then((json) => {
                setState(json.data)
            })
    }

    function sortByprice(inputsmax, inputsmin) {
         fetch('https://flowers.birb.pro/api/items?minMax='+inputsmin+'-'+inputsmax)
         .then((response) => response.json())
         .then((json) => {
          console.log(json)
        })
      
    }


    return (
        <div className="App">
            <div className="header d-flex  justify-content-between">
                <img src={MainPageLogotip} width='80px' height='80px' className='animation' alt='' />
                <span className='forspan'> Bukettini - лучший подарок человеку, у которого есть все! </span>
                <div className="px-5 py-3">
                    <button onClick={handleClick} className='transformtext '><span>Обратная связь</span></button>
                    <button onClick={FilterdBasket} className='transformtext mx-5'><span>Сортировать по цене</span></button>
                    <div className={Filterbasket ? "baskethide" : " "} >

                        <label for="cheese">от</label>
                        <input type="text" value={inputsmin} onChange={(e) => setInputsmin(e.target.value)} />
                        
                        <label for="cheese">до</label>
                        <input type="text" value={inputsmax} onChange={(e) => setInputsmax(e.target.value)} />
                        <button onClick={() => sortByprice(inputsmax, inputsmin)} className=' mx-5'><span>Сортировать </span></button>
                    </div>

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

                <div className='d-flex justify-content-around  '>
                    {groups.map((item) => {
                        return (
                            <div key={item.id} className='mb-2 carts ' >
                                <div className=" px-5 py-3">
                                    <button onClick={() => findItemsByIdAndRefreshState(item.id)} className='transformtext '> <span>   {item.name}</span></button>
                                </div>
                            </div>
                        )
                    })}
                    <button onClick={handleClick2} className='transformtext mt-3 '> <span>   Весь список</span></button>
                </div>


                <div className='d-flex  flex-wrap scroll justify-content-around  '>
                    {state.map((item) => {
                        return (
                            <div key={item.id} className='mb-2 carts justify-content-center' >
                                <img onClick={() => handleShow(item.id)} src={item.image} className=" cardstyle cursor  border  border-5 border-white" alt="..." />
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