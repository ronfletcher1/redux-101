// Reducers are functions that return a piece of state
const students = [
    'Stanley',
    'Kyle',
    'Rob',
    'Ron',
    'JR',
    'Matt',
];
// All reducer functions have 2 params:
// 1. Current State
// 1b. Usually, you will want to provide a default state
// 2. Info that came from the action
export default function(state = students, action){
    if(action.type === 'ADD_STUDENT'){
        // this means i cae about this action. Update.
        let newStudents = state.slice();
        newStudents.push(action.payload)
        return newStudents;
    }else{
        return state;
    }
    
}