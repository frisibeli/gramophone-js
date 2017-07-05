import React from 'react';
import PropTypes from 'prop-types'
import styles from './style.css';

const propTypes = {
    rotated: PropTypes.bool,
    onClick: PropTypes.func
};

const defaultProps = {
    rotated: false
};

const PlusButton = props => (
   <a onClick={props.onClick} className={props.rotated?"circle-button rotated":"circle-button"}><span>+</span></a>
);

PlusButton.propTypes = propTypes;

PlusButton.defaultProps = defaultProps;

export default PlusButton;
