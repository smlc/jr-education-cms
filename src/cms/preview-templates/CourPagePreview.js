import React from "react"
import PropTypes from "prop-types"
import CourPostTemplate from "../../templates/cour-post"

const CourPostPreview = ({ entry, widgetFor }) => {
  const data = { markdownRemark: { frontmatter: entry.getIn(["data"]).toJS() } }

  return <CourPostTemplate data={data} />
}

CourPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CourPostPreview
