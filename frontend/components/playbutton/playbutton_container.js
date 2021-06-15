
import { connect } from 'react-redux';
import { updateTrack } from '../../actions/track_actions';
import { receivePlayTrack, playTrack, pauseTrack } from '../../actions/play_actions';
import PlayButton from './playbutton';

const mapStateToProps = state => ({
  currentTrack: state.ui.playbar.track,
  isPlaying: state.ui.playbar.isPlaying,
  users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  updateTrack: track => dispatch(updateTrack(track)),
  receivePlayTrack: track => dispatch(receivePlayTrack(track)),
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayButton);

