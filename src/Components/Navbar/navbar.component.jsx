import React from "react";
import { Flex, Image, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Logo from "../../Assets/logo.png";
import "./navbar.styles.css";

function Navbar() {
  const MotionImage = motion(Image);
  const MotionLink = motion(Link);

  return (
    <nav>
      <Flex w="full" justify="center">
        <Flex
          color={{ base: "brand.secondary", md: "white" }}
          alignItems="center"
          justify="space-between"
          w="full"
          position="absolute"
          maxW="1500px"
          px={{ base: "8", md: "12", lg: "20", xl: "40" }}
          py={{ base: "8", md: "12" }}
        >
          <MotionImage
            onClick={() => (window.location.href = "/")}
            cursor="pointer"
            alt="Github Gallery search"
            src={Logo}
            w="75px"
            h="75px"
            objectFit="contain"
            whileHover={[{ scale: [1, 1.12, 1.1, 1.1, 1.1, 1.1] }]}
            whileTap={{ scale: 1 }}
          />
          <Flex fontWeight="medium" experimental_spaceX="10">
            <MotionLink
              href="https://github.com/imParthiv/Github Gallery-Search"
              isExternal
              whileTap={{ scale: 1 }}
              _hover={{}}
              _active={{}}
              _focus={{}}
              whileHover={[{ scale: [1, 1.12, 1.1, 1.1, 1.1, 1.1] }]}
            >
              Contribute
            </MotionLink>
            <MotionLink
              href="https://twitter.com/share?ref_src=twsrc%5Etfw"
              class="twitter-share-button"
              data-text="✨ Opensource contributions made easier with"
              data-url="https://hacktosearch.vercel.app/"
              data-hashtags="hacktosearch,Github Gallery"
              data-show-count="false"
            >
              Tweet
            </MotionLink>
          </Flex>
        </Flex>
      </Flex>
    </nav>
  );
}

export default Navbar;
