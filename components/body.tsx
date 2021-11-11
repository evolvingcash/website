import React from 'react';
import {
  Box,
  Heading,
  HStack,
  Text,
  Button,
  Stack,
  Image,
  Flex,
  useBreakpointValue,
  chakra,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from "next/link"

import Logo from './logo';
import { FaArrowRight, FaDiscord, FaMicrophone } from "react-icons/fa"

export const Body = () => (
    <>
        <Box as='section'
            paddingTop="150px"
            paddingBottom="100px"
            background="radial-gradient( 17.8% 45.68% at 61.59% 7.16%, rgba(221, 250, 240, 0.675) 0%, rgba(221, 250, 240, 0) 100% ),radial-gradient( 27.78% 81.17% at 68.06% 67.73%, rgba(255, 247, 217, 0.9) 0%, rgba(255, 247, 217, 0) 100% ),radial-gradient( 33.64% 72.69% at 38.37% 95.91%, rgba(245, 217, 245, 0.9) 0%, rgba(245, 217, 245, 0) 100% ),linear-gradient(
180deg, #FAFAFA 0%, #FEFAFD 100%);">
            <Container>
                    <Box w="100%" textAlign='center'>
                    <chakra.h1
                        maxW="24ch"
                        mx="auto"
                        color="#08090a"
                        fontSize={{ base: "2.25rem", sm: "2.5rem", lg: "2.5rem" }}
                        letterSpacing="tighter"
                        fontWeight="extrabold"
                        mb="16px"
                        lineHeight="1.5"
                    >
                        Decentralized Stablecoin
                        <Box color="#805ad4">With</Box>
                        <Box>Algorithmic Reserve Currency</Box>
                        
                    </chakra.h1>
                        {/* <Box w="100%" margin="4rem 0">
                            <Heading as="h2">Decentralized Stablecoin</Heading>
                            <Heading as="h2">with</Heading>
                            <Heading as="h2">Algorithmic Reserve Currency</Heading>
                        </Box> */}
                    </Box>
                    <Box p="6" w="100%">
                                    
                        <Stack
                            mt="10"
                            spacing="4"
                            justify="center"
                            direction={{ base: "column", sm: "row" }}
                        >
                            <NextLink href="#" passHref>
                                <Button>Join Community</Button>
                            </NextLink>
                            <NextLink href="#" passHref>
                                <Button backgroundColor="ffc768" 
                                    colorScheme="purple"
                                    rightIcon={<FaArrowRight fontSize="0.8em" />}>Lauch App</Button>
                            </NextLink>

                        </Stack>
                    </Box>
            </Container>
        </Box>

        <Stack as='section' w='100%' spacing="24px" padding="30px 0 50px 0" backgroundColor="#ffe9c5">
            <Container maxW="container.md">
            <Heading as="h1" color="#030303" textAlign="center"
                padding="20px 0 50px 0"
                fontSize={{ base: "2.25rem", sm: "2.5rem", lg: "2.5rem" }}
                fontWeight="600"
                fontFamily="'Red Hat Display',sans-serif;">How evolving-protocol works</Heading>
            <Box>
                <Flex direction="row" alignItems="center" justifyItems="center" justifyContent="space-between">
                <Box>
                    <Box display="flex" flexDirection="row" justifyItems="center">
                        <Text backgroundColor="#e6e6e6"
                        color="737373"
                        height="32px" width="32px" borderRadius="20px"
                        fontSize="20px"
                        fontWeight="600"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        >1</Text>
                        <Text paddingLeft="10px">Treasury Revenue</Text>
                    </Box>
                    <Heading color="#08090a">Mints & LP Fees</Heading>
                </Box>
                <Box>
                    <Image
                    src="/images/mint-coin.png"
                    loading="lazy"
                    maxWidth="360px"
                    sizes="(max-width: 479px) 50vw" />
                </Box>
                </Flex>
            </Box>

            <Box align="center">
                <Image
                    src="/images/line-1.png"
                    loading="lazy"
                    maxWidth="80%"
                    sizes="(max-width: 479px) 90vw, (max-width: 610px) 91vw, (max-width: 767px) 556px, 278px" />
            </Box>

            <Box>
                <Flex direction="row" alignItems="center" justifyItems="center" justifyContent="space-between">
                <Box>
                    <Image
                        src="/images/treasury.png"
                        loading="lazy" height="227" alt="" />
                </Box>

                <Box>
                    <Box display="flex" flexDirection="row" justifyItems="center">
                        <Text backgroundColor="#e6e6e6"
                            color="737373"
                            height="32px" width="32px" borderRadius="20px"
                            fontSize="20px"
                            fontWeight="600"
                            display="flex"
                            alignItems="center"
                            justifyContent="center">2</Text>
                        <Text paddingLeft="10px">Treasury Growth</Text>
                    </Box>
                    <Heading color="#08090a">EVOL Rebase</Heading>
                </Box>

                </Flex>
            </Box>

            <Box align="center">
                <Image
                    height="150px"
                    src="/images/line-2.png"
                    loading="lazy" sizes="(max-width: 767px) 100vw, 328.265625px" />
            </Box>

            <Box>
                <Flex direction="row" alignItems="center" justifyItems="center" justifyContent="space-between">
                <Box>
                    <Box display="flex" flexDirection="row" justifyItems="center">
                        <Text backgroundColor="#e6e6e6"
                            color="737373"
                            height="32px" width="32px" borderRadius="20px"
                            fontSize="20px"
                            fontWeight="600"
                            display="flex"
                            alignItems="center"
                            justifyContent="center">3</Text>
                        <Text paddingLeft="10px">Staking Rewards</Text>
                    </Box>
                    <Heading color="#08090a">EVOL Token</Heading>
                </Box>
                
                <Box>
                    <Logo width="244" height="244" display={{ base: 'none', md: 'block' }} />
                </Box>
                </Flex>
            </Box>

            </Container>
        </Stack>

        <Box as='section'>
            <Container maxW="container.lg" padding="20px 0">
            <HStack width="100%" spacing="24px" marginTop="30px">
            <Box width="50%" textAlign='center'>
                <Heading as="h1">What is</Heading>
                <br />
                <Heading as="h1">USDE & EVOL Token?</Heading>
                <br />
                <br />
                <br />
                <br />
            </Box>
            <Box width="50%">
                <Box marginTop="1px">
                    <Heading as="h1" color="#08090a">Stable</Heading>
                    <p>USDE, the protocol’s stable token, uses a algorithmic reserve to ensure the token is always redeemable for 1 USDC or equatity. 
                        This approach ensures that USDE is always close to peg as arbitrageurs will efficiently keep peg.</p>
                </Box>
                <Box marginTop="20px">
                    <Heading as="h1" color="#08090a">Composable</Heading>
                    <p>USDE & EVOL adheres to the ERC-20 token standard.
                        This makes it work seamlessly across the decentralized finance infrastructure and reduces the likelihood of unforeseen
                         bugs in integrated protocols.
                    </p>
                </Box>
                <Box marginTop="20px">
                    <Heading as="h1" color="#08090a">Decentralized</Heading>
                    <p>Since day one Empty Set has had completely decentralized on-chain governance. 
                        Additionally, the protocol launched with 0 initial supply and no pre-mine for the anonymous founding team.
                    </p>
                </Box>

                <Box margin="30px">
                    <NextLink href="#"><Button colorScheme="purple">Read Docs</Button></NextLink>
                </Box>
            </Box>
        </HStack>
        </Container></Box>
    </>
  );
  
export default Body;