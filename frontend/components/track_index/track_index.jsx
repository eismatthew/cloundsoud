import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBarContainer from '../navigation_bar/navigation_bar_container';
import Modal from "../modal/modal";
import PlayButtonContainer from '../playbutton/playbutton_container';

class TrackIndex extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        // // playing: false,
        // // played: false,
        // // audio: null
        // //
        // };
        

        // this.handlePlay = this.handlePlay.bind(this);
        // // 
        // this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.fetchTrack(this.props.match.params.trackId)
        .then(()=>{
        let audio = new Audio(this.props.track.audioFile);
        this.setState({ audio: audio });
    });
    // window.scrollTo(0, 0);
     }


    
//    handlePlay() {
//     if (!this.state.played) {
//       this.props.updateTrack({
//         id: this.props.track.id,
//         plays: this.props.track.plays + 1
//       });
//       this.setState({ played: true });
//     }
    
//     let currentTrackId = null;
//     if (this.props.currentTrack) currentTrackId = this.props.currentTrack.id;

//     if (currentTrackId !== this.props.track.id){
//       this.props.receivePlayTrack(this.props.track.id);
//     }

//     this.setState({ playing: !this.state.playing });
//     if (!this.state.playing) {
//       this.props.playTrack();
//       if (currentTrackId) document.getElementById("audio").play();
//     } else {
//       this.props.pauseTrack();
//       if (currentTrackId) document.getElementById("audio").pause();
//     }
//   }


//   handleEdit() {
//     this.props.openModal("edit");
//   }
    
    handleDelete() {
        this.props.deleteTrack(this.props.track.id)
        .then(this.props.history.push('/discover'));
    }



    // handleEdit() {
    //     this.props.openModal('edit');
    // }

    
    render () {
        if (!this.props.track)
        return null;

        const isArtist = this.props.currentUser && (this.props.currentUser.id === this.props.track.artist_id);

        const trackFormInputs = isArtist ? (
            <form>
                 {/* <button className="track-action-button" onClick={this.handleEdit}>Edit</button> */}
                <button className='track-form-button' onClick={this.handleDelete}>Delete Track</button>
                <button className="track-form-button" onClick={this.handleEdit}> Edit</button>
            </form>
        ) : (<form></form>
        );
       let artist = this.props.users[this.props.track.artist_id];

        return (
            //image somewhere in here?
            <>
            <NavigationBarContainer />
            <Modal />
            <div className='track-index-parent'>

                <div className='track-container'>
                    <div className='track-info-container'>
                        <div className='track-title-container'>
                            <div className='track-title-artist'>
                            <span ><Link to={`/users/${this.props.track.artist_id}`}>{this.props.track.artist}</Link></span>
                            <h2>{this.props.track.title}</h2>
                            </div>
                            {/* <button className='track-play-button' onClick={this.handlePlay}>
                                {this.state.playing ? 'pause' : 'play'}
                            </button> */}
                             <PlayButtonContainer track={this.props.track} size="large" />
                        </div>
                    </div>
                </div>

                <div className='track-content-parent'>
                    <div className='track-content'>
                        <div className='track-content-interface'>
                            <div className='track-buttons'>
                                {trackFormInputs}
                            </div>
                            <div className='track-plays'>
                                <div> PLAYS: {this.props.track.plays}</div>
                            </div>
                        </div>

                        <div className='track-info'>
                            <div className='track-artist-info'>
                            <Link className="track-artist-name" to={`/users/${this.props.track.artist_id}`}>{this.props.track.artist}</Link>
                            </div>
                        </div>

                        <div className='track-description-container'>
                            <p className='track-description'>{this.props.track.description}</p>
                        </div>

                        <div className='track-comments-container'> 
                        {/* need comments/commenterpic/name/link */}
                            
                        </div>
                    </div>
                
                    <div className='footer'>
                    <section className='track-bottom'>   
                        <span><a href="https://github.com/eismatthew">GitHub</a></span>
                        <span><a href="https://www.linkedin.com/in/matthew-eis/">LinkedIn</a></span>
                        <p>Language: English (US)</p>
                    </section>
                    </div>
                </div>
            </div>
            </>
        )
    }

}

export default TrackIndex;