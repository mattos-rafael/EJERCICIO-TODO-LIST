import { useState } from "react"

function List({list, handleDelete}) {

  return (
    <>
      
      <ul className={`list-items`}>
        {list.map((item, id) => {
          return(
              <li key={id}>
                {item}
                <button type="button" onClick={() => handleDelete(id)}>Delete</button>
              </li>
          )})}
      </ul>
    </>
    
  )
}

export default List