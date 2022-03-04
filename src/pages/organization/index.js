import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Helmet from 'react-helmet';
import Image from "gatsby-image";

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

const Organization = (props) => {
  const data = props.data;
  const currentIssue = `https://ko-fi.com/havenspec/shop`;
  
  var imgArray = [data.advert01.childImageSharp.fixed, data.advert02.childImageSharp.fixed, data.advert03.childImageSharp.fixed];
  var shuffledArray = shuffle(imgArray);

  return (
    <Layout bodyClass="page-home">
      <SEO title="Haven Spec Magazine's organization and budget breakdown" />
      <Helmet>
        <meta
          name="description"
          content=""
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
                        fixed={shuffledArray[0]}      /*This pulls the image from the md file with featured: true (current cover)*/
                      />
                    </Link>
                </div>
                <h6>
                  ADVERT
                </h6>
                <div>
                <Link to="/subscribe">
                      <Image className="advert mb-2"
                        fixed={shuffledArray[1]}      /*This pulls the image from the md file with featured: true (current cover)*/
                      />
                    </Link>
                </div>
                <h6>
                  ADVERT
                </h6>
                <div>
                <Link to="/subscribe">
                      <Image className="advert mb-2"
                        fixed={shuffledArray[2]}      /*This pulls the image from the md file with featured: true (current cover)*/
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
                    Our Organization
                  </h4>
                  <hr />
                </div>
                <div className="pt-2">
                <Link to="/subscribe">
                      <Image className="advertLong"
                        fixed={data.advertLong.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                      />
                    </Link>
                  </div>                

                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet odio eleifend, condimentum tortor ac, venenatis ante. In ut ultricies libero. Suspendisse 
                  malesuada convallis sem non auctor. Sed at interdum urna, sed ultrices ante. Quisque odio lorem, fermentum et mauris eget, pretium facilisis turpis. Aliquam 
                  vitae dui sem. Vestibulum non vehicula velit. Suspendisse libero dui, bibendum vitae congue ac, malesuada ut diam. Aliquam quam ante, semper quis ullamcorper nec, 
                  sagittis in nulla. Fusce nec lectus nisl.
                  </p>
                  <p>
                  Sed lobortis velit eu massa tempus venenatis. Aenean vel lorem vel ex ullamcorper rhoncus. Maecenas justo urna, rhoncus nec volutpat luctus, fringilla sit amet 
                  dolor. Suspendisse facilisis ex ac tellus semper, id commodo dolor posuere. Mauris enim purus, sollicitudin id gravida nec, varius blandit orci. In rhoncus 
                  neque eu semper fringilla. In ut dui convallis, euismod diam vitae, pharetra magna. Nullam vitae tristique sem. Nunc nec neque vitae nunc porttitor cursus sit 
                  amet nec libero.
                  </p>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet odio eleifend, condimentum tortor ac, venenatis ante. In ut ultricies libero. Suspendisse 
                  malesuada convallis sem non auctor. Sed at interdum urna, sed ultrices ante. Quisque odio lorem, fermentum et mauris eget, pretium facilisis turpis. Aliquam 
                  vitae dui sem. Vestibulum non vehicula velit. Suspendisse libero dui, bibendum vitae congue ac, malesuada ut diam. Aliquam quam ante, semper quis ullamcorper nec, 
                  sagittis in nulla. Fusce nec lectus nisl.
                  </p>
                  <p>
                  Sed lobortis velit eu massa tempus venenatis. Aenean vel lorem vel ex ullamcorper rhoncus. Maecenas justo urna, rhoncus nec volutpat luctus, fringilla sit amet 
                  dolor. Suspendisse facilisis ex ac tellus semper, id commodo dolor posuere. Mauris enim purus, sollicitudin id gravida nec, varius blandit orci. In rhoncus 
                  neque eu semper fringilla. In ut dui convallis, euismod diam vitae, pharetra magna. Nullam vitae tristique sem. Nunc nec neque vitae nunc porttitor cursus sit 
                  amet nec libero.
                  </p>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet odio eleifend, condimentum tortor ac, venenatis ante. In ut ultricies libero. Suspendisse 
                  malesuada convallis sem non auctor. Sed at interdum urna, sed ultrices ante. Quisque odio lorem, fermentum et mauris eget, pretium facilisis turpis. Aliquam 
                  vitae dui sem. Vestibulum non vehicula velit. Suspendisse libero dui, bibendum vitae congue ac, malesuada ut diam. Aliquam quam ante, semper quis ullamcorper nec, 
                  sagittis in nulla. Fusce nec lectus nisl.
                  </p>
                  <p>
                  Sed lobortis velit eu massa tempus venenatis. Aenean vel lorem vel ex ullamcorper rhoncus. Maecenas justo urna, rhoncus nec volutpat luctus, fringilla sit amet 
                  dolor. Suspendisse facilisis ex ac tellus semper, id commodo dolor posuere. Mauris enim purus, sollicitudin id gravida nec, varius blandit orci. In rhoncus 
                  neque eu semper fringilla. In ut dui convallis, euismod diam vitae, pharetra magna. Nullam vitae tristique sem. Nunc nec neque vitae nunc porttitor cursus sit 
                  amet nec libero.
                  </p>

            <hr className="mb-2" />

          </div>
      </div>
    </div>
  </div>
</div>
    </Layout>
  );
};

export const query = graphql`
  query OrganizationQuery {
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
  }
`;

export default Organization;
