const db = require('../data/db-config.js')

/////////////////////////////////////////////////////
//ADD / REMOVE PROJECTS
const addProject = (project) => {
    return db('projects')
    .insert(project)
}
const findProjects = () => {
    return db('projects')
}

/////////////////////////////////////////////////////
//ADD / REMOVE RESOURCES
const addResource = (resource) => {
    return db('resources')
    .insert(resource)
}
const findResources = () => {
    return db('resources')
}

/////////////////////////////////////////////////////
//ADD / REMOVE TASKS
const addTask = (task) => {
    return db('tasks')
    .insert(task)
}
const findTasks = () => {
    return db('tasks')
}

/////////////////////////////////////////////////////
//EXPORTS
module.exports = {
    addProject,
    findProjects,
    addResource,
    findResources,
    addTask,
    findTasks
}