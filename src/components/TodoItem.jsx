import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";

const TodoItem = ({todo, onToggle, onDelete}) => {

  return (
    <div>
        <div style={{display : 'flex', gap: '10px', justifyContent : 'space-between', width : "90%", margin : "auto", alignItems : "center"}}>
            <input type="checkbox" onChange={() => onToggle(todo.id)} checked={todo.status} style={{fontSize : "20px", height : "25px", width : "25px", color : "teal"}}/>
            <p style={{fontSize : "20px", textDecoration : todo.status ? "line-through" : "none", }} >
              {
                todo.title
              }
            </p>
            <button onClick={() => onDelete(todo.id)} style={{backgroundColor : 'transparent', border : 'none', fontSize : "20px"}}>
              <FaRegTrashAlt/>
            </button>
        </div>
    </div>
  )
}

export default TodoItem