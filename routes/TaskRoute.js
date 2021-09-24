const { getAllTasks, createTask, removeTask, toggleState } = require("../controllers/TaskController");

const createTasksRoutes = (app) => {
    app.get("/tasks", getAllTasks)
    app.post("/tasks/new", createTask)
    app.put('/tasks/toggle/:id', toggleState)
    app.delete('/tasks/remove/:id', removeTask)
}

module.exports = createTasksRoutes;