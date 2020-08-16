const express = require('express')

const Helper = require ('./helpers.js')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Router Up!')
})

/////////////////////////////////////////////////////
// ADD REMOVE PROJECTS
router.post('/projects', (req, res) => {
    const project = req.body
    Helper.addProject(project)
    .then(item => {
        res.status(201).json(item)
    })
    .catch('err', err => {
        res.status(500).json({error: `${err}`})
    })
})
router.get('/projects', (req, res) => {
    Helper.findProjects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({error: `${err}`})
    })
})

/////////////////////////////////////////////////////
//ADD REMOVE RESOURCES
router.post('/resources', (req, res) => {
    const resource = req.body
    Helper.addResource(resource)
    .then(item => {
        res.status(201).json(item)
    })
    .catch('err', err => {
        res.status(500).json({error: `${err}`})
    })
})
router.get('/resources', (req, res) => {
    Helper.findResources()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        res.status(500).json({error: `${err}`})
    }) 
})

/////////////////////////////////////////////////////
//ADD REMOVE TASKS
router.post('/tasks', (req, res) => {
    const task = req.body
    Helper.addTask(task)
    .then(item => {
        res.status(201).json(item)
    })
    .catch('err', err => {
        res.status(500).json({error: `${err}`})
    })
})
router.get('/tasks', (req, res) => {
    Helper.findTasks()
    .then(task => {
        res.status(200).json(task)
    })
    .catch(err => {
        res.status(500).json({error: `${err}`})
    }) 
})

module.exports = router