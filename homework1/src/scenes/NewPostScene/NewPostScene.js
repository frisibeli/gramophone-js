import React from 'react';
import NewPostForm  from '../../containers/NewPostFormContainer'
import './NewPostScene.css';

class NewPostScene extends React.Component {
  static propTypes = {

  }
  constructor(props){
    super(props);
  }
  render = () => (
    <div className="container">
      <NewPostForm />
    </div>
  )
}

export default NewPostScene;
