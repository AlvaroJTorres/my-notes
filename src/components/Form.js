import '../stylesheets/Form.css'

export default function Form({text, setText, saveNote}){
  return (
    <div className="form">
      <textarea className='form-input' onChange={setText} value={text} placeholder='Algo para recordar...'></textarea>
      <button className='form-submit' onClick={saveNote}>Crear</button>
    </div>
  )
}