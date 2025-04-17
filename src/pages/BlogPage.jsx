import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import blogData from '../data/blogs.json';  // Import the JSON data
import '../pages/BlogPage.css';  // Import the BlogPage CSS file

const BlogPage = () => {
  const { id } = useParams();  // Get the blog ID from the URL
  const navigate = useNavigate();  // For navigating programmatically
  const [blog, setBlog] = useState(null);  // State to store the blog data
  const [loading, setLoading] = useState(true);  // State to track loading status
  const [error, setError] = useState(null);  // State to store error message

  useEffect(() => {
    const fetchBlog = () => {
      try {
        setLoading(true);  // Start loading
        setError(null);  // Clear any previous errors
        const fetchedBlog = blogData.find(b => b.id === id);  // Find the blog by ID
        
        if (!fetchedBlog) {
          setError("Blog not found.");  // Set error message if blog is not found
          navigate('/');  // Redirect to home if no blog found
        } else {
          setBlog(fetchedBlog);  // Set the fetched blog data
        }
      } catch (err) {
        setError("An error occurred while fetching the blog.");  // Set error message if fetch fails
      } finally {
        setLoading(false);  // Stop loading when fetch is complete (success or failure)
      }
    };

    fetchBlog();
  }, [id, navigate]);

  return (
    <div className="blog-page">
      {loading && <p>Loading...</p>}  {/* Show loading message when still fetching */}
      
      {error && <p className="error">{error}</p>}  {/* Show error message if there's an error */}

      {blog && !loading && !error && (  // If blog data is available, render it
        <div>
          <h2>{blog.title}</h2>  {/* Display the blog title */}
          {blog.chapters.map((chapter, index) => (  // Loop through the chapters
            <div key={index}>
              <h3>{chapter.title}</h3>  {/* Display chapter title */}
              <div dangerouslySetInnerHTML={{ __html: chapter.content }} />  {/* Render chapter content */}
            </div>
          ))}
          <button onClick={() => navigate('/')}>Back to Home</button>  {/* Button to navigate back to home */}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
