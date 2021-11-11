import React from 'react';
import {
  HStack,
  Icon,
  Divider,
  Stack,
  Link,
  Container,
  Box,
  useBreakpointValue,
  chakra,
  Heading,
} from '@chakra-ui/react';
import { IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io';
import { FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { DiGithubBadge, DiDoctrine } from 'react-icons/di';
// import LanguageSwitcher from './language-switcher';

type FooterLinkProps = {
  icon?: React.ElementType;
  href?: string;
  label?: string;
};

const FooterLink: React.FC<FooterLinkProps> = ({ icon, href, label }) => (
  <Link display='inline-block' paddingRight="1.5rem" href={href} aria-label={label} isExternal>
    <Icon as={icon} fontSize='xl' color='gray.400' />
  </Link>
);


export const Footer = () => (
    // <Container w="100vw" bgColor="#f3f3f3" centerContent paddingTop="6rem" paddingBottom="6rem" > 
    <Box bgColor="#f3f3f3">
      <Divider />
  <HStack maxW="1100px" padding="3rem; 0.5rem" margin="auto" >
    <Stack mt={4} direction='column' spacing='12px' justify='center' w='25%'>
        <Box>
            <FooterLink href="https://twitter.com/Evolving_cash" icon={IoLogoTwitter} />
            <FooterLink href="mailto:evolving.cash@gmail.com" icon={MdEmail} />
            <FooterLink href="#" icon={FaYoutube} />
        </Box>

        <Box marginTop="20px">
            <FooterLink href="https://github.com/evolvingcash" icon={DiGithubBadge} />
            <FooterLink href="#" icon={DiDoctrine} />
        </Box>
    </Stack>

    <Stack mt={4} direction='column' spacing='12px' align="start" w='25%'>
      <Heading fontSize="1.5rem">Products</Heading>
      <Link display='inline-block' href="#" isExternal>Mint</Link>
      <Link display='inline-block' href="#" isExternal>Stake</Link>
    </Stack>

    <Stack mt={4} direction='column' spacing='12px' justify='center' w='25%'>
      <Heading fontSize="1.5rem">Learn</Heading>
      <Link display='inline-block' href="#" isExternal>FAQ</Link>
      <Link display='inline-block' href="https://medium.com/@Evolving_cash " isExternal>Medium</Link>
    </Stack>

    <Stack mt={4} direction='column' spacing='12px' justify='center' w='25%'>
      <Heading fontSize="1.5rem">Community</Heading>
      <Link display='inline-block' href="https://t.me/EvolvingCN" isExternal>Telegram</Link>
      <Link display='inline-block' href="evolving.cash" isExternal>Discord</Link>
    </Stack>
  </HStack>
  </Box>
// </Container>
);

export default Footer;