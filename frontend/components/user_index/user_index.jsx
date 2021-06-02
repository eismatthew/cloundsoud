import React from "react";
import { Link, Redirect } from "react-router-dom";
import NavigationBarContainer from "../navigation_bar/navigation_bar_container";
import Modal from "../modal/modal";

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    if (!this.props.user) return <Redirect to="/" />;

    return (
      <>
      <NavigationBarContainer />
      <Modal />
      {/* <div className="track-player">
        <div className="track-player-details-container">
          <div className="track-player-title-container">
            <button className="track-player-play-button" onClick={this.handlePlay}>
              {this.state.playing ? "❚❚" : "▶"}
            </button>
            <div className="track-player-title">
              <span>{this.props.track.uploader}</span>
              <h1>{this.props.track.title}</h1>
            </div>
          </div>
        </div>
        <img className="track-player-art" src={window.nierAutomata}/>
      </div> */}
      <div className="content">
        <div className="content-main">
          <div className="list-container">
            <h1>{this.props.user.username}'s Page</h1>
          </div>
        </div>
            <div className='footer'>
                <section className='content-bottom'>   
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

export default UserIndex;