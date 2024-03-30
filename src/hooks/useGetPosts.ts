const fetchPosts = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'get'
    });
    return await res.json();
  } catch (error) {
    return new Error('Network response');
  }
};