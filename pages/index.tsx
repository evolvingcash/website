import { useTranslation } from 'react-i18next';

import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import {
  Box,
  BoxProps,
  Button,
  Center,
  chakra,
  Circle,
  Divider,
  Flex,
  Grid,
  Heading,
  Icon,
  Img,
  LightMode,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
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
        title={t('homepage.seo.title')}
        description={t('homepage.seo.description')}
      />
      <Header />

      <Box mb={20}>
        <Body />
        <Footer />
      </Box>
    </>
  )
}

