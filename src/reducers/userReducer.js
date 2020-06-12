import {GETALLUSERFORMAPI,DELATEUSERID,UPDATESTATE , UPDATEUSERID} from '../actions/types'
const initistate =  {
 user : [] ,
  iduser : 0
}


export default function userReducer(state = initistate, action) {

    switch (action.type) {
       case   GETALLUSERFORMAPI :
     return  { ...state ,
      user :  action.payload
     }
      
      case DELATEUSERID : 
       let  user = Object(state.user)
      return {...state ,
         user : user.filter ( el => el.id != action.payload)
      }
       case UPDATESTATE : 
       return {
         ...state ,
         iduser : action.payload
       }
       case UPDATEUSERID: 
       console.log(action.payload)
       let  userdata = Object(state.user)
       userdata.filter ( el => el.id != action.payload[5])

        console.log(userdata)
       return { ...state,
       user : [...userdata , action.payload] 
      
       }
      default:
      return state
    }
 
}