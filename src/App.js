import './App.css';
import  {Container,Button} from '@material-ui/core'
import {connect} from 'react-redux'
import  {INCREMENT,DECREMENT,RESET,MOUNT,UNMOUNT} from './store/action'
import ClassLifeCycleMethod from './components/ClassLifeCycleMethod'

function App(props) {

const {counter,mount,dispatch}=props;
 
const mountColor=mount ? 'primary' : 'default';
const  unmountColor=mount ? 'default' : 'primary'

  const handleIncrement=(count)=>{
       dispatch({
         type: INCREMENT,
         payload:{
           count
          }
       })
  }


  const handleDecrement=(count)=>{
  dispatch({
      type: DECREMENT,
      payload:{
        count
      }
    })
  }

const handleReset=()=>{
  dispatch({
    type: RESET
  })
}

const handleMount=(flag)=>{
    dispatch({
      type: MOUNT,
    })
}

const handleUnmount=(flag)=>{
  dispatch({
    type: UNMOUNT,
  })
}



  return (
    <Container>
        <h2>Welcome To the Redux </h2>
   
       <p>Counter:{counter}</p>
       <Button color="primary" variant="contained" onClick={()=>handleIncrement(counter)}>
            Increment
       </Button>
       <Button color="primary" variant="contained" onClick={handleReset}>
           RESET
       </Button>
       <Button color="secondary" variant="contained" onClick={()=>handleDecrement(counter)}>
       
         Decrement
         </Button>

         <h3>Class Life Cycle Methods</h3>



         <Button 
          color={mountColor} 
         variant="contained"
         onClick={()=>handleMount(counter)}
         >
       
          Mount
       </Button>

       <Button 
        color={unmountColor}
        variant="contained"
         onClick={()=>handleUnmount(counter)}
         >
       
       UnMount
    </Button>


    {mount  &&
         <ClassLifeCycleMethod name="hello props" />
    }
    </Container>
  );
}

const mapStateToProps=(state) => {

  const {count,mount}=state.counter;
  
    return {
      counter:count,
      mount:mount,
    }
}



export default connect(mapStateToProps)(App);
