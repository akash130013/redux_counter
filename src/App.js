import './App.css';
import  {Container,Button} from '@material-ui/core'
import {connect} from 'react-redux'
import  {INCREMENT,DECREMENT,RESET} from './store/action'


function App(props) {

console.log(props);
  // const[counter,setCounter]=useState(0)

  const handleIncrement=(counter)=>{
       props.dispatch({
         type: INCREMENT,
         payload:{
           counter
          }
       })
  }


  const handleDecrement=(counter)=>{
  props.dispatch({
      type: DECREMENT,
      payload:{
        counter
      }
    })
  }

const handleReset=()=>{
  props.dispatch({
    type: RESET
  })
}

  return (
    <Container>
        <h2>Welcome To the Redux </h2>
   
       <p>Counter:{props.counter}</p>
       <Button color="primary" variant="contained" onClick={()=>handleIncrement(props.counter)}>
            Increment
       </Button>
       <Button color="primary" variant="contained" onClick={handleReset}>
           RESET
       </Button>
       <Button color="secondary" variant="contained" onClick={()=>handleDecrement(props.counter)}>
       
         Decrement
         </Button>
    </Container>
  );
}

const mapStateToProps=(state) => {
    return {counter:state.counter.counter}
}



export default connect(mapStateToProps)(App);
