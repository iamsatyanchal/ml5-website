import React from "react";
import PropTypes from "prop-types";
import showdown from "showdown";
// eslint-disable-next-line
import prettify from "showdown-prettify";

const converter = new showdown.Converter({ extensions: [`prettify`] });

const MarkdownContent = ({ content, className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }}
  />
);

MarkdownContent.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string
};

export default MarkdownContent;
