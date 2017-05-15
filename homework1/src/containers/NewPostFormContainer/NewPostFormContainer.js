import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import NewPostForm from '../../components/NewPostForm'

const propTypes = {}

const defaultProps = {}

class NewPostFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <NewPostForm onSubmit={this.props.addPost} editPost={this.props.editPost} post={this.props.post} edit={this.props.edit} />
    )
  }
}

NewPostFormContainer.propTypes = propTypes

NewPostFormContainer.defaultProps = defaultProps

const mapStateToProps = (state, ownProps) => {
  if(!ownProps.selected) return {edit:false};
  let selectedPost = state.posts.items.filter(post => post.id == ownProps.selected)
  selectedPost.length > 0 ? selectedPost = selectedPost[0] : {};
  return { post:selectedPost, edit:true };
}

const mapDispatchToProps = dispatch => bindActionCreators( actions , dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewPostFormContainer)
