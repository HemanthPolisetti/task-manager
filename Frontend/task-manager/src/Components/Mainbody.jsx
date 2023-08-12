import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import deleteIcon from '../assets/delete.svg'
import { useNavigate, useParams } from 'react-router-dom';


const Mainbody = ({uri}) => {
    const [taskData, setTaskData] = useState([])
    const [id,setId]=useState([])
    const navigate=useNavigate()
    const getTasks=async()=>{
       const res= await axios.get(uri);
       const data=res.data
       setTaskData(data.tasks)
    }
    const handleDelete=async(task)=>{
      console.log(task)
      await axios.delete(`${uri}/${task._id}`).then(()=>navigate('/')).catch((error)=>{console.log(error)})
    }

useEffect(() => {
  getTasks()
}, [handleDelete])
  return (
    <div className='na'>
        <div className='text-2xl italic flex justify-evenly pt-12 underline'>
            <h3>Title</h3>
            <h3>Description</h3>
        </div>
        <div className='flex-col pt-4 text-xl italic'>
        {taskData?taskData.map((task,i)=>(
          <div key={i} className='flex justify-evenly items-center pt-4' >{task.taskTitle}
          <div key={i} className='flex justify-between'>{task.taskDescription}
          <div className='flex justify-center items-center ml-8'>
          <img src={deleteIcon} alt='deleteicon' className='w-8 cursor-pointer' onClick={()=>handleDelete(task)}/>
          </div>
          </div>
          </div>
        )):null}
        </div>
    </div>
  )
}

export default Mainbody
