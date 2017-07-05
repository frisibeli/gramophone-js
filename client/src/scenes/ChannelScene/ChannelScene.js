import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autocomplete from 'react-autocomplete'
import styles from './style.css';
import PlayerContainer from '../../containers/PlayerContainer';
import Button from '../../components/Button';
import Playlist from '../../components/Playlist';
import logoImg from './images/logo.png'

const propTypes = {
    fetchChannel: PropTypes.func,
    addSong: PropTypes.func
};

const defaultProps = {};

class ChannelScene extends Component {
    constructor(props) {
        super(props);
        this.searchInput = null;
        this.state = {
            value:"",
            controlsShown: false
        };
        this.updateSearchResults = this.updateSearchResults.bind(this);
        this.showAddSongDialog = this.showAddSongDialog.bind(this);
        this.closeAddSongDialog = this.closeAddSongDialog.bind(this);
    }

    componentDidMount(){
        const channelId = this.props.match.params.id;
        this.props.fetchChannel(channelId).then(()=>{
            // if(this.props.channel.playlist.length){
            //     this.props.play(this.props.channel.playlist[this.props.channel.currentSong])
            // }
        }).catch(error => {
            this.props.history.push('/not-found');
        })
    }

    showAddSongDialog(){
        this.setState({controlsShown: true})
    }

    closeAddSongDialog(){
        this.setState({controlsShown: false})
    }

    updateSearchResults(e){
        this.props.searchSong(e.target.value)
    }

    render() {
        return (
            <div>
                <div id="channel-screen" 
                    className={this.state.controlsShown? "blurred":""}>
                    {this.props.channel.fetching? "Loading..." :
                    <div>
                        <h3 className="subtitle">Welcome to</h3>
                        <h2 className="room-name">{this.props.channel.name}</h2>
                        
                        <Playlist 
                            playSong={this.props.play}
                            addSong={this.showAddSongDialog}
                            list={this.props.channel.playlist}
                            removeSong={this.props.removeSong} />
                        <div className="player-controls">
                            <PlayerContainer />
                        </div>
                    </div>
                    }
                </div>  
                {this.state.controlsShown && <div id="add-song-dialog">
                    <a onClick={this.closeAddSongDialog}>X</a>
                    <input onChange={this.updateSearchResults} />
                    <h2>Search results:</h2>
                    <div>
                        {this.props.channel.foundSongs.map(
                            song => <div key={song.SCID}>{song.title}
                                <Button onClick={()=>{this.props.addSong(song);this.closeAddSongDialog()}}>
                                    Add
                                </Button>
                            </div>
                        )}
                    </div>
                </div>}                                      
            </div>
        );
    }
}

ChannelScene.propTypes = propTypes;

ChannelScene.defaultProps = defaultProps;

export default ChannelScene;
