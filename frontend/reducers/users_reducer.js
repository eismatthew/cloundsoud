import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_TRACK } from "../actions/track_actions";
// import { RECEIVE_COMMENT } from "../actions/comment_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_TRACK:
      return Object.assign({}, state, action.track.users);
    // case RECEIVE_COMMENT:
    //   return Object.assign({}, state, { [action.comment.commenter.id]: action.comment.commenter });
    default:
      return state;
  }
}

export default usersReducer;