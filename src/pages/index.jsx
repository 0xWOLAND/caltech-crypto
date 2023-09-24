import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Base from "../components/Base";
import LiveTitle from "../components/LiveTitle";
import ContactIcons from "../components/Contact";
import Article from "../components/Article";

function Home() {
  const {
    markdownRemark: { frontmatter: data, html: content },
  } = useStaticQuery(graphql`
    query Home {
      file(relativePath: { eq: "image.png" }) {
        childImageSharp {
          fixed(width: 1200, height: 630) {
            src
          }
        }
      }
      markdownRemark(frontmatter: { slug: { eq: "/" } }) {
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
    <>
      <Base>
        <LiveTitle liveTitle={data.content.liveTitle} loop={Infinity} />
        <Article title={data.content.title} html={content} />
        <ContactIcons />
      </Base>
    </>
  );
}

export default Home;
