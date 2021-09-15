import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Image from 'gatsby-image';
import CustomReactShare from "../components/CustomShareBlock";

import { FaTwitter } from 'react-icons/fa';
import { IconContext } from "react-icons";

function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const Eachpost = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter;
  const { author } = data.markdownRemark.frontmatter;
  const { issue } = data.markdownRemark.frontmatter;
  const { category } = data.markdownRemark.frontmatter;
  const { excerpt } = data.markdownRemark.frontmatter;
  const { path } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  const url = `http://havenspec.com${path}`;
  const twitter = `http://twitter.com/${author.twitter}`;
  const currentIssue = `https://ko-fi.com/havenspec/shop`;

  var imgArray = [data.advert01.childImageSharp.fixed, data.advert02.childImageSharp.fixed, data.advert03.childImageSharp.fixed];
  var shuffledArray = shuffle(imgArray);

  return (
    <Layout bodyClass="page-home">                                 {/*TEMPLATE FOR BUILDING INDIVIDUAL STORY PAGES*/}
      <SEO title={title} />
      

      <div className="intro">                                                                {/*FEATURED*/}
        <div className="container">
          <div className="row2">
            <div className="grid-container">
              <div className="thinLeft one">
                <div>
                  <Link to="">
                    <Image className="topImageLeft"
                      fixed={data.currentCover.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                    />
                  </Link>
                </div>
                <div>
                  <Link className="buybutton button-primary" to={currentIssue}>
                    BUY CURRENT ISSUE
                  </Link>
                </div>

                <div>
                  <Link to="">
                    <Image className="advert mb-2 mt-6"
                      fixed={shuffledArray[0]}      /*This pulls the image from the md file with featured: true (current cover)*/
                    />
                  </Link>
                  <h6>
                    ADVERT
                  </h6>
                </div>
                <div>
                  <Link to="">
                    <Image className="advert mb-2"
                      fixed={shuffledArray[1]}      /*This pulls the image from the md file with featured: true (current cover)*/
                    />
                  </Link>
                  <h6>
                    ADVERT
                  </h6>
                </div>

                <div>
                  <Link to="">
                    <Image className="advert mb-2"
                      fixed={shuffledArray[2]}      /*This pulls the image from the md file with featured: true (current cover)*/
                    />
                  </Link>
                  <h6>
                    ADVERT
                  </h6>
                </div>
              </div>


              <div className="wideRight">
                <div className="col-12">

                  <h4>
                    {category}
                  </h4>
                  <hr />

                  <h1 className="pt-1">
                    {title}
                  </h1>
                  <h2>
                    By <Link to={author.idpath}> {author.id}</Link> in <Link to={issue.idpath}> {issue.id}</Link>
                  </h2>
                  <div className="content" dangerouslySetInnerHTML={{ __html: html }} />

                  <div className="share">
                    <h1>Share</h1>
                    <CustomReactShare title={title} excerpt={excerpt} url={url} />
                  </div>

                  <hr />
                  <div className="authorimagebottom">
                    <Image className=""
                      fluid={author.picture.childImageSharp.fluid}            /*Author Image called here*/
                    />
                      <a href={twitter}>
                        <IconContext.Provider value={{ className:"", color: "", size: ".7em", verticalAlign: "sub", title:"social media icons"}}>
                          <FaTwitter />
                        </IconContext.Provider>
                      </a>
                  </div>

                    <h1 className="biotitle"><Link to={author.idpath}> {author.id}</Link></h1>
                    <p>{author.bio}</p>
                    <p>{author.stories.map((data, index) => {
                      return <li key={`content_item_${index}`}>{data.item}</li>
                      })}
                    </p> 
                    <hr className="mb-2" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    currentCover: file(relativePath: {eq: "CurrentCover.jpg"}) {
      id
      childImageSharp {
        fixed(width:280) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    advert01: file(relativePath: {eq: "advertisement01.jpg"}) {
      id
      childImageSharp {
        fixed(width:280) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    advert02: file(relativePath: {eq: "advertisement02.jpg"}) {
      id
      childImageSharp {
        fixed(width:280) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    advert03: file(relativePath: {eq: "advertisement03.jpg"}) {
      id
      childImageSharp {
        fixed(width:280) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    advertLong: file(relativePath: {eq: "longadvertisement01.jpg"}) {
      id
      childImageSharp {
        fixed(height:60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        author {
          id
          idpath
          bio
          twitter
          stories {
            storytitle
          }
          picture {
            childImageSharp {
              fixed(width: 200) {                                           #This changed the post picture sizes on the front page (originally 75)
                ...GatsbyImageSharpFixed 
              }
              fluid(maxWidth: 200, maxHeight: 200) {                                        #This changed the post picture sizes on the front page (originally 75)
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        issue {
          id
          idpath
        }
        category
      }
      html
    }
  }
`;

export default Eachpost;
