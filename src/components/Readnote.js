import React from 'react'
import './Readnote.css'
import Todos from './Todos'

export default function Readnote(props) {

  return (
    <div className='readnoteBox'>
      <h2>Your Notes : </h2>
      {props.todos.length === 0 ? "No Notes to display!" :
        props.todos.map((todo) => {
          return <Todos todo={todo} key={todo.sno} deleteNote={props.deleteNote} updateTodo={props.updateTodo}/>
        })}
    </div>
  )
}
