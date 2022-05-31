import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
 
const Note = ({note,deletenote}) => {
  
  return (
    <div className='note'>
        <span>{note.text}</span>
        <div className="note-footer">
            <small>{note.date}</small>
            <AiFillDelete width={50} height={50} cursor="pointer" onClick={()=>deletenote(note.id)}></AiFillDelete>
        </div>
    </div>
  )
}

export default Note