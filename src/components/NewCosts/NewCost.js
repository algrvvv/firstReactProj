import './NewCost.css'
import CostForm from './CostForm';
import React, { useState } from 'react';

function NewCost(props){

    const [isVisible, SetIsVisible] = useState(false);

    const SaveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.floor(Math.random() * 10-1).toString()
        }

        props.onAddCost(costData);
    }

    const inputDataHandler = () => {
        SetIsVisible(true)
    }

    const CanselDataHandler = () => {
        SetIsVisible(false)
    }

    return(
        <div className='new-cost'>
            {!isVisible && <button onClick={inputDataHandler} type="button">Добавить расход</button>}
            {isVisible && <CostForm onSaveCostData={SaveCostDataHandler} onCancel={CanselDataHandler} />}
        </div>
    )
}

export default NewCost;