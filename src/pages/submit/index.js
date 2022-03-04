import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Helmet from 'react-helmet';
import Image from "gatsby-image";

import { Formik, Form, Field, useFormik } from 'formik';
import * as Yup from 'yup';

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

const Submit = (props) => {
  const data = props.data;
  const currentIssue = `https://ko-fi.com/havenspec/shop`;
  
{/*
    const formik = useFormik({
    initialValues: {
      Name: '',
      Email: '',
      Title: '',
      WordCount: '',
      Type: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
*/}

  var imgArray = [data.advert01.childImageSharp.fixed, data.advert02.childImageSharp.fixed, data.advert03.childImageSharp.fixed];
  var shuffledArray = shuffle(imgArray);

  return (
    <Layout bodyClass="page-home">
      <SEO title="Submit" />
      <Helmet>
        <script src="https://www.cognitoforms.com/f/iframe.js" />
        <meta
          name="description"
          content="Submit page of Haven Spec"
        />
      </Helmet>

      <div className="intro">
        <div className="container">
          <div className="row2">
            <div className="grid-container">
              <div className="thinLeft one">
                <div>
                  <a href={currentIssue}>
                    <Image className="topImageLeft"
                      fixed={data.currentCover.childImageSharp.fixed}
                    />
                  </a>
                    <div className="text-center">
                      <a className="buybutton button-primary" href={currentIssue}>
                        BUY CURRENT ISSUE
                      </a>
                    </div>
                  </div>
                  <div className="justify-content-center">

                  <Link to="/subscribe">
                      <Image className="advert mb-2 mt-6"
                        fixed={shuffledArray[0]}
                      />
                    </Link>
                </div>
                <h6>
                  ADVERT
                </h6>
                <div>
                <Link to="/subscribe">
                      <Image className="advert mb-2"
                        fixed={shuffledArray[1]}
                      />
                    </Link>
                </div>
                <h6>
                  ADVERT
                </h6>
                <div>
                <Link to="/subscribe">
                      <Image className="advert mb-2"
                        fixed={shuffledArray[2]}
                      />
                  </Link>
                </div>
                <h6>
                  ADVERT
                </h6>
                </div>



              <div className="wideRight">
                <div className="col-12">
                  <h4>
                    SUBMIT
                  </h4>
                  <hr />
                  </div>
                  <div className="pt-2">
                  <Link to="/subscribe">
                      <Image className="advertLong"
                        fixed={data.advertLong.childImageSharp.fixed}
                      />
                    </Link>
                  </div>                

            <h1 className="pt-1 pb-1">
              Submission Windows
            </h1>
            <div className="grid-container">
            <div className="subWindows">
              <h5>General submission window</h5>
                  <li className="listWindow">February 01-28</li>  
                  <li className="listWindow">April 01-30</li>  
                  <li className="listWindow">June 01-30</li>  
                  <li className="listWindow">August 01-31</li>  
                  <li className="listWindow">October 01-31</li>  
                  <li className="listWindow">December 01-31</li>  
              </div>
              <div className="subWindows">
              <h5>Limited demographic window</h5>
                  <li className="listWindow">January 01-31</li>  
                  <li className="listWindow">March 01-31</li>  
                  <li className="listWindow">May 01-31</li>  
                  <li className="listWindow">July 01-31</li>  
                  <li className="listWindow">September 01-30</li>  
                  <li className="listWindow">November 01-30</li>  
              </div>
            </div>
            <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet odio eleifend, condimentum tortor ac, venenatis ante. In ut ultricies libero. Suspendisse 
                  malesuada convallis sem non auctor. Sed at interdum urna, sed ultrices ante. Quisque odio lorem, fermentum et mauris eget, pretium facilisis turpis. Aliquam 
                  vitae dui sem. Vestibulum non vehicula velit. Suspendisse libero dui, bibendum vitae congue ac, malesuada ut diam. Aliquam quam ante, semper quis ullamcorper nec, 
                  sagittis in nulla. Fusce nec lectus nisl.
                  </p>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet odio eleifend, condimentum tortor ac, venenatis ante. In ut ultricies libero. Suspendisse 
                  malesuada convallis sem non auctor. Sed at interdum urna, sed ultrices ante. Quisque odio lorem, fermentum et mauris eget, pretium facilisis turpis. Aliquam 
                  vitae dui sem. Vestibulum non vehicula velit. Suspendisse libero dui, bibendum vitae congue ac, malesuada ut diam. Aliquam quam ante, semper quis ullamcorper nec, 
                  sagittis in nulla. Fusce nec lectus nisl.
                  </p>
            <hr />
            <h1 className="pt-1 pb-1">
              Guidelines for Fiction
            </h1>
            <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet odio eleifend, condimentum tortor ac, venenatis ante. In ut ultricies libero. Suspendisse 
                  malesuada convallis sem non auctor. Sed at interdum urna, sed ultrices ante. Quisque odio lorem, fermentum et mauris eget, pretium facilisis turpis. Aliquam 
                  vitae dui sem. Vestibulum non vehicula velit. Suspendisse libero dui, bibendum vitae congue ac, malesuada ut diam. Aliquam quam ante, semper quis ullamcorper nec, 
                  sagittis in nulla. Fusce nec lectus nisl.
                  </p>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet odio eleifend, condimentum tortor ac, venenatis ante. In ut ultricies libero. Suspendisse 
                  malesuada convallis sem non auctor. Sed at interdum urna, sed ultrices ante. Quisque odio lorem, fermentum et mauris eget, pretium facilisis turpis. Aliquam 
                  vitae dui sem.
                  </p>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet odio eleifend, condimentum tortor ac, venenatis ante. In ut ultricies libero. Suspendisse 
                  malesuada convallis sem non auctor. Sed at interdum urna, sed ultrices ante. Quisque odio lorem, fermentum et mauris eget, pretium facilisis turpis. Aliquam 
                  vitae dui sem. Vestibulum non vehicula velit. Suspendisse libero dui, bibendum vitae congue ac, malesuada ut diam. Aliquam quam ante, semper quis ullamcorper nec, 
                  sagittis in nulla. Fusce nec lectus nisl.
                  </p>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet odio eleifend, condimentum tortor ac, venenatis ante. 
                  </p>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet odio eleifend, condimentum tortor ac, venenatis ante. In ut ultricies libero. Suspendisse 
                  malesuada convallis sem non auctor. Sed at interdum urna, sed ultrices ante. Quisque odio lorem, fermentum et mauris eget, pretium facilisis turpis. Aliquam 
                  vitae dui sem.
                  </p>
            <p className="pb-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>
            <hr />
            <h1 className="pt-1 pb-1">
              Guidelines for Poetry
            </h1>
            <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet odio eleifend, condimentum tortor ac, venenatis ante. In ut ultricies libero. Suspendisse 
                  malesuada convallis sem non auctor. Sed at interdum urna, sed ultrices ante. Quisque odio lorem, fermentum et mauris eget, pretium facilisis turpis. Aliquam 
                  vitae dui sem. Vestibulum non vehicula velit. Suspendisse libero dui, bibendum vitae congue ac, malesuada ut diam. Aliquam quam ante, semper quis ullamcorper nec, 
                  sagittis in nulla. Fusce nec lectus nisl.
                  </p>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet odio eleifend, condimentum tortor ac, venenatis ante. In ut ultricies libero. Suspendisse 
                  malesuada convallis sem non auctor. Sed at interdum urna, sed ultrices ante. Quisque odio lorem, fermentum et mauris eget, pretium facilisis turpis. Aliquam 
                  vitae dui sem.
                  </p>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet odio eleifend, condimentum tortor ac, venenatis ante. In ut ultricies libero. Suspendisse 
                  malesuada convallis sem non auctor. Sed at interdum urna, sed ultrices ante. Quisque odio lorem, fermentum et mauris eget, pretium facilisis turpis. Aliquam 
                  vitae dui sem. Vestibulum non vehicula velit. Suspendisse libero dui, bibendum vitae congue ac, malesuada ut diam. Aliquam quam ante, semper quis ullamcorper nec, 
                  sagittis in nulla. Fusce nec lectus nisl.
                  </p>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet odio eleifend, condimentum tortor ac, venenatis ante. 
                  </p>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet odio eleifend, condimentum tortor ac, venenatis ante. In ut ultricies libero. Suspendisse 
                  malesuada convallis sem non auctor. Sed at interdum urna, sed ultrices ante. Quisque odio lorem, fermentum et mauris eget, pretium facilisis turpis. Aliquam 
                  vitae dui sem.
                  </p>
            <hr />
            <h1 className="pt-1 pb-1">
              Guidelines for Non-Fiction
            </h1>
            <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet odio eleifend, condimentum tortor ac, venenatis ante. In ut ultricies libero. Suspendisse 
                  malesuada convallis sem non auctor. Sed at interdum urna, sed ultrices ante. Quisque odio lorem, fermentum et mauris eget, pretium facilisis turpis. Aliquam 
                  vitae dui sem. Vestibulum non vehicula velit. Suspendisse libero dui, bibendum vitae congue ac, malesuada ut diam. Aliquam quam ante, semper quis ullamcorper nec, 
                  sagittis in nulla. Fusce nec lectus nisl.
                  </p>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet odio eleifend, condimentum tortor ac, venenatis ante. In ut ultricies libero. Suspendisse 
                  malesuada convallis sem non auctor. Sed at interdum urna, sed ultrices ante. Quisque odio lorem, fermentum et mauris eget, pretium facilisis turpis. Aliquam 
                  vitae dui sem.
                  </p>
            <hr />
{/*            
            <h1 className="pt-1 pb-1">
              Guidelines for Letters from the Future
            </h1>
            <p className="pb-1">
              We're not quite sure how, but once every other month we receive a letter in the mail from the future. It's the damnedest thing. These letters are usually about 
              something specific to the early 21st century that's been extrapolated into the future (100 years or more). They're sometimes funny, sometimes subtle, sometimes serious, 
              but they're never over 1000 words. We pay 1¢ per word for them.
            </p>
            <hr />
*/}
            <h1 className="pt-1 pb-1">
              Guidelines for Translations
            </h1>
            <p className="pb-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet odio eleifend, condimentum tortor ac, venenatis ante. In ut ultricies libero. Suspendisse 
                  malesuada convallis sem non auctor. Sed at interdum urna, sed ultrices ante. Quisque odio lorem, fermentum et mauris eget, pretium facilisis turpis. Aliquam 
                  vitae dui sem.
                  </p>
            <hr />
            <h1 className="pt-1 pb-1">
              Guidelines for Art
            </h1>
            <p className="pb-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet odio eleifend, condimentum tortor ac, venenatis ante. In ut ultricies libero. Suspendisse 
                  malesuada convallis sem non auctor. Sed at interdum urna, sed ultrices ante. Quisque odio lorem, fermentum et mauris eget, pretium facilisis turpis. Aliquam 
                  vitae dui sem.
                  </p>
            <hr />
            <h1 className="pt-1 pb-1">
              Themes
            </h1>
            <Image className="editorImageAbout mb-2"
              fixed={data.wetCover.childImageSharp.fixed}
            />
            <h5 className="pt-1 pb-1">
              WET ISSUE
            </h5>
            <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet odio eleifend, condimentum tortor ac, venenatis ante. In ut ultricies libero. Suspendisse 
                  malesuada convallis sem non auctor. Sed at interdum urna, sed ultrices ante. Quisque odio lorem, fermentum et mauris eget, pretium facilisis turpis. Aliquam 
                  vitae dui sem.
                  </p>
                  <p className="pb-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet odio eleifend, condimentum tortor ac, venenatis ante. In ut ultricies libero. Suspendisse 
                  malesuada convallis sem non auctor. Sed at interdum urna, sed ultrices ante. Quisque odio lorem, fermentum et mauris eget, pretium facilisis turpis. Aliquam 
                  vitae dui sem.
                  </p>
            <Image className="editorImageAbout mb-2"
              fixed={data.dryCover.childImageSharp.fixed}
            />
            <h5 className="pt-1 pb-1">
              DRY ISSUE
            </h5>
            <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet odio eleifend, condimentum tortor ac, venenatis ante. In ut ultricies libero. Suspendisse 
                  malesuada convallis sem non auctor. Sed at interdum urna, sed ultrices ante. Quisque odio lorem, fermentum et mauris eget, pretium facilisis turpis. Aliquam 
                  vitae dui sem.
                  </p>
                  <p className="pb-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet odio eleifend, condimentum tortor ac, venenatis ante. In ut ultricies libero. Suspendisse 
                  malesuada convallis sem non auctor. Sed at interdum urna, sed ultrices ante. Quisque odio lorem, fermentum et mauris eget, pretium facilisis turpis. Aliquam 
                  vitae dui sem.
                  </p>
            <hr className="mb-2" />
            <Link to="/forms">
            <button type="button" className="collapsible">Go to Submission Form</button>
            </Link>
            <hr className="mb-2" />
            <p className="mb-4">
              Interested to know how we go about accepting and rejecting stories? <Link to="/rejectomancy">Click here!</Link>
            </p>
         </div>
      </div>
    </div>
  </div>
</div>
   {/*} <div className="intro pt-4">
      <div className="container pb-5 pt-md-7 pb-md-7">
        <div className="row2 justify-content-start">
          <div className="col-12">
          <Link to="/">
                <h3>Latest Issues</h3>
            </Link>
            <hr />
          </div>
          {json.map(edge => (
            <div key={edge.node.id} className="col-12 col-md-6 col-lg-4 mb-2">
              <div className="feature">
                {edge.node.image && (
                  <div className="feature-cover">
                    <Link to="/">               
                      <img src={withPrefix(edge.node.image)} />
                    </Link>
                  </div>
                )}
                <h2 className="feature-title">{edge.node.title}</h2>
                <div className="feature-content">{edge.node.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>*/}
    </Layout>
  );
};

export const query = graphql`
  query SubmitQuery {
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
    wetCover: file(relativePath: {eq: "wet_cover.jpg"}) {
      id
      childImageSharp {
        fixed(width:150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    dryCover: file(relativePath: {eq: "dry_cover.jpg"}) {
      id
      childImageSharp {
        fixed(width:150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Submit;

