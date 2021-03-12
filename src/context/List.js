import React, {useState,useContext} from 'react';

const ListContext=React.createContext();
const ListContextUpdate=React.createContext();

export function useListContext(){
    return useContext(ListContext);

}
export function useListContextUpdate(){
    return useContext(ListContextUpdate);
}

export function List(props){
    const [todoList,setState]=useState([]);
    function add(item){
        setState(todoList.concat(item));
    }
    
    return(
        <ListContext.Provider value={todoList}>
            <ListContextUpdate.Provider value={add}>
                {props.children}
            </ListContextUpdate.Provider>
        </ListContext.Provider>
    )
}