import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";



const TodoInput = ({addTodo}) => {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value)
    }

  return (
    <div style={{marginTop : "10px"}}>
        <div style={{display : "flex", alignItems : "center", justifyContent : "center"}}>
            <input type="text" placeholder='Enter your item' onChange={handleChange} style={{width : "80%", padding : "10px", fontSize : "20px", height : "20px", borderRadius : "10px"}}/>
            <button onClick={() => addTodo(text)} style={{backgroundColor : "purple", color : "white", fontSize : "20px", padding : "10px", marginLeft : "0.5rem", height : "42px", width : "10%", borderRadius : "10px"}}>
                <FaPlus/>
            </button>
        </div>
    </div>
  )
}

export default TodoInput