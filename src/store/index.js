import axios from 'axios'
import router from '../router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let api = axios.create({
  baseURL: 'https://youcankanban.herokuapp.com/api/',
  timeout: 2000,
  withCredentials: true
})
let auth = axios.create({
  baseURL: 'https://youcankanban.herokuapp.com/',
  timeout: 2000,
  withCredentials: true
})
// REGISTER ALL DATA HERE 
let state = {
  boards: [],
  activeBoard: {},
  activeLists: [],
  activeTasks: {},
  error: {},
  user: {},
  comments: []
}

let handleError = (state, err) => {//has to be mutation!
  state.error = err
}

export default new Vuex.Store({
  // ALL DATA LIVES IN THE STATE
  state,
  mutations: {
    setBoards(state, boards) { ///mutations are always setters
      state.boards = boards
    },
    setActiveBoard(state, activeBoard) {
      state.activeBoard = activeBoard
    },
    setUser(state, user) {
      state.user = user
    },
    setListTasks(state, payload) {
      //always use vue.set when adding deeply nested objects
      Vue.set(state.activeTasks, payload.listId, payload.tasks)
      // state.activeTasks[payload.listId] = payload.tasks
    },
    setActiveLists(state, activeLists) {
      state.activeLists = activeLists
    },
    setComments(state, commentData){
      Vue.set(state.comments, commentData.listId, commentData.taskId, commentData.comments)
    }
  },
  // ACTIONS ARE RESPONSIBLE FOR MANAGING ALL ASYNC REQUESTS
  actions: {
    login({commit, dispatch}, user) {
      auth.post('login', user)
        .then(res => {
          console.log(res)
          commit('setUser', res.data.data)// state.user = res.data.data || {}///??
          router.push('/boards')
        })
        .catch(handleError)
      //needs to authenticate whether this person is legit and then if not reroute to register, 
      // or invalid username or password
    },
    register({commit, dispatch}, user) {
      auth.post('register', user)
        .then(res => {
          console.log(res)
          if (res.data.error) {
            return handleError(res.data.error)
          }
          commit('setUser', res.data.data)// state.user = res.data.data || {}///?
          router.push('/boards')
        })
        .catch(handleError)
    },
    getAuth({commit, dispatch}) {
      auth('authenticate')
        .then(res => {
          commit('setUser', res.data.data)// state.user = res.data.data || {}///??
          router.push('/boards')
        })
        .catch((err => {
        }))
    },
    clearError() {
      state.error = {}
    },
    getBoards({commit, dispatch}) {
      api('boards')//boards or user boards?
        .then(res => {
          commit('setBoards', res.data.data)//was state.board = res.data.data
        })
        .catch(handleError)
    },
    getBoard({commit, dispatch}, id) {
      api('boards/' + id.boardId)
        .then(res => {
          commit('setActiveBoard', res.data.data)//was state.activeBoard = res.data.data
        })
        .catch(handleError)
    },
    createBoard({commit, dispatch}, board) {
      api.post('boards/', board) ///do we need the / after boards?
        .then(res => {
          dispatch('getBoards') //was this.getBoards()
        })
        .catch(handleError)
    },
    removeBoard({commit, dispatch}, board) {
      api.delete('boards/' + board._id)
        .then(res => {
          dispatch('getBoards')///was this.getBoards()
        })
        .catch(handleError)
    },
    getLists({commit, dispatch}, id) {
      // state.activeLists = []
      api('boards/' + id.boardId + '/lists')
        .then(res => {
          commit('setActiveLists', res.data.data)//state.activeLists = res.data.data
        })
        .catch(handleError)
    },
    createList({commit, dispatch}, list) {
      api.post('lists/', list)
        .then(res => {
          debugger
          dispatch('getLists', list.boardId)//was this.getLists(list.boardId)
        })
        .catch(handleError)
    },
    removeList({commit, dispatch}, list) {
      api.delete('lists/' + list._id)
        .then(res => {
          dispatch('getLists') //was this.getLists()
        })
        .catch(handleError)
    },
    getTasks({commit, dispatch}, data) {//is this second id necessary?
      //state.activeTasks = [] //this might need to be an array, but I think it needs to be                                       an obj...like it is in the state...the state definately                                             needs to be an obj b/c it needs to stay with the parent                                            list...., also the two ids being passed in are the board                                          and list ids...
      api('boards/' + data.boardId + '/lists/' + data.listId + '/tasks')
        .then(res => {
          console.log(data.listId)

          var payload = {listId: data.listId, tasks: res.data.data}
          debugger
          commit('setListTasks', payload)// res.data.data.forEach(task=>{
          //   state.activeTasks.push(task)
          // })
        })
        .catch(handleError)
    },
    createTask({commit, dispatch}, task) {
      api.post('tasks/', task)
        .then(res => {
          
          dispatch('getTasks', task)//was this.getTasks(task.listId)
        })
        .catch(handleError)
    },
    removeTask({commit, dispatch}, task) {
      api.delete('tasks/' + task._id)
        .then(res => {
          dispatch('getTasks', task)//was this.getTasks()
        })
        .catch(handleError)
    },
    createComment({commit, dispatch}, comment){
      api.post('comments', comment)
      .then(res => {
        dispatch('getComments', comment)
      })
      .catch(handleError)
    },
    removeComment({commit, dispatch}, comment){
      this.$store.dispatch('removeComment', comment)
    },
    getComments({commit, dispatch}, data) {
      api('boards/' + data.boardId + '/lists/' + data.listId + '/tasks/' + data.taskId + '/comments')
        .then(res => {
          commit('setComments', res.data.data)//state.activeLists = res.data.data
        })
        .catch(handleError)
    },
  }

})

