const getAllTasks = (req,res) => {
    res.send('all items from the file')
}

const createTask = (req,res)=>{
    res.send('task created')
}
const getTask = (req,res)=>{
    res.send('get single task')
}
const updateTask = (req,res)=>{
    res.send('update created')
}
const deleteTask = (req,res)=>{
    res.send('delete created')
}

module.exports={
    getAllTasks, 
    createTask,
    updateTask, 
    getTask, 
    deleteTask
}