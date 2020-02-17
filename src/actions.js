import { CHANGE_SEARCHFIELD } from './constants'

export const setSearchField =(text)=>({
    type: CHANGE_SEARCHFIELD, //action function will take
    payload:  text // data that will be sent to reducer - in this case user input
}) 