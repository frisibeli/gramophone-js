import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'
import style from './PostsList.css'
import Markdown from 'react-remarkable';

const propTypes = {
	posts: PropTypes.array.isRequired,
	deletePost: PropTypes.func
}

const defaultProps = {
	posts:[],
	deletePost: (id) => {console.log(`Failed to delete ${id}`)}
}

const PostsList = props => (
	<div className="container">
	{props.posts.map(post => (
		<div key={post.id} className="row">
		<div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
			<div className="post-preview">
				<a href="post.html">
					<h2 className="post-title">
						{post.title}
					</h2>
					<h3 className="post-subtitle">
						<Markdown>{post.content}</Markdown>
					</h3>
				</a>
				<p className="post-meta">Posted by <a href="#">{post.author}</a> on {(new Date(post.created)).toLocaleDateString()}</p>
			</div>
			<Link to={`/edit/${post.id}`}>Edit</Link>
			<a href="" onClick={(e) => {e.preventDefault();props.deletePost(post.id)} }>Delete</a>
			<hr/>
		</div>
	</div>
	))}
	</div>
)

PostsList.propTypes = propTypes

PostsList.defaultProps = defaultProps

export default PostsList
