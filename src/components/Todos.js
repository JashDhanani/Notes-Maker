import React, { useState } from 'react'
import './Todos.css'

export default function Todos(props) {
  const [style1, setStyle1] = useState("deleteModal")
  const [style2, setStyle2] = useState("editModal")
  const [style3, setStyle3] = useState("todoBtn")
  // let popup1 = document.getElementById('deleteModal')
  // let popup2 = document.getElementById('editModal')

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [sno, setSno] = useState('')


  // const openStyle = {
  //   visibility: 'visible',
  //   top: '18%',
  //   transform: 'translate(-10%, -50%) scale(1)'
  // }

  const openPopup = (e) => {
    e.preventDefault()

    let sno;
    if (sno === 100) {

    } else {
      props.deleteNote(props.todo)
    }
    // popup1.classList.add("open-popup")
    // Object.assign(popup1.style, openStyle)
    setStyle1('setDeleteModal')
  }

  const closePopup1 = () => {
    // popup1.classList.remove("open-popup")
    setStyle1('deleteModal')
  }
  const closePopup2 = () => {
    // popup1.classList.remove("open-popup")
    setStyle2('editModal')
  }

  const editNote = (e) => {
    e.preventDefault()
    setStyle2('setEditModal')
    setStyle3('setTodoBtn')
    // console.log("edit");
    //  popup2.classList.add("open-popup2")
    // Object.assign(popup2.style, openStyle)
  }


  
  // let popup = document.getElementById('addModal')

  const updateNotes = (e)=>{
    e.preventDefault() // page will not reload
        if (!title || !description) {
            alert("Fill Something")
        }
        else {
            props.updateTodo(title, description, sno)
            setTitle('')
            setDescription('')
        }
      setStyle2('editModal')
      setStyle3('setTodoBtn')
  }

  // const closePopup = () => {
  //   popup.classList.remove("open-popup")
  // }

  const textChange1 = (e) => {
    setTitle(e.target.value)
  }
  const textChange2 = (e) => {
    setDescription(e.target.value)
  }
  const textChange3 = (e) => {
    setSno(e.target.value)
  }

  return (
    <div className='todoList'>
      <div className={style1} id='deleteModal'>
        <h4>Note Deleted Sucessfully!</h4>
        <button onClick={closePopup1}>
          <span className="material-symbols-outlined">
            close
          </span>
        </button>
      </div>
      <div className={style2} id='editModal'>
        <h3>Edit your Note here...</h3>
        <form action="">
          <div className="textField1">
            <input type="text" className='text1' value={sno} onChange={textChange3} placeholder={"Note's No."}/>
            <span></span>
            <label htmlFor="" className='editLable'>Note's No</label><br />
          </div>
          <div className="textField1">
            <input type="text" className='text1' value={title} onChange={textChange1} placeholder={"Title"}/>
            <span></span>
            <label htmlFor="" className='editLable'>Title</label><br />
          </div>
          <div className="textField1">
            <input type="text" className='text1' value={description} onChange={textChange2} placeholder={"Description"}/>
            <span></span>
            <label htmlFor="" className='editLable'>Description</label><br />
          </div>
          {/* <input type="submit" value="Add" className='addBtn'/> */}
          <button value="Add" className='addBtn' onClick={updateNotes}>Update</button>
          <button value="Close" className='addBtn' onClick={closePopup2}>Close</button>
        </form>
      </div>
      <h3>{props.todo.title}</h3>
      <p>No. : {props.todo.sno}</p>
      <p>{props.todo.description}</p>
      <div className={style3}>
        <button title='Delete' /*onClick={() => { props.deleteNote(props.todo) }}*/ onClick={openPopup}>
          <i className="material-symbols-outlined">
            delete
          </i>
        </button>
        <button title='Edit' onClick={editNote}>
          <i className="material-symbols-outlined">
            edit
          </i>
        </button>
      </div>
    </div>
  )
}
