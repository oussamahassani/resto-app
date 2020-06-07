import {GETALLUSERFORMAPI} from '../actions/types'
const initistate =  []


export default function userReducer(state = initistate, action) {

    switch (action.type) {
       case   GETALLUSERFORMAPI :
         console.log(action.payload)
     return action.payload
      
   
      default:
      return state
    }
 
}