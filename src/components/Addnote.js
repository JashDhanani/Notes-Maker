import React, { useState } from 'react'
import './Addnote.css'

export default function Addnote(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    let popup = document.getElementById('addModal')

    const addNotes = (e) => {
        e.preventDefault() // page will not reload
        if (!title || !description) {
            alert("Fill Something")
        }
        else {
            props.addTodo(title, description)
            setTitle('')
            setDescription('')
        }

        popup.classList.add("open-popup")
    }

    const closePopup = () => {
        popup.classList.remove("open-popup")
    }

    const textChange1 = (e) => {
        setTitle(e.target.value)
    }
    const textChange2 = (e) => {
        setDescription(e.target.value)
    }

    return (
        <div className='addnoteBox'>
            <div className="addModal" id='addModal'>
                <h4>Note Added Sucessfully!</h4>
                <button onClick={closePopup}>
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </button>
            </div>
            <div className="addBox1">
                <div className="addnoteTitle">
                    <h2>Add Notes :</h2>
                </div>
                <form action="">
                    <div className="textField">
                        <input type="text" className='text' value={title} onChange={textChange1} />
                        <span></span>
                        <label htmlFor="">Title</label><br />
                    </div>
                    <div className="textField">
                        <input type="text" className='text' value={description} onChange={textChange2} />
                        <span></span>
                        <label htmlFor="">Description</label><br />
                    </div>
                    {/* <input type="submit" value="Add" className='addBtn'/> */}
                    <button value="Add" className='addBtn' onClick={addNotes}>Add</button>
                </form>
            </div>
        </div>
    )
}
