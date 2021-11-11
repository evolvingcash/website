import { useTranslation } from 'react-i18next';

import Head from 'next/head'
import Link from 'next/link'
import {
  Box,
} from '@chakra-ui/react';

import SEO from '../components/seo';
import { Footer } from '../components/footer';
import Header from '../components/header';
import Body from '../components/body';


export default function Home({ allPostsData }) {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml"/>
      </Head>
      <SEO
        title='evovling cash'
        description='evolving protocol: Decentralized Stablecoin With Algorithmic Reserve Currency'
      />
      <Header />

      <Box mb={20}>
        <Body />
        <Footer />
      </Box>
    </>
  )
}

