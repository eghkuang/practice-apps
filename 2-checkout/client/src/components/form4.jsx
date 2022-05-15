import React from "react";

function Summary({reset, data, axiospost, form4}) {
  return(
    <div className="Summary">
      <h2>Summary</h2>
      <ul>
        {Object.keys(data).slice(1).map(function(key){
          return <li value={key}>{key}:  {data[key]}</li>
        })}
      </ul>
      <button onClick={axiospost} onClick={form4}>Purchase</button>
    </div>
  )

}

export default Summary;