const createTask = (req, res, next)=>{
    res.status(200).json('Task added')
}

const getAllTasks = (req, res, next)=>{
    res.status(200).json('Tasks getted')
}

const removeTask = (req, res, next)=>{
    res.status(200).json('Task removed')
}

module.exports = {createTask, getAllTasks, removeTask}