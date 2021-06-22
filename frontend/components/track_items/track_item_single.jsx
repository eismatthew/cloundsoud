import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import PlayButtonContainer from "../playbutton/playbutton_container";

class TrackItemSingle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tile-container">
                <div className="tile-album-art">
                    <div className="tile-button-container">
                        <PlayButtonContainer track={this.props.track} size="tile" />
                    </div>
                    <Link to={`/tracks/${this.props.track.id}`}><img src={this.props.track.albumArt} /></Link>
                </div>
                <h2 className="tile-title"><Link to={`/tracks/${this.props.track.id}`}>{this.props.track.title}</Link></h2>
                <h3 className="tile-artist"><Link to={`/users/${this.props.track.artist_id}`}>{this.props.artist.username}</Link></h3>
            </div>
        )
    }
}

export default TrackItemSingle