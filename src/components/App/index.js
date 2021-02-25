import './App.css';
import List from '../List/index';
import Input from '../Input/index';
import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

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

  
  const classes = useStyles();

  return (
    <div className='App'>
    <AppBar position="static">
    <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
     To-Do List
    </Typography>
      <Input addToList={addToList} />
      </Toolbar>
      </AppBar>
      <List listArray={toDo} deleteItem = {DeleteItem}/> 
    </div>
  );
}

export default App;
