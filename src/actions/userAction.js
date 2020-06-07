
import {GETALLUSERFORMAPI} from './types'
import Axios from 'axios';
import {URL} from './baseurl'




export  function getusersFromApi(){
    return (dispatch) => Axios.get(URL+"users")
    .then ((res) => dispatch(getAllUsers(res.data)) )
    .catch((error) => alert(error))
   }
   export const getAllUsers = (payload) => ({
    type: GETALLUSERFORMAPI,
    payload,
  });
   
   
   

   