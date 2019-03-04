import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';
class AllPost extends Component {
    //  {/* use this to check what is coming {console.log(this.props.posts)} 
    //  /We have imported the Post component inside AllPost and 
    //  used the Array.prototype.map function to loop over each 
    //  of the individual posts inside this.props.posts and 
    //  pass it down to the Post component with the key as post.id and the post itself.*/}
     
    //  {/* All that this code is doing is that it is checking the value of editing in each
    //   of the posts and if it is true then instead of rendering the Post component it is 
    //   rendering the EditComponent and passing it the post as a prop. */}
  render() {
    return (
    <div>
        <h1 className="post_heading">All Posts</h1>
            {this.props.posts.map((post) => (
                <div key={post.id}>
                {post.editing ? <EditComponent post={post} key={post.id} /> : <Post post={post}
                key={post.id} />}
                </div>
            ))}
    </div>
    );
   }
}

const mapStateToProps = (state) => {
    return{
        posts: state
    }
}

export default connect(mapStateToProps)(AllPost);