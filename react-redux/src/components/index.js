import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../redux/actions'


import Incdec from  "./incdec.js"


const mapStateToProps = state => ({
  incDec: state.countReducer
});

const mapDispatchToProps = dispatch => ({
  increment : bindActionCreators(userActions.increment,dispatch),
  decrement : bindActionCreators(userActions.decrement,dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Incdec);
