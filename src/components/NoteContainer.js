import '../stylesheets/NoteContainer.css'
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import Form from "./Form";
import Note from "./Note";

export default function NoteContainer(){
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem('Notes')) || []
  })
  const [text, setText] = useState("")

  const textHandler = (e) => {
    setText(e.target.value)
  }

  const saveNote = () => {
    if(text) {
      setNotes([...notes, {id: uuid(), description: text}])
      setText('')
    }
  }

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id)
    setNotes(filteredNotes)
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('Notes'))
    if(data) {
      setNotes(data)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('Notes', JSON.stringify(notes))
  }, [notes])

  return (
    <div className="note-container">
      <Form text={text} setText={textHandler} saveNote={saveNote}/>
      {notes.map((note) => (
        <Note key={note.id} id={note.id} description={note.description} deleteNote={deleteNote}/>
      ))} 
    </div>
  )
}