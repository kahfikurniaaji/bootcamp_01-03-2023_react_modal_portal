// Import module yang diperlukan
import { combineReducers } from "redux";
import postsReducer from "./posts-reducer";
import usersReducer from "./users-reducer";

// Menggabungkan postsReducer dan usersReducer
export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
});
