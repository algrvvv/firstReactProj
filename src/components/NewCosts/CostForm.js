import React, { useState } from 'react';
import './CostForm.css'

function CostForm(props) {

    const [name, SetName] = useState('');
    const [price, SetPrice] = useState('');
    const [date, SetDate] = useState('');

    //вместо трех хуков, можно использовать 1, передав в него объект

    // const [userInput, SetUserInput] = useState({
    //     name: '',
    //     price: '',
    //     date: '',
    // })

    const nameChangeHandler = (event) => {
        SetName(event.target.value)
        // SetUserInput({
        //     ...userInput, //использовать сперд, чтобы не потерять остальные состояния, и просто перезаписать name
        //     name: event.target.value
        // })
    }

    const priceChangeHandler = (event) => {
        SetPrice(event.target.value)
        // SetUserInput({
        //     ...userInput,
        //     price: event.target.value
        // })
    }

    const dateChangeHandler = (event) => {
        SetDate(event.target.value)
        // SetUserInput({
        //     ...userInput,
        //     date: event.target.value
        // })
    }


    const submitHadler = (event) => {
        event.preventDefault(); //отменяет дефолтное поведение, в данном случае, кнопки, 
        //а именно перезагрузку страницы

        const costData = {
            name: name,
            price: price,
            date: new Date(date),
        }

        SetName('');
        SetPrice('');
        SetDate('');

        props.onSaveCostData(costData); //передаем данные из наследников в родительские элементы
    }

    return (
        <form onSubmit={submitHadler}>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label>Назавние</label>
                    <input type="text" value={name} onChange={nameChangeHandler} />
                </div>
                <div className='new-cost__control'>
                    <label>Сумма</label>
                    <input type="number" value={price} min='0.1' step='0.1' onChange={priceChangeHandler} />
                </div>
                <div className='new-cost__control'>
                    <label>Дата</label>
                    <input type="date" value={date} min='2019-01-01' step='2022-12-31' onChange={dateChangeHandler} />
                </div>
                <div className='new-cost__actions'>
                    <button type="submit">Добавить расход</button>
                    <button type="button" onClick={props.onCancel} >Отмена</button>
                </div>
            </div>
        </form>
    )
}

export default CostForm;