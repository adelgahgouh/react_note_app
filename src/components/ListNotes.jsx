import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

const ListNotes = ({notes ,addnotefunc,deletenote}) => {
  return (
<div className="notes-list">
<AddNote addnotefunc={addnotefunc}></AddNote>
    {notes.map((note)=>{
     return <Note deletenote={deletenote} key={note.id} note={note}/>
    })}
</div>  )
}

export default ListNotes