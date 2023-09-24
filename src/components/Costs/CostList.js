import './CostList.css'

function CostList(props) {
    //другой вариант расположения блоков CostItem

    let costContent = <p>В этом году расходов нет</p>

    if (filteredCosts.length > 0 ){

        costContent = filteredCosts.map((cos) => {
            <CostItem />
        })
        
    }
}


export default CostList;