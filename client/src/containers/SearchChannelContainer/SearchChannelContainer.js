import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions'
import SearchChannelComponent from '../../components/SearchChannelComponent'

const mapStateToProps = state => {
    const { channels } = state.search;
    return { channels };
}

const mapDispatchToProps = dispatch => bindActionCreators( actions , dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchChannelComponent);
