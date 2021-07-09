import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause  } from "@fortawesome/free-solid-svg-icons";

class PlayButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alreadyPlayed: this.isCurrentPlaying(),
      playing: this.isCurrentPlaying()
    };
    
    this.handlePlay = this.handlePlay.bind(this);
  }
  

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) this.setState({ playing: this.isCurrentPlaying() });
  }

  

  handlePlay() {
    // console.log(this.state.alreadyPlayed)
    console.log(this.state.playing)


    if (!this.state.alreadyPlayed) {
      this.props.updateTrack({
        id: this.props.track.id,
        plays: this.props.track.plays + 1
      }
      )
      this.setState({ alreadyPlayed: true });
    }
    
  // console.log(this.state.alreadyPlayed)

    if (!this.isCurrentTrack()) this.props.receivePlayTrack(this.props.track); //

    // this.setState({ playing: !this.state.playing });

    if (!this.state.playing) {
        // console.log("hello")
    this.setState({ playing: true });

      this.props.playTrack();
        // if (this.props.currentTrack) 
        document.getElementById("audio").play();
      console.log(this.state)

    } else {
       this.setState({ playing: false });
     

      this.props.pauseTrack();
        // if (this.props.currentTrack) 
        document.getElementById("audio").pause();
    }
  }

  isCurrentTrack() {
    if (!this.props.currentTrack) return false;
    return this.props.currentTrack.id === this.props.track.id;
  }

  isCurrentPlaying() {
    return this.props.isPlaying && this.isCurrentTrack();
  }

  render() {

    // console.log(this.isCurrentTrack())
          // console.log(this.props.currentTrack)



    let thisTrackPlaying = this.isCurrentTrack() ? (this.state.playing && this.props.isPlaying) : false;
    let buttonClass = "button-play";
    if (this.props.size === "large") buttonClass += "-large";

    return (

      <button className={buttonClass} onClick={this.handlePlay}>
        {thisTrackPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
      </button>
    )
  }
}

export default PlayButton;