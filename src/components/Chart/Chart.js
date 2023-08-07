import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  let itemsNum= props.items.map((is)=>is.value)
  let totalMaximum = Math.max(...itemsNum)

  return (
    <div className='chart'>
        {
            props.items.map((item,idx)=>(
                <ChartBar
                    key={idx}
                    value={item.value} 
                    label={item.label} 
                    maxValue={totalMaximum}>
                </ChartBar>
            ))
        }
    </div>
  );
};

export default Chart;
