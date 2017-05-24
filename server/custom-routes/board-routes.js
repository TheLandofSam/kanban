let Boards = require('../models/board') //require is the node version of import
let Lists = require('../models/list')
let Tasks = require('../models/task')
let Comments = require('../models/comment')

export default {
  getAll:{
    path: '/boards/:boardId/lists/:listId/tasks/:taskId/comments',
    reqType: 'get',
    method(req, res, next){
      let action = 'Get All'
      Lists.find({boardId: req.params.boardId})
        .then(lists => {
          lists.forEach(list=>{
            Tasks.find({listId: list._id})
            .then(tasks => {
              Comments.findById({taskId: task._id})          
        })
          res.send(handleResponse(action, lists))
        })
        })
        .catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  getLists:{ 
    path: '/boards/:boardId/lists/',
    reqType: 'get',
    method(req, res, next){
      let action = 'Get Lists'
      Lists.find({boardId: req.params.boardId})
        .then(lists => {
          res.send(handleResponse(action, lists))
        })
          .catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
   getTasks:{ 
    path: '/boards/:boardId/lists/:listId/tasks/',
    reqType: 'get',
    method(req, res, next){
      let action = 'Get Tasks'
      Lists.find({boardId: req.params.boardId})
        .then(lists => {
          lists.forEach(list=>{
            Tasks.find({listId: list._id})
            .then(tasks => {
              res.send(handleResponse(action, lists))
            })
          })
        })  
        .catch(error => {
          return next(handleResponse(action, null, error))
        })
      }
    }
}




function handleResponse(action, data, error) {
    var response = {
      action: action,
      data: data
    }
    if (error) {
      response.error = error
    }
    return response
  }
