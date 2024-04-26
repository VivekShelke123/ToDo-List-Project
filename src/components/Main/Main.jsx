import React, { useState } from 'react';
import "./Main.css";
import Map from '../Map/Map';

const Main = () => {

    const [task,setTask]=useState('');
    const [todo,setTodo]=useState([]);

    function handleChange(e){
        setTask(e.target.value);
    }

    function handleClick(){
        setTodo(prevalue => [...prevalue,task]);
    }

  return (
    <div className='main-class'>
      <div className='inp'>
            <input type="text" name='input' placeholder='write Anything' value={task} onChange={handleChange} />
            <button onClick={handleClick}>Add</button>
      </div>
      <div className='map'>
        <Map
        array={todo}
        setTodo={setTodo}
        setTask={setTask}
        task={task}
        />
      </div>
    </div>
  )
}

export default Main
