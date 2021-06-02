import { connect } from 'react-redux';
import Discover from './discover';
import { fetchAllTracks, updateTrack, deleteTrack } from '../../actions/track_actions';
import { receivePlayTrack, playTrack, pauseTrack } from '../../actions/play_actions';


const mapStateToProps = state => {
    return { 
    currentUser: state.entities.users[state.session.id],
    tracks: Object.values(state.entities.tracks),
    isPlaying: state.ui.playbar.isPlaying,
    currentTrack: state.entities.tracks[state.ui.playbar.id]

    }
};




const mapDispatchToProps = dispatch => ({
  fetchAllTracks: () => dispatch(fetchAllTracks()),
  updateTrack: track => dispatch(updateTrack(track)),
  deleteTrack: trackId => dispatch(deleteTrack(trackId)),
  receivePlayTrack: trackId => dispatch(receivePlayTrack(trackId)),
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack())
});



export default connect(mapStateToProps, mapDispatchToProps)(Discover);