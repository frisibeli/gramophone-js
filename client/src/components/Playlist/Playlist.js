import React from 'react';
import PropTypes from 'prop-types'
import styles from './style.css';
import Button from '../Button'
import defaultArtwork from './img/default-artwork.png'

const propTypes = {
    onClick: PropTypes.func
};

const defaultProps = {};

const Song = props => (
    <li onClick={()=>props.playSong(props)}>
        <img src={props.artworkURL || defaultArtwork}/>
        <div className="song-title">{props.title}</div>
        <a className="remove-song" onClick={()=>props.removeSong(props)}>Remove</a>
    </li>
);

const Playlist = props => (
    <div>
        <div className="pl-controls"><h3>Playlist</h3><Button onClick={props.addSong}>+ Add Song</Button></div>
        {props.list.length ? <ul className="playlist horizontal-scroll-wrapper">
            {props.list.map((song, id) => 
                <Song {...song} id={id} key={song.SCID} {...props} />
            )}
        </ul> : <h2 className="notice">You can start adding songs to the playlist by clicking <div className="add-song-big"><Button onClick={props.addSong}>+ Add Song</Button></div></h2>
        }
    </div>
);

Playlist.propTypes = propTypes;

Playlist.defaultProps = defaultProps;

export default Playlist;
