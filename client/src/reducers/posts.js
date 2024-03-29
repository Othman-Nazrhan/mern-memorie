const posts = (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case "CREATE":
      return [...posts, action.payload]
    case 'UPDATE':
      return posts.map((post) => post._id === action.payload_id ? action.payload : post)
    case 'DELETE':
      return posts.filter((post) => post._id !== action.poyload)
    default:
      return posts
  }
};
export default posts