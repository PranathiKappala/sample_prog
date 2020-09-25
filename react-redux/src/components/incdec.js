import React from "react"
import {bindActionCreators} from "redux"
import { connect } from "react-redux"
import * as action from '../redux/actions'


class Incdec extends React.Component {
 constructor(props){
   super(props);
 this.state={
   count:props.incDec.count,
   mul:1
 }
 console.log(props);
 const {dispatch} = props;
 console.log(dispatch);
 }
handleIncrement=()=>{
  this.props.increment(this.props.incDec.count)
}
handleDecrement=()=>{
  //directly without using mapStateToProps and mapDispatchToProps
  // this.props.dispatch(action.decrement(this.props.incDec.count));
  this.props.decrement(this.props.incDec.count);
}
handleMultiply=()=>{
  this.setState({mul:this.state.mul*2})
}
render(){
    return(
        <div className="container">
          <div style={{color:"black",fontSize:20,fontWeight:500}}>{this.props.incDec.count}</div><br/>
          <button onClick={this.handleIncrement}>Inc</button>
          <button onClick={this.handleDecrement}>Dec</button>
          <div style={{color:"black",fontSize:20,fontWeight:500}}>{this.state.mul}</div><br/>
          <button onClick={this.handleMultiply}>Multiply by 2</button>
        </div>
    )
  }
}
// const mapStateToProps = state => ({
//     incDec:state.countReducer
// });
// const mapDispatchToProps = dispatch => ({
//   increment: (num) => dispatch(action.increment(num)),
//   decrement: (num) => dispatch(action.decrement(num)),
// })
//
// export default connect(mapStateToProps, mapDispatchToProps)(Incdec)
 export default Incdec;
