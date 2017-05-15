import React, {PropTypes} from 'react';
import styles from './NewPostForm.css';
import Post from '../../utils/Post'

class NewPostForm extends React.Component {
  static propTypes = {
    post: PropTypes.object
  }

  static defaultProps = {
    post: {}
  }

  constructor(props){
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e){
    e.preventDefault();
    let post = new Post(
      this.titleInput.value,
      this.authorInput.value,
      this.postContentInput.value,
      this.imgURLInput.value,
      this.keywords.value,
      this.activeSelect.value
    )
    if(this.props.edit){
      post.id = this.props.post.id;
      this.props.editPost(post);
    }else{
      this.props.onSubmit(post);
    }
  }

  render = () => (
    <form onSubmit={this.submitForm}>
      <div className="form-group">
        <label for="titleFormGroup">Post title</label>
        <input ref={ c => this.titleInput = c } defaultValue={this.props.post.title} className="form-control" id="titleFormGroup" placeholder="Title" type="text" />
      </div>

      <div className="form-group">
        <label for="authorFormGroup">Author</label>
        <input ref={ c => this.authorInput = c } defaultValue={this.props.post.author} className="form-control" id="authorFormGroup" placeholder="Author" type="text" />
      </div>

      <div className="form-group">
        <label for="contentFormGroup">Content</label>
        <textarea className="form-control" id="contentFormGroup" ref={ c => this.postContentInput = c }  defaultValue={this.props.post.content} placeholder="Type the contents of your post here..." />
      </div>

      <div className="form-group">
        <label for="keywordsFormGroup">Author</label>
        <input id="keywordsFormGroup" className="form-control" ref={ c => this.keywords = c } defaultValue={this.props.post.keywords} placeholder="Keywords" type="text" />
      </div>

      <div className="form-group">
        <label for="keywordsFormGroup">Front image URL</label>
        <input className="form-control" ref={ c => this.imgURLInput = c }  defaultValue={this.props.post.imgURL} placeholder="Image URL" type="url" />
      </div>

      <div className="form-group">
        <label for="keywordsFormGroup">Front image URL</label>
        <select className="form-control" ref={ c => this.activeSelect = c }>
          <option value={true} default>Active</option>
          <option value={false}>Inactive</option>
        </select>
      </div>

      <button>{this.props.edit ? "Edit": "Post"}</button>
    </form>
  )
}

export default NewPostForm;
