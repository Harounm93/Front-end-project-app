import { useState } from 'react'
import Button from '@material-ui/core/Button';

function Input({addToList}) {
  const [text, setText ] = useState("")
   
    return (
      <div  className = "input-container">
        <input onChange = {event => setText(event.target.value) }/>
        <Button variant="contained" color="primary" onClick = {() => addToList(text)}> add to your list</Button>

      </div>
    );
  }
  
  export default Input;