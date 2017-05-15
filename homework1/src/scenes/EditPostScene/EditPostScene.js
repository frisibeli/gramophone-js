import React from 'react';
import NewPostForm  from '../../containers/NewPostFormContainer'
import './EditPostScene.css';

class EditPostScene extends React.Component {
  static propTypes = {

  }
  constructor(props){
    super(props);
  }
  render = () => (
    <div className="container">
      {
        'match' in this.props ?
          <NewPostForm selected={this.props.match.params.postId} /> :
          <NewPostForm />
      }
    </div>
  )
}

export default EditPostScene;
