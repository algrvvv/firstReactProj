import './Costs.css';
import CostItem from './CostItem'
import Card from '../UI/Card';
import CostsFilter from './CostFilter';
import React, { useState } from 'react';
import CostsDiagram from './CostsDiagram';

function Costs(props) {

    const [inpYear, setInpYear] = useState('2023');

    const changeYearHandler = (inputValue) => {
        setInpYear(inputValue);
    }

    const filteredCosts = props.cost.filter((cos) => {
        return cos.date.getFullYear().toString() === inpYear;
    })

    return (
        <Card className='costs'>
            <CostsFilter onChangeYear={changeYearHandler} year={inpYear} />

            <CostsDiagram costs={filteredCosts} />

            {filteredCosts.length === 0 ? (
                <p className='no-cost-item'>В этом году расходов нет</p>
            ) : (
                filteredCosts.map(cos =>
                    <CostItem key={cos.id} date={cos.date} name={cos.name} price={cos.price} />)
            )}
            {/* всегда в подобых ситуациях писать KEY, чтобы улучшить производительность */}
        </Card>
    )
}

export default Costs;