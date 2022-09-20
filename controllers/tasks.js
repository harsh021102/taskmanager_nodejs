const getAllTasks = (req,res) => {
    res.send('get all tasks ')
}

const createTask = (req,res)=>{
    res.json(req.body)
}
const getTask = (req,res)=>{
    res.json({id:req.params.id})
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