import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PlayerComponent from '../../components/Player'

import * as actions from './actions'


const mapStateToProps = state => {
    const { player } = state;
    return { ...player };
}

const mapDispatchToProps = dispatch => bindActionCreators( actions , dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlayerComponent);
