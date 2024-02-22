//importaciones externas
import { useState } from "react";
import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";

//importaciones estilizadas
import profileImg from "../assets/images/avatar-profile.png";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaCheckCircle,
} from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

export default function Hero() {
  const [isCopied, setIsCopied] = useState(false);
  const toast = useToast();

  const linkedInUrl = "https://www.linkedin.com/in/marcos-soria-fullstack/";
  const githubUrl = "https://github.com/Marcos1up";
  const instagramUrl = "https://www.instagram.com/marcos.1up/";

  //funcion de copiar email
  const copyToClipboard = () => {
    const email = "itsmarcos.1up@gmail.com";

    navigator.clipboard
      .writeText(email)
      .then(() => {
        setIsCopied(true);
        toast({
          title: "Correo electrónico copiado.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });

        //timer para reestablecer el icono
        setTimeout(() => setIsCopied(false), 10000);
      })
      .catch((err) => {
        toast({
          title: "Error al copiar.",
          description: "No se pudo copiar el correo electrónico.",
          status: { err },
          duration: 2000,
          isClosable: true,
        });
      });
  };

  return (
    <VStack className="hero-container" {...heroContainer}>
      <Image
        className="profile-image"
        src={profileImg}
        alt="Marco Soria"
        {...imageProps}
      ></Image>

      <Box className="title-container">
        <Heading {...headingProps}>Marcos Soria</Heading>
        <Text {...textProps}>BackEnd/FullStack Developer</Text>
      </Box>

      <HStack className="links-container" {...linksContainer}>
        <Link href={githubUrl} isExternal>
          <Button {...buttonProps}>
            <FaGithub />
          </Button>
        </Link>

        <Link href={linkedInUrl} isExternal>
          <Button {...buttonProps}>
            <FaLinkedin />
          </Button>
        </Link>

        <Link href={instagramUrl} isExternal>
          <Button {...buttonProps}>
            <FaInstagram />
          </Button>
        </Link>

        <Button
          id="copy-button"
          onClick={copyToClipboard}
          {...(isCopied ? copyButtonProps : buttonProps)}
        >
          <Icon as={isCopied ? FaCheckCircle : MdAttachEmail} />
        </Button>
      </HStack>
    </VStack>
  );
}

//estilos del componente
const heroContainer = {
  position: "absolute",
  top: "0.5%",
  justifyContent: "center",
  alignItems: "center",
};

const imageProps = {
  bg: "var(--bg-200)",
  width: "150px",
  height: "150px",
  borderRadius: "30px",
  objectFit: "cover",
  padding: "0.5rem",
  boxShadow: "0px -10px 10px 0 rgba(0, 0, 0, 0.1)",
};

const headingProps = {
  color: "var(--accent-100)",
  fontFamily: ["Helvetica Neue", "sans-serif"],
  fontSize: "1.5rem",
  letterSpacing: ".2rem",
  textAlign: "center",
  lineHeight: "1",
  m: "0",
};

const textProps = {
  color: "var(--accent-200)",
  fontFamily: "Roboto",
  letterSpacing: ".2rem",
  fontSize: "1rem",
  textAlign: "center",
  m: "0 0 1rem 0 ",
};

const linksContainer = {};

const buttonProps = {
  colorScheme: "blackAlpha",
  variant: "outline",
  _hover: {
    borderColor: "var(--primary-200)",
    color: "var(--primary-200)",
  },
};

const copyButtonProps = {
  colorScheme: "green",
  variant: "solid",
};
