import {INCREMENT,DECREMENT,RESET,MOUNT,UNMOUNT} from '../action'

let initialState={
    count: 0,
    mount:true,
}

export default function counter(state=initialState, action) {
    switch (action.type) {
      case INCREMENT:
        return {...state, count: action.payload.count+1}

      case DECREMENT:
        return {...state, count: action.payload.count-1}

      case RESET:
          return {...state,count:0};  

      case MOUNT:
        return {...state,mount:true}

      case UNMOUNT:
        return {...state,mount:false}  
        
      default:  
        return state;
    }
  }