// Import module yang diperlukan
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts, fetchPostsAndUsers } from "../redux/action/index";
import UserList from "./UserList";

// Component untuk menampilkan list posts
class PostList extends Component {
  componentDidMount() {
    // Fetch posts dan users
    this.props.fetchPostsAndUsers();
  }

  // Function untuk merender menjadi sebuah lists yang berisikan posts list dan juga user list
  renderList() {
    return this.props.posts.map((post) => (
      <div key={post.id} className="item">
        console.log(post)
        <i className="large middle aligned user icon"></i>
        <div className="content">
          <div className="description">
            <h2>{post.title}</h2>
          </div>
          <p>{post.body}</p>
          <UserList userId={post.userId} />
        </div>
      </div>
    ));
  }

  render() {
    // Jika props posts kosong return null
    if (!this.props.posts) {
      return null;
    }

    // Return hasil dari renderList jika props posts tidak kosong
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

// // Function untuk mapping state menjadi props
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts, fetchPostsAndUsers })(
  PostList
);
