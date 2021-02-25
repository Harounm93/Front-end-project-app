import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';


function ListItems(props) {
  console.log("item is here");
  const {text, deleteItem, index} = props


  return (<ListItem  style={{backgroundColor: "white", width: '100%',  maxWidth: 400,}}> {text} <IconButton aria-label="delete"  onClick= {()=> deleteItem(index)}>
   
             
          
  <DeleteIcon />
</IconButton>

 
 </ListItem>
  
  )
}

export default ListItems;
