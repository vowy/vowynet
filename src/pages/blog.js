import * as React from "react"

// styles
const pageStyles = {
  backgroundColor: "#E95800",
  color: "white",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#66FF99",
}
const paragraphStyles = {
  marginBottom: 48,
}

const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const blogText = {
  color: "#66FF99",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const descriptionStyle = {
  color: "#CBCB3B",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const dateStyle = {
  color: "#fff",
  backgroundColor: "#11BB11",
  border: "1px solid #11BB11",
  fontSize: 12,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 2px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 5,
  lineHeight: 1,
}

// data
const blogs = [
  {
    text: "NEW BLOG",
    date: "3.23.2022",
    description:
      "This is the first post of my new blog on vowy.net!",
    color: "#11BB11",
  },
]

// markup
const Blog = () => {
	return (
		<main style={pageStyles}>
		<title>vowyblog</title>
		      <h1 style={headingStyles}>
        VOWY.NET
        <br />
        <span style={headingAccentStyles}>_blog </span>
      </h1>
		{blogs.map(blog => (
          <li key={blog.date} style={{ ...listItemStyles, color: blog.color }}>
            <span>
              <p
                style={dateStyle}>
                {blog.date}
                </p>
                <p style={blogText}>{blog.text}
                </p>
              <p style={descriptionStyle}>{blog.description}</p>
            </span>
          </li>))}
</main>
		)
}
export default Blog