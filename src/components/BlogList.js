import React from "react";
import { faClock, faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div>
      <h2 className="heading">{title}</h2>
      {blogs.map((blog) => (
        <div className="preview text-center" key={blog.id}>
          <Link to={`/blogs/${blog.id}`} className="link">
            <FontAwesomeIcon icon={faLightbulb} />
            <h4 className="title">{blog.title}</h4>
            <i>
              <FontAwesomeIcon icon={faClock} spin /> {blog.date}
            </i>
            <p>
              Written by<i className="author"> {blog.author}</i>
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
