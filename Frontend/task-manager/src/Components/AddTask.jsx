import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const AddTask = ({uri}) => {
    const navigate=useNavigate()
    const [taskTitle,setTaskTitle] = useState('')
    const [taskDescription,setTaskDescription]=useState('')

    const submitHandler=async(e)=>{ 
        e.preventDefault()
        const data={
          taskTitle:taskTitle,
          taskDescription:taskDescription
        };
        await axios.post(`${uri}`,(data)).then(()=>navigate('/'));
        setTaskTitle('')
        setTaskDescription('')
    }

  return (
    <>
    <Navbar />
    <div>
    <form className='flex justify-center items-center pt-40 italic text-xl  text-cp' onSubmit={submitHandler}>
      <div className=' flex flex-col justify-center items-center shadow-2xl border-2 h-96 rounded-2xl border-cp border-opacity-10'>
    <div className='mb-20 font-bold italic'>
        <h3>Add Task</h3>
      </div>
      <div className='flex flex-col items-center p-8 -mt-14 justify-center'>
    <input placeholder='Task Title' className='mb-6 outline-none' name='taskTitle'  onChange={(e)=>setTaskTitle(e.target.value)}/>
    <input placeholder='Task Description' className='mt-6 outline-none' name='taskDescription' onChange={(e)=>setTaskDescription(e.target.value)}/>
      </div>
    <button type='submit' className='mt-5 border-2 rounded-xl p-2'>Submit</button>
    </div>
      </form>
    </div>
    </>
  )
}

export default AddTask
