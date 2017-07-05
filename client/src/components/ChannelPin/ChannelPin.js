import React from 'react';
import PropTypes from 'prop-types'
import styles from './style.css';

const propTypes = {
    text: PropTypes.string,
    top: PropTypes.number,
    left: PropTypes.number
};

const defaultProps = {};

const ChannelPin = props => (
    <div style={{top:props.top, left:props.left}} className="channel-pin">
        {props.text}
    </div>
);

ChannelPin.propTypes = propTypes;

ChannelPin.defaultProps = defaultProps;

export default ChannelPin;
