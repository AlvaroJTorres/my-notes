import '../stylesheets/Note.css'

export default function Note({id, description, deleteNote}) {
  return (
    <div className="note">
      <p className="note-description">{description}</p>
      <button className="note-button" onClick={() => deleteNote(id)}>Borrar</button>
    </div>
  )
}