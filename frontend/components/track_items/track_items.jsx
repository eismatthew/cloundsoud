import React from "react";
import { Link } from "react-router-dom";
// import orbital from '../../../app/assets/audio';

class TrackItems extends React.Component {
  constructor(props){
    super(props);


    let audio;
    if (this.props.track) audio = new Audio(this.props.track.audioFile);

    

    this.state = {
      played: false,
      playing: false,
      audio: audio
    };

    
   
  
    this.handlePlay = this.handlePlay.bind(this);
    this.playTrack = this.playTrack.bind(this);
    this.pauseTrack = this.pauseTrack.bind(this);
    this.stopTrack = this.stopTrack.bind(this);
  }

  
  playTrack () {
        this.state.audio.play();
  }
      
      
  pauseTrack () {
        this.state.audio.pause();
  }
      
    
  stopTrack () {
        this.state.audio.pause();
        this.state.audio.currentTime = 0;
  }

  

  // handlePlay() {
  //   // debugger
  //   if (!this.state.played) {
  //     this.props.updateTrack({
  //       id: this.props.track.id,
  //       plays: this.props.track.plays + 1
  //     });
  //       this.setState({ played: true });
  //       this.playTrack();

  //   }
  //   else
  //     this.pauseTrack();
  //     // this.setState({ played: false });

  //   this.setState({ playing: !this.state.playing });




  // }

   handlePlay() {
    if (!this.state.played) {
      this.props.updateTrack({
        id: this.props.track.id,
        plays: this.props.track.plays + 1
      });
      this.setState({ played: true });
    }
    
    let currentTrackId = null;
    if (this.props.currentTrack) currentTrackId = this.props.currentTrack.id;

    if (currentTrackId !== this.props.track.id){
      this.props.receivePlayTrack(this.props.track.id);
    }

    this.setState({ playing: !this.state.playing });
    if (!this.state.playing) {
      this.props.playTrack();
      if (currentTrackId) document.getElementById("audio").play();
    } else {
      this.props.pauseTrack();
      if (currentTrackId) document.getElementById("audio").pause();
    }
  }

  
  render() {
    // debugger
    return (
      <div className="trackitems-container">
        <Link className="trackitems-song-art" to={`/tracks/${this.props.track.id}`}><img src={this.props.track.albumArt}/></Link>
        
      

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