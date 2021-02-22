import {INCREMENT,DECREMENT,RESET} from '../action'

let initialState={
    counter: 0,
}

export default function counter(state=initialState, action) {
        console.log(123,state);
    switch (action.type) {
      case INCREMENT:
        return {...state, counter: action.payload.counter+1}
      case DECREMENT:
        return {...state, counter: action.payload.counter-1}
      case RESET:
          return {...state,counter:0};  
      default:  
        return {...state};
    }
  }