//importaciones externas
import { Box, Button, Flex, HStack, VStack } from "@chakra-ui/react";

//importar components
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";

//componentes lazyload

export default function App() {
  return (
    <VStack className="app-container" {...appContainer}>
      <Flex className="main-container" {...mainContainer}>
        <Flex className="hero-container" {...heroContainer}>
          <Hero />
        </Flex>

        <VStack className="content-container" {...contentContainer}>
          <HStack className="navbar" {...navbarContainer}>
            <Navbar />
          </HStack>

          <Flex className="content-render" {...contentRenderContainer}>
            <About />
          </Flex>

          <Flex className="contact" mt="1rem">
            <Button {...contactButton}>Contactame!</Button>
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
};

const mainContainer = {
  zIndex: "10",
  bg: "var(--bg-200)",
  borderRadius: "30px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  p: " 1rem 1.5rem 1rem 1.5rem",
  mt: "4rem",
  h: "88%",
  w: "570px",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const heroContainer = {
  h: "50%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  mb: "1.5rem",
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
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  mb: "1.5rem",
};

const contentRenderContainer = {
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  border: "2px solid #f2f6f5",
  borderRadius: "0.5rem",
  boxShadow: "inset 0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
  h: "100%",
  maxH: "265px",
  minH: "3rem",
  w: "100%",
  p: "1rem",
  overflowY: "auto",
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

const contactButton = {
  bg: "var(--primary-100)",
  borderRadius: "1rem",
  color: "var(--text-100)",
  fontSize: "1rem",
  fontWeight: "600",
  border: "none",
  width: "100%",
  minH: "3rem",
  padding: "0.5rem 2.5rem",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s",
  _hover: {
    bg: "var(--primary-200)",
  },
};

//estilos shape-container
const shapeCircle = {
  position: "absolute",
  top: "65%",
  left: "15%",
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
  top: "30%",
  right: "10%",
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
  top: "11%",
  left: "10%",
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
  right: "10%",
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
