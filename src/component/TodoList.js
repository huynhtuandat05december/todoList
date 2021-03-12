import './styleTodoList.css';
import cn from 'classnames';
import React, { useState } from 'react';
import checkDone from '../img/checkdone.png'
import check from '../img/check.png'

function TodoItem(props){
    const item=props.item;
    const [isCompleted,setIsCompleted]=useState(item.complete);
    const [url,setUrl]=useState(check);
    // if(item.complete){
    //     className+=' todoListCompelete';
    // }
    function click(){
        if(url===check){
            setUrl(checkDone)
        }
        else{
            setUrl(check)
        }
        setIsCompleted(!isCompleted);
        
    }
   
    // const click = () => setIsCompleted(!isCompleted);
    return(
        <div  className={cn('todoList',{
            todoListComplete:isCompleted===true
        })}>
            <img className="img" onClick={click} src={url} alt=""></img>
            <p>{item.title}</p>
        </div>
    );

}
export default TodoItem