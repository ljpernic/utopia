import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Image from "gatsby-image";
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import styled from "styled-components";

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout bodyClass="page-home">
        <div className="intro pt-4">
          <div className="container pt-8 pt-md-4">
            <div className="row2 justify-content-start pt-2">
              <div className="col-12">
                <p className="text-center">Lorum.</p>
                <p className="text-center">Ipsum.</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default NotFoundPage;
