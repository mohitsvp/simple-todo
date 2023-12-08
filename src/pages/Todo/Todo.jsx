import React from 'react'
import styles from "./Todo.module.css"
import TodoList from '../../components/TodoList'

const Todo = () => {
  return (
    <div className={styles.todoContainer}>
        <TodoList/>
    </div>
  )
}

export default Todo