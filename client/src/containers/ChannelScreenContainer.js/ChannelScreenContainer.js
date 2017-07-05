import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ChannelScene from '../../scenes/ChannelScene'

import * as actions from './actions';
import * as playerActions from '../PlayerContainer/actions';


const mapStateToProps = state => {
    const { channel } = state;
    return { channel };
}

const mapDispatchToProps = dispatch => bindActionCreators( {...actions, ...playerActions} , dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChannelScene);
