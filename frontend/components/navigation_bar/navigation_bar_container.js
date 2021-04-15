  import { connect } from 'react-redux';
import { logoutCurrentUser } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import NavigationBar from './navigation_bar';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutCurrentUser()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);