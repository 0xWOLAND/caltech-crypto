import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Base from "../components/Base";
import LiveTitle from "../components/LiveTitle";
import Article from "../components/Article";

function NotFound() {
  const {
    markdownRemark: { frontmatter: data, html: content },
  } = useStaticQuery(graphql`
    query NotFound {
      markdownRemark(frontmatter: { slug: { eq: "/404" } }) {
        frontmatter {
          lang
          seo {
            title
            description
          }
          content {
            liveTitle
            title
          }
        }
        html
      }
    }
  `);

  return (
    <Base>
      <LiveTitle liveTitle={data.content.liveTitle} loop={1} />
      <Article title={data.content.title} html={content} />
    </Base>
  );
}

export default NotFound;
