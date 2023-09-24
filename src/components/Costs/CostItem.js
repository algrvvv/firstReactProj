import './CostItem.css';
import CostDate from './CostDate';
import Card from '../UI/Card';
import React, { useState } from 'react';

function CostItem(props) {

    // const [name, SetName] = useState(props.name);

    // первая передоваемый элемент - переменная, которую будут менять
    // второй элемент - функция, с помощью которой мы сможем поменять значение первой переменной
    //а в скобках в юз стейт, как я понял (не точно), указывается изначальное значение, от чего отталкиваемся

    //благодарю этому хуку мы по факту ререндерим нужный блок, в котором есть наша переменная

    // const changeNameHandler = () => {
    //     SetName('New name')
    //     console.log(name);
    // }

    return (
        <Card className='cost-item'>
            <CostDate date={props.date} />
            <div className='cost-item__description'>
                <h2>{props.name}</h2>
                <div className='cost-item__price'>{props.price} руб</div>
            </div>
        </Card>
    )
}

export default CostItem;