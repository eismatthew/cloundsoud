import { connect } from 'react-redux';
import Discover from './discover';
import { fetchAllTracks, updateTrack, deleteTrack } from '../../actions/track_actions';



const mapStateToProps = state => {
    return { 
    currentUser: state.entities.users[state.session.id],
    tracks: Object.values(state.entities.tracks)
    }
};




const mapDispatchToProps = dispatch => ({
  fetchAllTracks: () => dispatch(fetchAllTracks()),
  updateTrack: track => dispatch(updateTrack(track)),
  deleteTrack: trackId => dispatch(deleteTrack(trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);