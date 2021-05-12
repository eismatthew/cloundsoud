import React from "react";
import { Link } from "react-router-dom";
// import orbital from '../../../app/assets/audio';

class TrackItems extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      played: false,
      playing: false,
    };

    // const audioTrack = new Audio(orbital); ////////

    
    const playTrack = () => {
      audioTrack.play();
    }
    
    
    const pauseTrack = () => {
      audioTrack.pause();
    }
    
   
    const stopTrack = () => {
      audioTrack.pause();
      audioTrack.currentTime = 0;
    }



  
    this.handlePlay = this.handlePlay.bind(this);
  }

  


  

  handlePlay() {
    if (!this.state.played) {
      this.props.updateTrack({
        id: this.props.track.id,
        plays: this.props.track.plays + 1
      });
        this.setState({ played: true });
    }

      this.setState({ playing: !this.state.playing });
  }

  render() {
    return (
      <div className="trackitems-container">
        <Link className="trackitems-song-art" to={`/tracks/${this.props.track.id}`}><img src={window.bloom}/></Link>
        
      

        <div className="trackitems-info">
          <div className="trackitems-date-title">
            <div className="trackitems-title-container">
            <button className="trackitems-play-button" onClick={this.handlePlay}>
              {this.state.playing ? "Pause" : "Play"}
            </button>
            <div className="trackitems-title">
              <span><Link to={`/users/${this.props.track.artist_id}`}>{this.props.track.artist}</Link></span>
              <h1><Link to={`/tracks/${this.props.track.id}`}>{this.props.track.title}</Link></h1>
            </div>
            </div>
          </div>
          <div className="trackitems-stats">
            <span>PLAYS: {this.props.track.plays}</span>
          </div>
        </div>
      </div>

    )
  }
}
export default TrackItems;