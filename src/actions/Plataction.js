import { ADD_USERS, DELETE_PLAT, GET_ALL_Plat,
  GET_ALL_CARD,DELETECARTE , GET_DATA_response_CART,UPDATE_PLATE, GET_ALL_ORDER,
  } from './types';
import Axios from 'axios';
import {URL} from './baseurl'
import swal from 'sweetalert'




/* add new plat */
export function AddNewplat(name,prix,sup,image){
  return(dispatch)=>{
    if (name !=="" && prix !=="" && sup !=="")
    {
    let img  ='https://media.istockphoto.com/photos/empty-plate-on-white-picture-id184276935'
    if   (image=== '' ) 
    {
      return Axios.post(URL+'plat',{
        "name": name,
        "prix": prix,
        "sup": sup,
        "image":img
       
      })
      .then((response)=>{

      
      if( !alert("you doing great")){window.location.reload();}
  })
      .catch((error) => { alert (error)})
  }
  else if (image!=='') {
    Axios.post(URL+ 'plat',{
      "name": name,
      "prix":prix ,
      "sup": sup,
      "image":image ,
    })
        .then(response => {
          console.log(response)
          alert('succes')
          //window.location.reload(); 
        })
        .catch(error => {
          console.log(error)
          alert(error)
        })
                                  }

                                }
   else
   swal("ouups!", "your imput is empty!", "error");
  }
}
 /* quantiter change */ 
 export function quantiterchange(e , el){
   try {
    
    
   return (dispatch) => {if ( e.target.value >= 1)
    { 
   Axios.put(URL+`ListeCarte/${el.id}`,({
   "name":el.name,
   "prix":el.prix,
   "sup":el.sup,
   "quantiter" :e.target.value
   })
   )
   .then ((res) => console.log(res), setTimeout(() => {
     window.location.reload()
   }, 1000)  )
   .catch((error) => alert(error))
  }
  
  else if(e.target.value < 1)
  {
    alert("valeur non valide")
  }
   } 

  }
   catch (error) {
     console.log(error)
   }


 }







 /* fin quantiter change*/
/*Getallorderfromapi*/
 export function Getallorderfromapi(){
  return (dispatch) => Axios.get(URL+"Order")
  .then ((res) => dispatch(getAllOrder(res.data)) )
  .catch((error) => alert(error))
 }

export function getAllOrder(payload){
return ({
  type : GET_ALL_ORDER ,
  payload : payload
})

}

/* get all Plat */

export const getAllPlat = (payload) => ({
  type: GET_ALL_Plat,
  payload,
});

export function getplatFromApi() {
  return (dispatch) =>
    Axios.get(URL+'plat').then((res) =>
      dispatch(getAllPlat(res.data))
    );
}

 /* get all carte */ 
 export const getAllUsCard= (payload) => ({
  type:GET_ALL_CARD,
  payload,
  });

export function getcarteFromApi() {
  return (dispatch) =>
    Axios.get(URL+'ListeCarte').then((res) =>
      dispatch(getAllUsCard(res.data))
    );
}
/* Add plat to cart*/
export function Addplattocart(el){
  return(dispatch)=>{
      return Axios.post(URL+'ListeCarte',{
        "name": el.name,
        "prix": el.prix,
        "sup": el.sup,
        "quantiter": "1"
       
      })
      .then((response)=>{ swal({
        title: "You doing great",
        text: "You item is add",
        icon: "success",
        button: "GOOD",
      });
        dispatch(loadRespence(el))
      })
  }
}
export function loadRespence(el){
  return {
  type: GET_DATA_response_CART,
  payload: el
  }
 }
 /*update user */
 export const updateplattocart = (payload) =>  {
  return {
    type: UPDATE_PLATE,
    payload : payload
  }

 }
/* add  user */
export const addUser = (payload) => ({
  type: ADD_USERS,
  payload,
});

/*delette user */
export const  delatplatofcarte = (payload)  => (dispatch) =>{
  return   Axios.delete(URL+`plat/${payload}`)
  .then((res)=>{ dispatch(deletepalt(payload))})
   
}
export const deletepalt = (payload) => ({
  type: DELETE_PLAT,
  payload,
});

/*delate carde */
export const  delatcartcarte = (id)  => (dispatch) =>{
  return   Axios.delete(URL+`ListeCarte/${id}`)
  .then((res)=>{ dispatch(delatecart(id))})
   
}


export const delatecart =(payload) => ( {
  type: DELETECARTE,
  payload,
})
