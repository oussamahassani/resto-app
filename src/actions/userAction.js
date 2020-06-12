
import {GETALLUSERFORMAPI , DELATEUSERID , UPDATESTATE , UPDATEUSERID} from './types'
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
   
   
   export const  updatestate = (id) => ({
     type: UPDATESTATE ,
     payload : id
   })
   export function deleteUser(id){
    return (dispatch) => Axios.delete(URL+`users/${id}`)
    .then ((res) => dispatch(delatUserid(id)) )
    .catch((error) => alert(error))

   }

   export const delatUserid = (id) =>({ 
     type : DELATEUSERID,
     payload :id
   })

   export function Adduser(){}

   export function updatedate(first_name,last_name,email,password,image,id){
    return (dispatch) => 
    Axios.put(URL+`users/${id}`, ({
      first_name:first_name,
      last_name : last_name,
      email:email,
      password :password,
      image:image

    }))
    .then ((res) => dispatch(updateUserid(first_name,last_name,email,password,image,id)) )
    .catch((error) => alert(error))
  
   }

   export const updateUserid = (first_name,last_name,email,password,image,id) =>({ 
  type : UPDATEUSERID,
  payload :[first_name,last_name,email,password,image,id]
})