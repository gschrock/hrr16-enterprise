import { connect } from 'react-redux';
import * as actions from '../actions/index';
import LoginComponent from '../components/Login.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    // Add functions to dispatch login/logout actions
    onLoginClick: () => {
      dispatch(actions.login());
    }
  };
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    ui: state.ui
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
