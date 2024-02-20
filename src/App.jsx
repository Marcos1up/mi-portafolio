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
            <Button colorScheme="teal" variant="outline" {...contactButton}>
              Contactame!
            </Button>
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
  borderRadius: "30px",
  bg: "var(--bg-200)",
  p: " 1rem 1.5rem 1rem 1.5rem",
  mt: "4rem",
  h: "80%",
  w: "40%",
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
  bg: "var(--bg-300)",
  h: "100%",
  maxH: "235px",
  w: "100%",
  p: ".5rem",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  overflowY: "auto",
  sx: {
    overflowY: "auto", // Permitir desplazamiento vertical si es necesario
    "&::-webkit-scrollbar": {
      width: "13px",
      borderRadius: "8px",
      backgroundColor: `rgba(0, 0, 0, .1)`, // Color de fondo del scrollbar
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "8px",
      backgroundColor: `var(--accent-100)`, // Color del thumb del scrollbar
      border: "4px solid var(--bg-300)", // Borde del thumb, mismo color que el fondo para efecto "invisible"
    },
  },
};

const contactButton = {
  bg: "var(--primary-100)",
  color: "var(--text-100)",
  _hover: {
    bg: "var(--accent-100)",
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
