import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import HomeScene from '../../scenes/HomeScene'

import * as actions from './actions'


const mapStateToProps = state => {
    const { channels } = state;
    return { channels };
}

const mapDispatchToProps = dispatch => bindActionCreators( actions , dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScene);
