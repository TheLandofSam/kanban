import axios from 'axios'
import router from '../router'

let api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 2000,
  withCredentials: true
})
let auth = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 2000,
  withCredentials: true
})
// REGISTER ALL DATA HERE 
let state = {
  boards: [],
  activeBoard: {},
  error: {},
  user: {}
}

let handleError = (err) => {
  state.error = err
}

export default {
  // ALL DATA LIVES IN THE STATE
  state,
  // ACTIONS ARE RESPONSIBLE FOR MANAGING ALL ASYNC REQUESTS
  actions: {
    login(user){
      auth.post('login', user)
      .then(res =>{
        console.log(res)
        state.user = res.data.data || {}
        router.push('/boards')
      })
        .catch(handleError)
        //needs to authenticate whether this person is legit and then if not reroute to register, 
        // or invalid username or password
    },
    register(user){
      auth.post('register', user)
      .then(res =>{
        console.log(res)
        if(res.data.error){
          return handleError(res.data.error)
        }
        state.user = res.data.data || {}
        router.push('/boards')
      })
      .catch(handleError)
    },
    getAuth(){
      auth('authenticate')
        .then(res =>{
          state.user = res.data.data || {}
          router.push('/boards')
        })
        .catch((err =>{
        }))
    },
    clearError(){
      state.error = {}
    },
    getBoards() {
      api('boards')//boards or user boards?
        .then(res => {
          state.boards = res.data.data
        })
        .catch(handleError)
    },
    getBoard(id) {
      api('boards/' + id)
        .then(res => {
          state.activeBoard = res.data.data
        })
        .catch(handleError)
    },
    createBoard(board) {
      api.post('boards/',board) ///do we need the / after boards?
        .then(res => {
          this.getBoards()
        })
        .catch(handleError)
    },
    removeBoard(board) {
      api.delete('boards/'+board._id)
        .then(res => {
          this.getBoards()
        })
        .catch(handleError)
    },
    // getLists() {
    //   api('lists')//boards or user boards?
    //     .then(res => {
    //       state.boards = res.data.data
    //     })
    //     .catch(handleError)
    // },
    getLists(id) {
      api('boards/' + id + '/lists')
        .then(res => {
          state.activeLists = res.data.data
        })
        .catch(handleError)
    },
    createList(list) {
      api.post('lists/',list) ///do we need the / after boards?
        .then(res => {
          this.getBoards()
        })
        .catch(handleError)
    },
    removeList(list) {
      api.delete('lists/'+list._id)
        .then(res => {
          this.getLists()
        })
        .catch(handleError)
    }
  }

}

