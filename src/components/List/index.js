import ListItem from '../ListItem/index';

function List({ listArray, deleteItem}) {
  console.log('list is here');

  return (
    <ul>
      {listArray.map((item, index) => (
        <ListItem text={item} index={index} deleteItem={ deleteItem} />
      ))}
    </ul>
  );
}

export default List;
