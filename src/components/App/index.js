import './App.css';
import List from '../List/index';
import Input from '../Input/index';
import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState([]);

  function addToList(item) {
    setToDo([...toDo, item]);
    console.log(`${item} added to list`);
  }

  function DeleteItem(index) {
    setToDo([...toDo.slice(0,index),...toDo.slice(index+1)]);
    console.log(` todo at position ${index} removed from list`);
  }
  console.log('app running');
  return (
    
    <div className='App'>
    <h1 className = "h1"> List Your Hobbies Below</h1>
      <Input addToList={addToList} />
      <List listArray={toDo} deleteItem = {DeleteItem}/>  
    </div>
  );
}

export default App;
