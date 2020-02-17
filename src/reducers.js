import { CHANGE_SEARCHFIELD } from './constants'

const initialState = {
    searchField:''
}

export const searchRobots = (state=initialState, action={} )=>{
    switch(action.type) {
        case CHANGE_SEARCHFIELD:
            return Object.assign({},state, {searchField: action.payload});
            //changes use pure functions, above does not modify, instead returns a new object
            //can also do {... state , {searchField: action.payload})}

        default:
            return state
    }
}