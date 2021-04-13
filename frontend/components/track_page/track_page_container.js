import { connect } from 'react-redux';
import { fetchAllTracks, fetchTrack, updateTrack, deleteTrack } from '../../actions/track_actions';
import TrackPage from './track_page';

const mapStateToProps = (state, ownProps) => ({
  track: state.entities.tracks[ownProps.match.params.trackId],
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  fetchAllTracks: () => dispatch(fetchAllTracks()),
  fetchTrack: track => dispatch(fetchTrack(track)),
  deleteTrack: trackId => dispatch(deleteTrack(trackId)),
  updateTrack: track => dispatch(updateTrack(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackPage);