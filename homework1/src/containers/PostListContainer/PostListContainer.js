import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import PostsList from '../../components/PostsList'

const mapStateToProps = state => {
  const { items } = state.posts
  return { posts: items }
}

const mapDispatchToProps = dispatch => bindActionCreators( actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
