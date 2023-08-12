import express from "express";
import Task from '../models/model.js'
const taskViewer =async(req,res)=>{
    try{
        const tasks = await Task.find();
        if(tasks){
            res.status(200).json({tasks})
        }
        else{
            res.status(404).json({message:"No tasks found"})
        }
    }
    catch(err){
        throw new Error(`Error while fetching tasks${err}`)       
    }
}

const addTask=async(req,res)=>{
    const {taskTitle,taskDescription} = req.body
    try{
        const task = new Task({
            taskTitle:taskTitle,
            taskDescription:taskDescription
        })
        await task.save()
        res.status(200).json({task})
    }
    catch(err){
        throw new Error (`Error while adding task ${err}`)
    }
}

const updateTask=async(req,res)=>{
    const {title,description}=req.body
    const id = req.params.id
    let task
    try{
        task = await Task.findByIdAndUpdate(id,{
            taskTitle:title,
            taskDescription:description
      })
      if(task){
        res.status(200).json({task})
      }
      else{
        res.status(404).json({message:"NO TASK FOUND"})
      }
    }
    catch (err){
        throw new Error(`ERROR WHILE UPDATING TASK ${err}`)
    }
}

const deleteTask=async(req,res)=>{
    const id = req.params.id;
    try{
        await Task.findByIdAndRemove(id)
        return res.status(200).json({message:"deleted successfully"});
    }
    catch(err){
        throw new Error (`Error while Deleting ${err}`)
    }
}
export {taskViewer,addTask,updateTask,deleteTask}