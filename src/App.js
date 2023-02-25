import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Settings from './components/Settings'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Addnote from './components/Addnote';
import Readnote from './components/Readnote';
import { useState, useEffect } from 'react';

function App() {

  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem('todos'))
  }

  const deleteNote = (todo) => {
    // console.log("Not deleted", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    // localStorage.getItem('todos')
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const addTodo = (title, description) => {
    // console.log(title, description);
    let sno;
    if (todos.length === 0) {
      sno = 0
    }
    else {
      sno = todos[todos.length - 1].sno + 1
    }
    let myTodo = [...todos]
    myTodo = [...myTodo,
    {
      sno: sno,
      title: title,
      description: description
    }]
    // console.log(myTodo);
    // setTodos(...todos, myTodo)
    setTodos(myTodo)
    // console.log(todos);
  }

  const updateTodo = (title, description, sno) => {
    // let sno;
    if (todos.length === 0) {
      sno = 0
    }
    todos.map((todo) => {
      // if (todo.sno === sno) {
      //   todo.title = title
      //   todo.description = description
      // }
      return todo.sno === sno ? {...todo, title: title, description: description} : todo
    })
    // console.log(todos)
    // console.log(todos.length)

  }

  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <HashRouter>
        <Navbar />
        <div className="sideCon">
          <Sidebar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/addnotes' element={<Addnote addTodo={addTodo} />} />
            <Route path='/readnotes' element={<Readnote todos={todos} deleteNote={deleteNote} updateTodo={updateTodo} />} />
          </Routes>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
