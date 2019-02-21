// This is our master reducer (RootReducer).
// This is our state.
// It imports all of the little reducers

// MasterReducer minifesto: I, the master reducer, neither know
// nor give a rip about React.
// I am like Lichtenstien, independent of your silly empires.
// I juust care about redux

import { combineReducers } from 'redux';

// We need a reducer to give to the master reducer
import StudentReducer from './StudentReducer'

console.log(StudentReducer)

// Build the root reducer with combineReducers,

const rootReducer = combineReducers({
    // the name of the state will be the prop used by react
    // the value will be the reducer file
    students: StudentReducer
})

export default rootReducer;