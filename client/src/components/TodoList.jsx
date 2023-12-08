import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import axiosInstance from '../api'
import TodoInput from './TodoInput';


const TodoList = () => {
    const [todos, setTodo] = useState([]);
    
    const fetchTodos = async () => {
        const allTodos = await axiosInstance.get("/");
        setTodo(allTodos.data);
    }

    const addTodo = async (title) => {
        const newTodo = {
            title : title,
            status : false
        }
    
        const response = await axiosInstance.post("/", newTodo)
        setTodo([...todos, response.data])
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    const handleToggle = async (id) => {
        const updatedTodos = todos.map((todo) => (
            todo.id === id ? {...todo, status : !todo.status} : todo
        ))

        await axiosInstance.patch(`/${id}`, {status : !todos.find((todo) => todo.id === id).status})
        setTodo(updatedTodos)
    }

    const handleDelete = async (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id)
        await axiosInstance.delete(`/${id}`)
        setTodo(updatedTodos)
    }

  return (
    <div>
        <div>
            <h1 style={{textAlign : "center"}}>TODO APP</h1>
        </div>
        <div>
            <TodoInput addTodo={addTodo}/>
        </div>
        {
            todos && todos.map((todo) => (
                <div key={todo.id} style={{backgroundColor : "whitesmoke", width : "90%", margin : "20px auto", borderRadius : "10px"}}>
                    <TodoItem todo={todo} onToggle={handleToggle} onDelete={handleDelete}/>
                </div>
            ))
        }
    </div>
  )
}

export default TodoList