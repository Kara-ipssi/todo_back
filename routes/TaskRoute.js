const { getAllTasks, createTask, removeTask } = require("../controllers/TaskController");

const createTasksRoutes = (app) => {
    app.get("/tasks", getAllTasks)
    app.post("/tasks/new", createTask)
    app.delete('/tasks/remove', removeTask)
}

module.exports = createTasksRoutes;