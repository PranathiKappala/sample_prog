import React from "react"

//to create reusable functionalities
const withCounter = (WrappedComponent) =>{
  class WithAdded extends React.Component{
    state ={
      type : ""
    }
    handleChange = (e) =>{
      console.log(e.target.value);
      this.setState({type : e.target.value})
    }
    render(){
      return(
        <WrappedComponent name="pranthi" handleChange={this.handleChange} type={this.state.type}/>
      )
    }
  }
  return WithAdded
}

console.log(withCounter)

export default withCounter
