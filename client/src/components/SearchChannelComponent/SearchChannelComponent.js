import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'
import Button from '../Button'
import { NavLink } from 'react-router-dom';

const propTypes = {
    newChannel: PropTypes.func
}

const defaultProps = {
    channels:[]
}

class SearchChannelComponent extends React.Component{
    constructor(props, context){
        super(props, context);
    }

    componentDidMount(){
        this.props.fetchChannels();
    }

    render(){
        return (
            <div>
                <input type="text" placeholder="Search channel by name..." />
                <ul>
                    {this.props.channels.map(channel => (
                        <li className="channel-item"><NavLink to={`channel/${channel.id}`}><h2>{channel.name}</h2></NavLink></li>
                    ))}
                </ul>
            </div>
        )
    }
} 

SearchChannelComponent.propTypes = propTypes

SearchChannelComponent.defaultProps = defaultProps

export default SearchChannelComponent;
