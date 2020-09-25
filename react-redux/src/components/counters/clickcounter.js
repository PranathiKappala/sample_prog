import React from "react"
import withCounter from "../HOC/withCounter"

class ClickCounter extends React.Component{

  render(){
    return(
      <div>
      Hello {this.props.name}
      <input type="text" onChange={this.props.handleChange} value={this.props.type}/>
      </div>
    )
  }
}

export default withCounter(ClickCounter)
