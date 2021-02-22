import { useState } from 'react'

function Input({addToList}) {
  const [text, setText ] = useState("")
   
    return (
      <div >
        <input onChange = {event => setText(event.target.value) }/>
        <button onClick = {() => addToList(text)}> add to your list</button>

      </div>
    );
  }
  
  export default Input;