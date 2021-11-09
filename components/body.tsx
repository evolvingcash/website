import React from 'react';
import {
  Box,
  Heading,
  HStack,
  Text,
  Button,
  Stack,
  Image,
  useBreakpointValue,
  chakra,
  Container,
} from '@chakra-ui/react';


export const Body = () => (
    <>
        <Box paddingTop="160px" paddingBottom="60px" background="radial-gradient( 17.8% 45.68% at 61.59% 7.16%, rgba(221, 250, 240, 0.675) 0%, rgba(221, 250, 240, 0) 100% ),radial-gradient( 27.78% 81.17% at 68.06% 67.73%, rgba(255, 247, 217, 0.9) 0%, rgba(255, 247, 217, 0) 100% ),radial-gradient( 33.64% 72.69% at 38.37% 95.91%, rgba(245, 217, 245, 0.9) 0%, rgba(245, 217, 245, 0) 100% ),linear-gradient(
180deg, #FAFAFA 0%, #FEFAFD 100%);">
        <HStack as='section' w='100%' spacing="24px">
            <Box w="50%" textAlign='center'>
                <Box w="100%" margin="4rem 0">
                    <Heading as="h2">Decentralized Stablecoin</Heading>
                    <Heading as="h2">with an Algorithmic</Heading>
                    <Heading as="h2">Reserve Currency</Heading>
                </Box>
            </Box>
            <Box p="6" w="50%">
                <HStack>
                    <Button>Lauch App</Button>
                    <Button>Join Community</Button>
                </HStack>
            </Box>
        </HStack>
        </Box>

        <HStack as='section' w='100%' align="center" justify="center" spacing="24px" marginTop="30px">
            <Heading as="h1">How evolving-protocol works</Heading>
            
            <Box>
                <Box>
                <Text>1</Text>
                <Text>Treasury Revenue</Text>
                </Box>
                <Heading>Mints & LP Fees</Heading>
                <Box></Box>
                <Image
                    src="https://assets.website-files.com/614df6c45e16d20d94e29ce9/615045d50a89236712babf24_coin.png"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 610px) 91vw, (max-width: 767px) 556px, 278px" />
                <Image
                    src="https://assets.website-files.com/614df6c45e16d20d94e29ce9/614df6c45e16d27593e29cfe_Vector%2021.png"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 610px) 91vw, (max-width: 767px) 556px, 278px" />
            </Box>

            <Box>
                <Image
                src="https://assets.website-files.com/614df6c45e16d20d94e29ce9/614df6c45e16d2fe09e29d00_upload-1b6a8368-f3d1-452f-9607-75040422a0ab-4%206.png"
                loading="lazy" height="227" alt="" />
                <Box>
                <Text>2</Text>
                <Text>Treasury Growth</Text>
                </Box>
                <Heading>EVOL Rebase</Heading>
                <Box></Box>

                <Image
                    src="https://assets.website-files.com/614df6c45e16d20d94e29ce9/614df6c45e16d23f84e29cfd_Vector%2022.png"
                    loading="lazy" sizes="(max-width: 767px) 100vw, 328.265625px" />
            </Box>

            <Box>
                <Box>
                <Text>3</Text>
                <Text>Staking Rewards</Text>
                </Box>
                <Heading>EVOL Token</Heading>
                <Box></Box>
                <Image
                    src="https://assets.website-files.com/614df6c45e16d20d94e29ce9/615045ed96264cc68ab79a48_coin%202.png"
                    loading="lazy" height="244" alt="" />
            </Box>

        </HStack>

        <HStack as='section' w='100%' align="center" justify="center" spacing="24px" marginTop="30px">
            <Box w="50%" textAlign='center'>
                <Heading as="h1">What is</Heading>
                <br />
                <Heading as="h1">USDE & EVOL Token?</Heading>
            </Box>
            <Box w="50%">
                <Box marginTop="12px">
                    <Heading as="h1">Stable</Heading>
                    <p>Digital Standard Unit, the protocol’s stable token, uses a full reserve to ensure the token is always redeemable for 1 USDC. 
                        This approach ensures that DSU is always close to peg as arbitrageurs will efficiently keep peg.</p>
                </Box>
                <Box marginTop="12px">
                    <Heading as="h1">Composable</Heading>
                    <p>DSU adheres to the ERC-20 token standard.
                        This makes it work seamlessly across the decentralized finance infrastructure and reduces the likelihood of unforeseen
                         bugs in integrated protocols.
                    </p>
                </Box>
                <Box marginTop="12px">
                    <Heading as="h1">Decentralized</Heading>
                    <p>Since day one Empty Set has had completely decentralized on-chain governance. 
                        Additionally, the protocol launched with 0 initial supply and no pre-mine for the anonymous founding team.
                    </p>
                </Box>

                <Box margin="24px">
                    <Button>Read Docs</Button>
                </Box>
            </Box>
        </HStack>
    </>
  );
  
export default Body;