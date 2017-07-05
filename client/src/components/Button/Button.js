import React from 'react';
import PropTypes from 'prop-types'
import styles from './style.css';

const propTypes = {
    onClick: PropTypes.func
};

const defaultProps = {};

const Button = props => (
    <div onClick={props.onClick} className="button">
        {props.children}
    </div>
);

Button.propTypes = propTypes;

Button.defaultProps = defaultProps;

export default Button;
