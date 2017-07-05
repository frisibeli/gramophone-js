import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import PlusButton from '../../components/PlusButton';
import ChannelPin from '../../components/ChannelPin';
import SearchChannelContainer from '../../containers/SearchChannelContainer';
import Button from '../../components/Button';
import logoImg from './images/logo.png'

const propTypes = {
    newChannel: PropTypes.func
};

const defaultProps = {};

class HomeScene extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            controlsShown:false
        };
        this.toggleControls = this.toggleControls.bind(this);
        this.createChannel = this.createChannel.bind(this);
        
    }

    createChannel(){
        this.props.createChannel().then(({data}) => {
            this.props.history.push(`channel/${data.id}`);
        }).catch(error => {
            console.error(error);
        });
    }   

    toggleControls(){
        this.setState({controlsShown:!this.state.controlsShown})
    }

    renderChannels(){
        const centerPoint = {
            x: window.innerWidth/2,
            y: window.innerHeight/2
        }

        const generateRandomPoint = () => {
            const R1 = 350;
            const R2 = 180;
            const theta = Math.random()*360;
            const dist = Math.sqrt(Math.random()*(Math.pow(R1,2)-Math.pow(R2,2))+Math.pow(R2,2));

            return {
                x: centerPoint.x + Math.floor(dist*Math.cos(theta)),
                y: centerPoint.y + Math.floor(dist*Math.sin(theta))
            }
        }
        
        return [1, 2, 3, 4, 5].map((num, i) => {
            let testPoint = generateRandomPoint();
            console.log(testPoint);
            return <ChannelPin key={i} top={testPoint.y} left={testPoint.x} text="Test"/>
        })
    }

    render() {
        return (
            <div>
                <div id="home-screen" className={this.state.controlsShown? "blurred":""}>
                    <img className="logo" src={logoImg} />
                    <div className="centered-title">
                        <h3>The collaborative playlist app</h3>
                        <p>Start now by creating a channel</p>
                    </div>
                </div>
                {this.state.controlsShown && <div className="dialog-box">
                    <div className="header"></div>
                    <SearchChannelContainer />
                </div>}
                <div id="home-screen-controls">
                    {this.state.controlsShown && (
                    <div>
                        <Button onClick={this.createChannel}>Create a channel</Button>
                        <Button>Search a channel</Button>
                    </div>
                    )}
                    <PlusButton onClick={this.toggleControls} rotated={this.state.controlsShown} />
                </div>
            </div>
        );
    }
}

HomeScene.propTypes = propTypes;

HomeScene.defaultProps = defaultProps;

export default HomeScene;
