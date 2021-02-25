import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

function ListItem(props) {
  console.log("item is here");
  const {text, deleteItem, index} = props

  return (<li > {text} <IconButton aria-label="delete"  onClick= {()=> deleteItem(index)}>
  <DeleteIcon />
</IconButton>
 
 </li>
  
  )
}

export default ListItem;
