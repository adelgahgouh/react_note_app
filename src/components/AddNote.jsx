import React, { useState } from 'react'

const AddNote = ({addnotefunc}) => {
    const [notetext,setnotetext]=useState("")
    const handlechange=(event)=>{
        setnotetext(event.target.value)
    }
    const handleadd=()=>{  
        if(notetext.trim().length > 0){
        addnotefunc(notetext)
        setnotetext("")
    }
    }
  return (
    <div className='note new'>
        <textarea 
        value={notetext}
        cols={8} 
        rows={5} 
        placeholder="Type your note here ..."
        onChange={handlechange}
        />
        <div className="note-footer">
            <small></small>
            <button onClick={handleadd} className='save'  >save</button>
        </div>
    </div>
  )
}

export default AddNote