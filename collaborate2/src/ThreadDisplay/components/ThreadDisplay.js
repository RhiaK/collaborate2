import React, { Component } from 'react';
import Post from '../../Post/components/Post';
import PostEditor from '../../PostEditor/components/PostEditor';


class ThreadDisplay extends Component {
constructor(props) {
    super(props);

    this.addPost = this.addPost.bind(this);
    

    this.state = {
      posts: [],
    }
  }

  addPost(newPostBody){
    const newState = Object.assign({}, this.state);
    newState.posts.push(newPostBody);
    this.props.db.push().set(newPostBody);
    this.setState(newState);
  }

render(){
	console.log(this.props.db);
	return (
	    <div>
	        {this.state.posts.map((postBody, index) => {
	          return (
	            <Post key={index} postBody={postBody} />
	          )
	        })
	      }
	      <PostEditor addPost={this.addPost} />
	    </div>
	)
}
}

export default ThreadDisplay;