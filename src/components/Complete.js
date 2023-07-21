import React, { useState } from 'react'

const Complete = ({fruits}) => {
    const[data,setData]=useState("");

   let modified= [...fruits].filter((element)=>{
        return element.includes(data);
    })

    function handleChange(e){
        setData(e.target.value);
    }

  return (
    <div>
        <h1>Search item</h1>
        <input type="text" value={data} onChange={handleChange}/>
        <ul>
             {
                modified.map((element,index)=>(
                    <li key={index}>
                        {element}
                    </li>
                ))
             }
        </ul>
    </div>
  )
}

export default Complete