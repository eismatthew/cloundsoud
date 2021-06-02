import { connect } from 'react-redux';
import { fetchAllTracks, fetchTrack, updateTrack, deleteTrack } from '../../actions/track_actions';
import TrackIndex from './track_index';
import { openModal } from '../../actions/modal_actions';
import { receivePlayTrack, playTrack, pauseTrack } from '../../actions/play_actions';

const mapStateToProps = (state, ownProps) => ({
  track: state.entities.tracks[ownProps.match.params.trackId],
  currentUser: state.entities.users[state.session.id],
  currentTrack: state.entities.tracks[state.ui.playbar.id]
});

const mapDispatchToProps = dispatch => ({
  fetchAllTracks: () => dispatch(fetchAllTracks()),
  fetchTrack: track => dispatch(fetchTrack(track)),
  deleteTrack: trackId => dispatch(deleteTrack(trackId)),
  updateTrack: track => dispatch(updateTrack(track)),
  openModal: modal => dispatch(openModal(modal)),
  receivePlayTrack: trackId => dispatch(receivePlayTrack(trackId)),
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack())
});


export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);