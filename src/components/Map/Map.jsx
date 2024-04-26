import React from 'react';
import "./Map.css"
import Edit from "./pencil.png";
import Del from "./eraser.png";
import Tick from "./check-circle-2.png";

const Map = (props) => {

    function handleDel(id){
        let newArray = props.array.filter((todo,index)=>{
            return index !== id;
        })
        console.log(id);
        props.setTodo(newArray);
    }

    function handleEdit(id){
        props.setTask(props.array[id]);
        props.array[id] = props.task;
    }

    function handleMap(todo, id) {
        return (
            <>
                <div className='map-class' key={id}>
                    <li>{todo}</li>
                </div>
                <button className='button1' onClick={()=>handleEdit(id)} ><img src={Edit} alt="edit" /></button>
                <button className='button1'   ><img src={Tick} alt="tick" /></button>
                <button className='button1' onClick={()=>handleDel(id)}><img src={Del} alt="del" /></button>
            </>
        )
    }

    return (
        <div>
            {props.array.map(handleMap)}
        </div>
    )
}

export default Map
