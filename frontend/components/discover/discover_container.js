import { connect } from 'react-redux';
import { fetchAllTracks, updateTrack, deleteTrack } from '../../actions/track_actions';
import Discover from './discover';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  tracks: Object.values(state.entities.tracks)
});

const mapDispatchToProps = dispatch => ({
  fetchAllTracks: () => dispatch(fetchAllTracks()),
  updateTrack: track => dispatch(updateTrack(track)),
  deleteTrack: trackId => dispatch(deleteTrack(trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);