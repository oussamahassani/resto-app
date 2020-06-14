import { ADD_USERS, DELETE_PLAT, GET_ALL_Plat,GET_ALL_CARD,DELETECARTE,GET_DATA_response_CART 
 , UPDATE_PLATE,GET_ALL_ORDER} from '../actions/types';
const initialState ={
plat : [] , 
cardt : [],
idupdateplat : "0" ,
order : []
}

export default function carteReducer(state = initialState, action) {
  switch (action.type) {
     case   GET_ALL_Plat :
    return { ...state,
     plat: action.payload
    }
      case ADD_USERS:
    return {
               ...state,
               plat : [action.payload,...state]

    }
      
          case DELETE_PLAT:
            var  myKeys = Object(state.plat)
             console.log(myKeys.filter((plat) => plat.id !== action.payload))
            return {
           ...state,
           plat:  myKeys.filter((plat) => plat.id !== action.payload)
            }
            case UPDATE_PLATE: 
            return {
              ...state,
              idupdateplat : action.payload
            }
  
         case GET_ALL_CARD:
          return { ...state,
            cardt: action.payload
           }
           case DELETECARTE :
            var  myKeys = Object(state.cardt)
            console.log(myKeys.filter((cardt) => cardt.id !== action.payload))
           return {
          ...state,
          cardt:  myKeys.filter((cardt) => cardt.id !== action.payload)
           }
            case GET_DATA_response_CART:
              var  myKeys = Object(state.cardt)
              console.log([...myKeys,action.payload])
              console.log(action.payload)
               {/* cardt : [action.payload,...state] */}
              return {
                ...state,
                cardt: [...myKeys,action.payload]
     }
     case  GET_ALL_ORDER :
       return {
         ...state ,
         order : action.payload
       }
  
  default:
  return  state;
}
}