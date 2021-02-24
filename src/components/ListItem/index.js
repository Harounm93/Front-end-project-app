function ListItem(props) {
  console.log("item is here");
  const {text, deleteItem, index} = props

  return (<li > {text} <button onClick= {()=> deleteItem(index)}> Delete</button>
  
 </li>
  
  )
}

export default ListItem;
