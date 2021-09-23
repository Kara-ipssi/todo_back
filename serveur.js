const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const createTasksRoutes = require("./routes/TaskRoute");

const app = express();

app.use(bodyParser.json());
app.use(cors());

createTasksRoutes(app);


const port = 4000;
app.listen(port, "localhost", () => {
    console.log("application running on port : " + port);
});