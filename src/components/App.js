
import React from "react";
import './../styles/App.css';
import Complete from "./Complete"

const App = () => {
  let fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]
  return (
    <div>
       <Complete fruits={fruits}/>
    </div>
  )
}

export default App
