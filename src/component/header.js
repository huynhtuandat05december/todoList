import './styleHeader.css'
import tick from '../img/tick.png';
import {useListContextUpdate} from '../context/List'


export function Header(){
    const context=useListContextUpdate();
    function onKeyUp(event){
        if(event.keyCode===13){
            let text=event.target.value;
            if(!text){
                return;
            }
            text=text.trim();
            if(!text){return;}
            context({title:text,complete:false});
            event.target.value='';
        }
    
    }
   
    return(
        <div className="header">
            <img src={tick} width={50} height={50} alt=''></img>
            <input type="text" placeholder="Add item" onKeyUp={onKeyUp}></input>
        </div>
    )
}