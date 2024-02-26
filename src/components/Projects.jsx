//importaciones externas
import {
  Button,
  HStack,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

//importaciones estilizadas
import { FaGithub, FaLink } from "react-icons/fa";
import exampleImg from "../assets/images/image-404.png";
import heladitosApp from "../assets/images/heladitosapp-img.png";

export default function Projects() {
  return (
    <VStack id="projects" className="projects-container" {...projectsContainer}>
      <HStack className="AlPaso-card" {...cardProps}>
        <Image src={exampleImg} alt="Project image" {...imageProps}></Image>
        <VStack {...infoContainer}>
          <Heading {...titleStyles}>AlPaso App</Heading>

          <Text {...textCointainerStyles}>
            Desarrollo freelancer de una página de catálogo menú, para un
            negocio local de comida rápida. Muestra productos destacados,
            ofertas, favoritos, si se encuentra abierto o cerrado y un mapa de
            la dirección del local.
          </Text>
        </VStack>

        <VStack className="links-container">
          <Link href="" isExternal>
            <Button {...buttonProps}>
              <FaLink />
            </Button>
          </Link>

          <Link href="" isExternal>
            <Button {...buttonProps}>
              <FaGithub />
            </Button>
          </Link>
        </VStack>
      </HStack>

      <HStack className="HeladitosApp-card" {...cardProps}>
        <Image src={heladitosApp} alt="Project image" {...imageProps}></Image>
        <VStack {...infoContainer}>
          <Heading {...titleStyles}>Heladitos App</Heading>

          <Text {...textCointainerStyles}>
            E-commerce de helados, con filtros por nombre, categoría y orden por
            precio. Registro y personalización de usuarios, favoritos, compras
            seguras con Mercado Pago, reviews de su experiencia en la plataforma
            y correo electrónico de comprobantes de pagos.
          </Text>
        </VStack>

        <VStack className="links-container">
          <Link href="http://heladitos-app.vercel.app/" isExternal>
            <Button {...buttonProps}>
              <FaLink />
            </Button>
          </Link>

          <Link href="https://github.com/HeladitoApp/pf-Heladito" isExternal>
            <Button {...buttonProps}>
              <FaGithub />
            </Button>
          </Link>
        </VStack>
      </HStack>

      <HStack className="WikiDogs-card" {...cardProps}>
        <Image src={exampleImg} alt="Project image" {...imageProps}></Image>
        <VStack {...infoContainer}>
          <Heading {...titleStyles}>WikiDogs</Heading>

          <Text {...textCointainerStyles}>
            Una SPA, con React para el Front-End, y Redux como State. Usando una
            API, Back-End con Node.js, usando Express. Uso de PostgreSQL para
            base de datos. Funcionalidades como filtrados, ordenamientos,
            búsquedas y creación de perros.
          </Text>
        </VStack>

        <VStack className="links-container">
          <Link href="" isExternal>
            <Button {...buttonProps}>
              <FaLink />
            </Button>
          </Link>

          <Link href="https://github.com/Marcos1up/PI-Dogs-Henry" isExternal>
            <Button {...buttonProps}>
              <FaGithub />
            </Button>
          </Link>
        </VStack>
      </HStack>
    </VStack>
  );
}

//estilos del componente
const projectsContainer = {
  display: "flex",
  flexDirection: "column",
  justfy: "space-between",
  gap: "1rem",
};

const cardProps = {
  bg: "#f2f6f5",
  h: "200px",
  maxH: "200px",
  p: "1rem",
  borderRadius: "30px",
  overflow: "hidden",
  justify: "space-between",
  _hover: {
    transform: "scale(1.05)", //tamaño del card al 105%
    transition: "transform 0.2s ease-in-out", //transición mas suave
  },
  transition: "transform 0.2s ease-in-out", //transición suaveal estado original
};

const infoContainer = {
  objectFit: "cover",
};

const imageProps = {
  w: "50px",
  m: "10px",
  bg: "var(--bg-200)",
  boxSize: "100px",
  objectFit: "cover",
  borderRadius: "5px",
  boxShadow: "0px -10px 15px 0 rgba(0, 0, 0, 0.1)",
};

const titleStyles = {
  color: "var(--accent-100)",
  fontFamily: ["Helvetica Neue", "sans-serif"],
  fontSize: "1.5rem",
  letterSpacing: ".2rem",
  alignSelf: "start",
  lineHeight: "1",
};

const textCointainerStyles = {
  color: "var(--accent-100)",
  fontSize: "13px",
  overflow: "hiden",
};

const buttonProps = {
  colorScheme: "blackAlpha",
  variant: "solid",
  _hover: {
    borderColor: "var(--accent-200)",
    color: "var(--accent-200)",
  },
};
