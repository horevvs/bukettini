import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainPageLogotip from './images/MainPageLogotip.png';
import { BsSearch } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { SlSocialVkontakte } from "react-icons/sl";
import { BsWhatsapp } from "react-icons/bs";
import Modal from 'react-bootstrap/Modal';
import Basket from './components/Basket';


function MainComponent() {
    const [state, setState] = useState([]);
    const [state2, setState2] = useState([]);
    const [groups, setGroups] = useState([]);
    const [Filterbasket, setFilterbasket] = useState(true);
    const [inputsmin, setInputsmin] = useState([])
    const [inputsmax, setInputsmax] = useState([])

    //   делаем запрос к апи, получаем два рута один рендерит список второй категории
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

    //   создаем массив в котором будем менять состояние для модального окна
    let massiv = Array(state.length)
    massiv.fill(false)

    const [show, setShow] = useState(massiv);
    const [show2, setShow2] = useState([]);

    const handleClose = (id) => {
        show2[id] = false
        setShow(show2)
        setShow(false)
    }
    //  открыть/ закрыть корзину для фильтрации
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
            })
    }

    // отображение рутов по группам
    function handleClick2() {
        fetch('https://flowers.birb.pro/api/items')
            .then((response) => response.json())
            .then((json) => {
                setState(json.data)
            })
    }

    // сортировка по цене
    function sortByprice(inputsmax, inputsmin) {
        fetch('https://flowers.birb.pro/api/items?minMax=' + inputsmin + '-' + inputsmax)
            .then((response) => response.json())
            .then((json) => {
                setState(json.data)
            })
        FilterdBasket()
    }

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
                <div className='bodyloader '><span className="loader">  <img src={MainPageLogotip} width='100px' height='100px' alt='' />    </span>
                </div>
            ) : (<>
                <div className="header d-flex   .d-md-none  justify-content-between">
                    <img src={MainPageLogotip} width='80px' height='80px' className='mt-3 mx-3 ' alt='' />
                    <span className='mt-4  text-center totalAmount fs-3 d-none  d-sm-block'> Bouquet of food  - лучший подарок человеку, у которого есть все! </span>

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
                    <div className='d-flex flex-wrap justify-content-around  p-3 '>

                        <button onClick={handleClick2} className='transformtext mt-2'> <span> Весь список</span></button>
                        {groups.map((item) => {
                            return (
                                <div key={item.id} className=' carts  mt-2 ' >
                                    <div className=" ">
                                        <button onClick={() => findItemsByIdAndRefreshState(item.id)} className='transformtext '> <span>   {item.name}</span></button>
                                    </div>
                                </div>
                            )
                        })}

                        <button onClick={FilterdBasket} className='transformtext mt-2'><span>Сортировать по цене</span></button>
                        <button onClick={handleClick} className='transformtext  mt-2'><span>Обратная связь</span></button>
                    </div>
                    <div className={Filterbasket ? "baskethide " : "  d-flex justify-content-center m-2 "} >
                        <input type="text" value={inputsmin} placeholder='от' class="form-control fs-5  w-25" onChange={(e) => setInputsmin(e.target.value)} />
                        <input type="text" value={inputsmax} placeholder='до' class="form-control fs-5 mx-2 w-25" onChange={(e) => setInputsmax(e.target.value)} />
                        <button type="button" onClick={() => sortByprice(inputsmax, inputsmin)} class="btn btn-dark mx-2">Сортировать</button>
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
                                            <p className="font-weight-bold"> <BsSearch className='mx-2'/> Просмотр</p>
                                        </div>
                                    </div>
                                    <Modal show={show[item.id]}>
                                        <Modal.Header className='bg-dark bg-opacity-25' onClick={() => handleClose(item.id)} closeButton>
                                            <p className='mt-2'> {item.name} </p>
                                        </Modal.Header>
                                        <img src={item.image} className="img-fluid cursor border  border-5 border-white" alt="..." />
                                        <Modal.Footer className='bg-dark bg-opacity-25'>
                                            <p> Стоимость- {item.price} рублей</p>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="footer d-flex justify-content-between">

                    <div className=" d-flex justify-content-between mx-4   ">
                        <a className='px-3 text-white  ' href="" > <SlSocialVkontakte /></a>
                        <a className='px-3 text-white ' href="" > <BsWhatsapp /></a>
                    </div>
                </div>
            </>)}
        </div>
    )
}
export default MainComponent;