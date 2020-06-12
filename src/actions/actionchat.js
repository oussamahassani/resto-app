import {ON_MESSAGE} from './types'
import {ApiAiClient} from 'api-ai-javascript';
const accessToken =  "ec4d6bf6c57a4164a57d97b16a30f70b";
const client = new ApiAiClient({accessToken});
let x =""
export const sendMessage = (text, sender='user') => ({
    type: ON_MESSAGE,
    payload: [{text,  sender, x:Date(Date.now()).toString().substring(15, 25)}]
  });
  export const messageMiddleware = () => next => action => {
    next(action);
    
    if(action.type === ON_MESSAGE) {
      const text = action.payload[0].text;
      
      client.textRequest(text)
        .then( onSuccess )
      
      function onSuccess(response) {
        const {result: {fulfillment}} = response;
        next(sendMessage(fulfillment.speech, 'bot' , x));
      }
    }
   };
  