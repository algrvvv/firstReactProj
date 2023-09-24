import './Diagram.css'
import DiagramBar from './DiagramBar';

function Diagram(props) {

    const dataSetsValues = props.dataSets.map(dataSet => dataSet.value)

    const maxMonthValue = Math.max(...dataSetsValues)


    return (
        <div className='diagram'>
            {props.dataSets.map(dataSet => (
                <DiagramBar
                    key={dataSet.label}
                    value={dataSet.value}
                    maxValue={maxMonthValue}
                    label={dataSet.label} />
            ))}
        </div>
    )
}


export default Diagram;