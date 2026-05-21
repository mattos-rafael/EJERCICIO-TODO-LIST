import { useState, useEffect } from "react"
import List from "./List"
import items from "../utils/items.json"

function Form({backgroundColor, size}) {
  const [item, setItem] = useState('')
  const [list, setList] = useState(items.items)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!item.trim()) return; 

      const timer = setTimeout(() => {
      setItem("");
    }, 20000);

    return () => clearTimeout(timer); 
  }, [item]); 

  const handleSubmit = (e) => {
    e.preventDefault()

    const validate = /\S{6,}/

   if (!validate.test(item)) {
    return alert('Must have at least 6 character')
   }


    setList((prev) => [...prev, item])
    setItem(() => '')
    setMessage('Item added')
    setTimeout(() => {
      setMessage('')
    }, 5000)
  }

  const handleDelete = (id) => {
    setList((prev) => {
      const updatedList = [...prev]
      updatedList.splice(id, 1)
      return updatedList
    })
  }
  
  const handleReset = () => {
    setList(() => items.items)
  }

  const handleClearList = () => {
    setList(() => [])
  }

  return (
    <div className="content-items">
      <div className={`form-items ${backgroundColor}`}>
        <form onSubmit={handleSubmit}>
        <input type="text" 
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Add item"/>

       
        {item? <button type="submit">Add</button> : null}
      </form>

      </div>

      <button type="button" onClick={() => handleClearList()}>Clear list</button>
      <button type="button" onClick={() => handleReset()}>Reset</button>

      {message ? <p>{message}</p> : null}

      <List list={list} handleDelete={handleDelete}/>
      
    </div>
  )
}

export default Form