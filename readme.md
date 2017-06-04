# vue-kanban-www

> The web interface for vue-kanban

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

Making the Grade

When wrapping up the kanban project its important that you make an app that is functional and easy to work with. Heres a list of the points for this project

Front-End: 30 Points

**DONE**The Front End is styled (5)
**DONE**A user Must have the ability to log in and out. (3)
**DONE**A user should not have to re-login everytime they refresh the page (2)
**DONE**From the Boards Page Users can create their own boards (3)
**DONE**From the Board Page a user can create and manage The Lists associated with the board (3)
**DONE**Tasks can be created inside any list (3)
Tasks can be moved between lists (Does not have to be drag and drop) (5)
A user can add and remove their own comments to a Task (3)
A user has the ability to remove anything they create (3)
Back-End: 10 Points

The Backend needs to be able to create and store the boards created by users (1)
**DONE**Each board can have lists (2)
**DONE**Each List can have tasks (2)
**DONE**Each task can have comments (2)
Only authenticated users currently logged in can access the api (In Production you will want to disable the free GETs) (3)
Bonus: 5 Points

Add to the front and backend the ability to have collaborators on boards
Add Sockets to the project so any collaborator gets instant feedback when users modify a board
Created username is next to comment