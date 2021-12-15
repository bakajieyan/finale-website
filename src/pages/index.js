import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import WorkFlow from '../sections/workflow';
import TeamSection from '../sections/team-section';
import Banner2 from 'sections/banner2';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Ape Army Guild" />
          <Banner />
          <Banner2 />
          <WorkFlow />
          <TeamSection />
        </Layout>
    </ThemeProvider>
  );
}
