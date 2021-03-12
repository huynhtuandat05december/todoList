import TodoList from './TodoList';
import {useListContext} from '../context/List';

export function BigList(){
    const todoItems=useListContext();
    return(
        todoItems.map((item,index)=><TodoList key={index} item={item} />)
    )
}
