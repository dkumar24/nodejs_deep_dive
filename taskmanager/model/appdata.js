const tasks=[];

const addTask = (task)=>{
    tasks.push(task);
}
const removeTask = (task)=>{
    const index = tasks.indexOf(task)
    console.log("Index",index);
    tasks.splice(index,1);
    console.log("Tasks",tasks);
   
}
const getAllTasks = ()=>
{
    return tasks;
}

export {getAllTasks,addTask,removeTask}