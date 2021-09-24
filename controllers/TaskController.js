const fs = require("fs");

const data = require('../database/tasks.json');

const createTask = (req, res)=>{
    const {contenu} = req.body;
    const nextId = data.length > 0 ? data[data.length - 1].id + 1: 1;
    if(contenu != null){
        let newTask = {
            "id": nextId,
            "contenu": contenu,
            "done": false
        }
        data.push(newTask)
        fs.writeFileSync("./database/tasks.json", JSON.stringify(data), (error)=>{
            if(error){
                console.log(error);
            }
        })
        return res.status(200).json(data)
    }
}

const toggleState = (req, res) => {
    const id = req.params.id;
    const task = data.filter((x, key)=>{
        if(x.id == id){
            data[key].done = !data[key].done
            fs.writeFileSync("./database/tasks.json", JSON.stringify(data), (error)=>{
                if(error){
                    console.log(error);
                }
            })
            return x
        }
    })
    return res.status(200).json(data)
}

const getAllTasks = (req, res)=>{
    res.status(200).json(data)
}

const removeTask = async (req, res)=>{
    const id = req.params.id;
    data.filter((x, key)=>{
        if(x.id == id){
            data.splice(key, 1);
            console.log(key)
            fs.writeFileSync("./database/tasks.json", JSON.stringify(data), (error)=>{
                if(error){
                    console.log(error);
                }
            })
        }
    })
    return res.status(200).json(data)
}


module.exports = {createTask, getAllTasks, removeTask, toggleState}