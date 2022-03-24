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

const linkStyle = {
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

// data
const links = [
  {
    text: "Blog",
    url: "./blog",
    description:
      "Vowy's art blog.",
    color: "#11BB11",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>index</title>
      <h1 style={headingStyles}>
        VOWY.NET
        <br />
        <span style={headingAccentStyles}>_index </span>
      </h1>
      <p style={paragraphStyles}>
        UNDER CONSTRUCTION
      </p>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}`}
              >
                {link.text}
              </a>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
    </main>
  )
}

export default IndexPage
