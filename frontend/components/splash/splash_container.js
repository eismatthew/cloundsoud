import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import Splash from './splash';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
      currentUser: users[session.id]
    };
};

// const mapStateToProps = ({ session }) => ({
//   currentUser: session.currentUser
// });

  
const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
    openModal: modal => dispatch(openModal(modal)),
    loginDemoUser: () => dispatch(login({credentials: 'Demo_User', password: '123456'}))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Splash);
  