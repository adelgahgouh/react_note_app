import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

const Searchbar = ({searchnote}) => {
    
  return (
    <div className="search">
      <input type="text" className="searchTerm"  onChange={(e)=>searchnote(e.target.value)} 
      placeholder="Looking for which Note ?"/>
      <button  className="searchButton" >
        <AiOutlineSearch color='white' width={50} height={50}/>
     </button>
   </div>
  )
}

export default Searchbar