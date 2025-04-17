import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import blogs from '../data/blogs.json';
import '../pages/Home.css';  // Import the Home page CSS file

const BlogList = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setBlogList(blogs);
  }, []);

  return (
    <div className="blog-list" style={{ padding: '2rem' }}>
      <h1>All Blog Posts</h1>
      {blogList.map(blog => (
        <div key={blog.id} className="blog-card" style={{ marginBottom: '1.5rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
          <h2>{blog.title}</h2>
          <p>{blog.excerpt}</p>
          <Link to={`/blog/${blog.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

