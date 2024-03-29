//importaciones externas
import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Link,
  VStack,
} from "@chakra-ui/react";

//importar components
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

//importaciones estilizadas
import profileImg from "./assets/images/avatar-profile.png";

export default function App() {
  const cvLink =
    "https://drive.google.com/file/d/1GQvOBiWfoJ3MEtSB7UqMNV80OKRpeKFb/view?usp=drive_link";

  const [activeComponent, setActiveComponent] = useState("About");
  const renderComponent = () => {
    switch (activeComponent) {
      case "About":
        return <About />;
      case "Skills":
        return <Skills />;
      case "Projects":
        return <Projects />;
      default:
        return <About />;
    }
  };

  return (
    <VStack className="app-container" {...appContainer}>
      <Image
        className="profile-image"
        src={profileImg}
        alt="Marco Soria"
        {...imageProps}
      ></Image>

      <Flex className="main-container" {...mainContainer}>
        <Flex className="hero-container" {...heroContainer}>
          <Hero />
        </Flex>

        <VStack className="content-container" {...contentContainer}>
          <HStack className="navbar" {...navbarContainer}>
            <Navbar setActiveComponent={setActiveComponent} />
          </HStack>

          <Flex className="content-render">
            <Flex {...contentRenderContainer}>{renderComponent()}</Flex>
            <Flex {...contentSm}>
              <About />
              <Skills />
              <Projects />
            </Flex>
          </Flex>

          <Flex className="contact" {...contactContainer}>
            <Button {...contactButton} borderRadius="1rem 0 0 1rem">
              Contactame!
            </Button>
            <Link href={cvLink} isExternal>
              <Button {...contactButton} borderRadius="0 1rem 1rem 0">
                CV
              </Button>
            </Link>
          </Flex>
        </VStack>
      </Flex>

      <Box className="shape-circle" {...shapeCircle}></Box>
      <Box className="shape-triangle" {...shapeTriangle}>
        <Box {...shapeTriangleChild}></Box>
      </Box>
      <Box className="shape-square" {...shapeSquare}></Box>
      <Box className="shape-triangle-2" {...shapeTriangle2}>
        <Box {...shapeTriangleChild2}></Box>
      </Box>
    </VStack>
  );
}

//estilos del componente
const appContainer = {
  height: "100vh",
  width: "100vw",
  justifyContent: "center",
  alignItems: "center",
  background: "var(--bg-100)",
  overflow: "hidden",
};

const imageProps = {
  position: "absolute",
  top: "0.5%",
  zIndex: "15",

  bg: "var(--bg-200)",
  width: { base: "120px", lg: "150px" },
  height: { base: "120px", lg: "150px" },
  borderRadius: "30px",
  objectFit: "cover",
  padding: "0.5rem",
  boxShadow: "0px -10px 10px 0 rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s",
};

const mainContainer = {
  zIndex: "10",
  bg: "var(--bg-200)",
  borderRadius: { base: "0", sm: "0", md: "30px" },
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  p: { base: "1.5rem 1rem 1rem 1rem", md: "2rem 1.5rem 1.5rem 1.5rem" },
  mt: { base: "4rem", md: "4rem" },
  h: { base: "88%", sm: "88%", md: "88%" },
  maxW: { base: "372px", sm: "570px" },
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  transition: "all 0.3s",
};

const heroContainer = {
  h: { base: "auto", md: "50%" },
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  mt: { base: "1.5rem", lg: "1.5rem" },
};

const contentContainer = {
  diplay: "flex",
  h: "100%",
  w: "100%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "0",
};

const navbarContainer = {
  display: { base: "none", md: "flex" },
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  mb: "1.5rem",
};

const contentRenderContainer = {
  display: { base: "none", sm: "flex" },

  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  border: "2px solid #f2f6f5",
  borderRadius: "0.5rem",
  boxShadow: "inset 0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
  h: "100%",
  maxH: { base: "auto", sm: "335px", md: "265px" },
  minH: "3rem",
  w: "100%",
  p: "1rem",
  overflowY: "auto",
  transition: "all 0.3s",
  sx: {
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "0.5rem",
      height: "0.5rem",
      borderRadius: "9.99rem",
      backgroundColor: `#f2f6f5`,
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "9.99rem",
      backgroundColor: `var(--primary-400)`,
    },
  },
};

const contentSm = {
  display: { base: "flex", sm: "none" },

  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  border: "2px solid #f2f6f5",
  borderRadius: "0.5rem",
  boxShadow: "inset 0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
  h: "100%",
  maxH: { base: "378px", sm: "335px", md: "265px" },
  minH: "3rem",
  w: "100%",
  p: "1rem",
  overflowY: "auto",
  transition: "all 0.3s",
  sx: {
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "0.5rem",
      height: "0.5rem",
      borderRadius: "9.99rem",
      backgroundColor: `#f2f6f5`,
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "9.99rem",
      backgroundColor: `var(--primary-400)`,
    },
  },
};

const contactContainer = {
  m: { base: ".5rem 0 .5rem 0", md: "1rem 0 1rem 0" },
};

const contactButton = {
  bg: "var(--primary-200)",
  color: "var(--text-100)",
  fontSize: { base: "0.8rem", md: "1rem" },
  fontWeight: "600",
  border: "none",
  w: { base: "120px", md: "250px" },
  minW: "115px",
  minH: "3rem",
  padding: { base: "0.25rem 1rem", md: "0.5rem 2.5rem" },
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s",
  _hover: {
    bg: "var(--primary-300)",
  },
};

//estilos shape-container
const shapeCircle = {
  position: "absolute",
  top: "65%",
  left: { base: "1%", md: "15%" },
  transition: "all 0.3s",
  zIndex: "1",

  width: "15rem",
  height: "15rem",
  opacity: ".25",
  borderRadius: "50%",
  background:
    "linear-gradient(277deg, rgba(224,63,39,1) 35%, rgba(255,255,255,0) 100%)",
};

const shapeSquare = {
  position: "absolute",
  top: { base: "20%", md: "30%" },
  right: { base: "-50%", md: "10%" },
  transition: "all 0.3s",
  zIndex: "1",
  transform: "translate(-50%, -50%) rotate(45deg)", //centrado y rotación

  width: "10rem",
  height: "10rem",
  opacity: ".25",
  borderRadius: "1rem",
  background:
    "linear-gradient(223deg, rgba(224,63,39,1) 35%, rgba(255,255,255,0) 100%)",
};

const shapeTriangle = {
  top: { base: "-2%", md: "11%" },
  left: { base: "5%", md: "10%" },
  transition: "all 0.3s",
  zIndex: "1",

  position: "absolute",
  display: "inline-block",
  overflow: "hidden",
  width: "128px",
  height: "88px",
};

const shapeTriangleChild = {
  top: "50%",
  left: "15%",
  zIndex: "1",
  transform:
    "translate(0%, 0%) rotate(45deg) skew(0) skewY(0) scaleX(1) scaleY(1)",

  position: "absolute",
  width: "5.5rem",
  height: "5.5rem",
  background:
    "linear-gradient(to bottom left, rgba(237,152,26,1), rgba(255,255,255,0))",
};

const shapeTriangle2 = {
  right: { base: "2%", md: "10%" },
  transition: "all 0.3s",
  top: "80%",
  zIndex: "1",
  transform: " rotate(15deg)",

  overflow: "hidden",
  display: "inline-block",
  position: "absolute",
  width: "64px",
  height: "44px",
};

const shapeTriangleChild2 = {
  top: "50%",
  left: "15%",
  zIndex: "1",
  transform:
    "translate(0%, 0%) rotate(45deg) skew(0) skewY(0) scaleX(1) scaleY(1)",

  position: "absolute",
  width: "2.75rem",
  height: "2.75rem",
  background:
    "linear-gradient(to bottom left, rgba(237,152,26,1), rgba(255,255,255,0))",
};

/* 
Background
  --bg-gradient: radial-gradient(at center, #080808, #010101);
  --bg-100:#000000; rgb(0, 0, 0) (principal)
  --bg-200:#161616; rgb(22, 22, 22)
  --bg-300:#2c2c2c; rgb(44, 44, 44)
  
Primary
  --primary-100:#e03f27; rgb(224, 63, 39) (principal)
  --primary-200:#ffcd33; rgb(255, 205, 51) (secundario)
  --primary-300:#ffdab0; rgb(255, 218, 176) (tercero a cambiar)

Accent
  --accent-100:#ed981a; rgb(237, 152, 26) (principal)
  --accent-200:#803e00; rgb(128, 62, 0)

Text
  --text-100:#FFFFFF; rgb(255, 255, 255) (principal)
  --text-200:#737373; rgb(115, 115, 115)
*/
