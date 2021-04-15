import React from 'react';
import Modal from "../modal/modal";
import TrackItems from '../track_items/track_items';
import NavigationBarContainer from "../navigation_bar/navigation_bar_container";

class Discover extends React.Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {
    this.props.fetchAllTracks();
  }



  render() {
    
    
    const tracks = this.props.tracks.map((track, i) => (
        <ul key={track.id}>
            <TrackItems track={track} updateTrack={this.props.updateTrack}/>
        </ul>
    ));

    return (
      <>
      <NavigationBarContainer />
      <Modal />
      <div className="discover-parent">
        <div className="discover-container">
        {this.props.currentUser ? <></> : <h1>Hear the latest tracks from artists on CloundSoud:</h1>}
        <ul>{tracks}</ul>
        </div>
            <div className="footer">
                <section className='discover-bottom'>   
                    <span><a href="https://github.com/eismatthew">GitHub</a></span>
                    <span><a href="https://www.linkedin.com/in/matthew-eis/">LinkedIn</a></span>
                    <p>Language: English (US)</p>
                </section>
            </div>
        </div>
      </>
    )
  }
}

export default Discover;