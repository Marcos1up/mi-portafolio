//importaciones externas
import { Flex, HStack, Heading, Image, VStack } from "@chakra-ui/react";

//importaciones estilizadas
import htmlIcon from "../assets/images/icon-html.png";
import cssIcon from "../assets/images/icon-css.png";
import jsIcon from "../assets/images/icon-js.png";
import tsIcon from "../assets/images/icon-typescript.png";
import reactIcon from "../assets/images/icon-react.png";
import nodeIcon from "../assets/images/icon-nodejs.png";
import mongoIcon from "../assets/images/icon-mongodb.png";
import postgresIcon from "../assets/images/icon-postgresql.png";
import gitIcon from "../assets/images/icon-git.png";

export default function Skills() {
  return (
    <VStack className="skills-container" {...skillsContainer}>
      <Heading {...titleProps}>
        Mi contenido está enfocado en las ultimas tecnologías y herramientas del
        desarrollo web. Hecha un vistazo 👨‍💻
      </Heading>

      <HStack className="card-html&css" {...cardProps}>
        <Flex {...imagesContainer}>
          <Image src={htmlIcon} alt="html image" {...imgProps}></Image>
          <Image src={cssIcon} alt="css image" {...imgProps}></Image>
        </Flex>

        <Heading {...tecnologyProps}>HTML & CSS</Heading>
      </HStack>

      <HStack className="card-js&ts" {...cardProps}>
        <Flex {...imagesContainer}>
          <Image src={jsIcon} alt="javascript image" {...imgProps}></Image>
          <Image src={tsIcon} alt="typescript image" {...imgProps}></Image>
        </Flex>

        <VStack>
          <Heading {...tecnologyProps}>Javascript &</Heading>
          <Heading {...tecnologyProps}>Typescript</Heading>
        </VStack>
      </HStack>

      <HStack className="card-react" {...cardProps}>
        <Image src={reactIcon} alt="react image" {...imgProps}></Image>
        <Heading {...tecnologyProps}>React.js</Heading>
      </HStack>

      <HStack className="card-node" {...cardProps}>
        <Image src={nodeIcon} alt="nodejs image" {...imgProps}></Image>
        <Heading {...tecnologyProps}>Node.js</Heading>
      </HStack>

      <HStack className="card-mongo&postgres" {...cardProps}>
        <Flex>
          <Image src={mongoIcon} alt="mongoDb image" {...imgProps}></Image>
          <Image
            src={postgresIcon}
            alt="postgreSql image"
            {...imgProps}
          ></Image>
        </Flex>

        <VStack>
          <Heading {...tecnologyProps}>MongoDb &</Heading>
          <Heading {...tecnologyProps}>PostgreSQL</Heading>
        </VStack>
      </HStack>

      <HStack className="card-git" {...cardProps}>
        <Image src={gitIcon} alt="git image" {...imgProps}></Image>
        <Heading {...tecnologyProps}>Git</Heading>
      </HStack>
    </VStack>
  );
}

//estilos del componente
const skillsContainer = {
  display: "flex",
  w: "full",
  flexDirection: "column",
  justfy: "space-between",
  gap: ".5rem",
};

const titleProps = {
  color: "var(--accent-100)",
  fontSize: "15px",
  textAlign: "center",
  mb: "1rem",
};

const cardProps = {
  bg: "#f2f6f5",
  h: "80px",
  maxH: "200px",
  minW: "100%",
  p: "1rem",
  borderRadius: "15px",
  overflow: "hidden",
  justify: "space-between",
  _hover: {
    transform: "scale(1.05)", //tamaño del card al 105%
    transition: "transform 0.2s ease-in-out", //transición mas suave
  },
  transition: "transform 0.2s ease-in-out", //transición suave al estado original
};

const imagesContainer = {
  flexDirection: "row",
};

const imgProps = {
  w: "50%",
  p: "15px 0",
  boxSize: "100px",
  objectFit: "contain",
};

const tecnologyProps = {
  color: "var(--accent-100)",
  fontFamily: ["Helvetica Neue", "sans-serif"],
  fontSize: "1.5rem",
  letterSpacing: ".2rem",
  alignSelf: "center",
  lineHeight: "1",
};
