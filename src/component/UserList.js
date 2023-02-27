// Import module yang diperlukan
import React, { Component } from "react";
import { connect } from "react-redux";

// Component untuk menampilkan list user
class UserList extends Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    console.log(user.name);
    return <div className="header">{user.name}</div>;
  }
}

// Function untuk mapping state menjadi props
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.userId),
  };
};

// Export hasil mapping list user
export default connect(mapStateToProps)(UserList);
