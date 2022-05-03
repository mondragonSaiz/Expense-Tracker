import React from 'react'
import ChartBar from './ChartBar';
import './Chart.css';


export const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPointM => dataPointM.value);
    const totalMax = Math.max(...dataPointsValues);
    return <div className='chart'>
        {props.dataPoints.map(datapoint => 
        <ChartBar 
        key={datapoint.label}
        value={datapoint.value}
        maxValue={totalMax}
        label={datapoint.label}
        />)}
    </div>
}
