function ListItem(props) {
  console.log("item is here");
  const {text, deleteItem, index} = props

  return (<li > {text} <button onClick= {()=> deleteItem(index)}> delete hobby </button>
  
 </li>
  
  )
}

export default ListItem;
