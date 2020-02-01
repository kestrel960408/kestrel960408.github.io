/* eslint-disable max-len, react/jsx-one-expression-per-line */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import siteShape from '../shapes/site';

const ghLink = <a href="https://github.com/kestrel960408">my GitHub</a>;

const ResumeHeader = styled.header(({ theme }) => ({
  ...theme.centerPadding,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  '> h5': {
    margin: 0,
  },
}));

const H2 = styled.h2(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing,
}));
const H3 = styled.h3(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing,
}));
const H4 = styled.h4(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing,
}));
const P = styled.p(({ theme }) => ({
  ...theme.centerPadding,
}));
const Ul = styled.ul(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing,
  marginLeft: `${theme.spacingPx * 4}px`,
}));

const About = ({ data: { site: { siteMetadata: site } } }) => (
  <Layout>
    <main>
      <Helmet>
        <title>
          About
          {' '}
          &middot;
          {' '}
          {site.title}
        </title>
      </Helmet>
      <H2>About</H2>
      <blockquote>
        <P>
          &quot;But the Holy Spirit produces this kind of fruit in our lives:
          love, joy, peace, patience, kindness, goodness, faithfulness,
          gentleness, and self-control. There is no law against these
          things!&quot; - The Apostle Paul, to the Galatians
        </P>
      </blockquote>

      <H4>contact</H4>
      <Ul>
        <li>Email : kestrel08@naver.com</li>
      </Ul>


      <H4>Software</H4>
      <Ul>
        <li>Tools: Docker, Git, </li>
        <li>Database: MariaDB, Redis</li>
        <li>Platforms: Linux, Microsoft Windows</li>
      </Ul>


      <H4>Languages</H4>
      <Ul>
        <li>Proficient in: JavaScript (TypeScript, React), HTML5, CSS3 (LESS)</li>
        <li>Familiar with: C++, C# and .NET Framework, Java,, JavaScript SQL</li>
      </Ul>
      <H4>Software</H4>
      <Ul>
        <li>Tools: Docker, Git, </li>
        <li>Database: MariaDB, Redis</li>
        <li>Platforms: Linux, Microsoft Windows</li>
      </Ul>


      <H4>Experience</H4>
      <ResumeHeader>
        <h5> Web &middot; Front-end  &middot; Back-end </h5>
        <h5>January 2020 - Present</h5>
      </ResumeHeader>
      <Ul>
        <li>Open Web Blog</li>
      </Ul>
   
    </main>
  </Layout>
);

About.propTypes = {
  data: PropTypes.shape({
    site: siteShape,
  }).isRequired,
};

export default About;

export const aboutPageQuery = graphql`
  query AboutPageSiteMetadata {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
