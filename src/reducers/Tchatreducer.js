import {ON_MESSAGE} from '../actions/types'
import {ApiAiClient} from 'api-ai-javascript';

const initState = [{ text: "hello im your assistente if you need help "}];

export const messageReducer = (state = initState, action) => {
  switch (action.type) {
    case ON_MESSAGE:
        let x = state.length;
        let stat = state
        console.log(state)
        if (x>4)
        {
      stat.shift()
      stat.shift()
        }
      return [...stat, ...action.payload];
    default:
      return state;
  }
};
