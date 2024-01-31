import { useState } from 'react'
import '../stylesheets/Note.css'

export default function Note({id, description, deleteNote, editNote, text, setText}) {
  const [state, setState] = useState(false)
  const [change, setChange] = useState(text)

  return (
    <div className="note">
      {state ? <textarea className='form-input' onChange={(e) => setChange(e.target.value)} value={change}></textarea> : <p className="note-description">{description}</p>}
      <button className="note-button" onClick={() => deleteNote(id)}>Borrar</button>
      {state ? <button className="note-button" onClick={() => {
        editNote(id, change)
        setState(false)
        }}>Guardar</button>: <button className="note-button" onClick={() => setState(true)}>Editar</button>}
    </div>
  )
}