// Import module yang diperlukan
import axios from "axios";

// Export axios
export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
