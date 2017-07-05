import React from 'react';
import PropTypes from 'prop-types'
import styles from './style.css';
import {CLIENT_ID} from '../../constants/soundcloud'
import ReactPlayer from 'react-player';

import playIcon from './img/play-button.png'
import pauseIcon from './img/pause.png'


const propTypes = {
    playing: PropTypes.bool,
    url: PropTypes.string
};

const defaultProps = {
    playing: false,
    url: "https://soundcloud.com/vivo-montana-brass-band/new-york"
};

const Player = props => (
    <div>
        <div className="react-player-container">
            <ReactPlayer 
                width={0} 
                height={0} 
                controls={true} 
                soundcloudConfig={{showArtwork:false, clientId:CLIENT_ID}} 
                url={props.url} 
                playing={props.playing} />
        </div>
        <a className="player-button" onClick={props.togglePlayer}>
            <img src={props.playing? pauseIcon : playIcon}/>
        </a>
    </div>
);

Player.propTypes = propTypes;

Player.defaultProps = defaultProps;

export default Player;
