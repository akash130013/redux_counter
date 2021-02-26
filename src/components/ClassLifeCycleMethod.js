import React, { Component } from 'react'
import {connect} from 'react-redux'

class ClassLifeCycleMethod extends Component {


    constructor(props) {
        super(props)
        console.log("=============constructor method called 1st======");
        this.state={
            num:0,
            seed:0
        }
    }

    static getDerivedStateFromProps(props,state) {
        console.log("==============get drived state from props============");
        console.log(props,state);
        return null;
    }

   componentDidMount(){
       console.log("===================component did mount called after render=====")
   }

   getSnapshotBeforeUpdate(prevProps,prevState) {
       console.log("===================get snapshot before update called==")
       console.log(prevProps,prevState)
       return null;
   }


   shouldComponentUpdate(prevProps){
       console.log("=================== shouldComponentUpdate called");
       return true;
   }

//    componentWillMount(){
//        console.log("===================componentWillMount called====this method is removed in latest version");
//    }

   

    render() {
        console.log("===========render method called===");
        return (
            <div>
                <p>Class Life Cycle Methods are goes here<strong>See Console  for more</strong></p>
            </div>
        )
    }


    componentDidUpdate(prevProps,prevState){
        console.log("===================component did update called");
    }
    
    componentWillUnmount(){
        console.log("====================componet will unmount called");
    }

    componentDidCatch(error,info){
        console.log("================component did catch called================");
    }

}


const mapStateToProps=(state)=>{

    const {count,mount}=state.counter

    return {
        count,
        mount
    }

}

export default  connect(mapStateToProps)(ClassLifeCycleMethod)
