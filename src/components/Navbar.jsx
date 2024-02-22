//importaciones externas
//import { useState } from "react";
import { Button, HStack } from "@chakra-ui/react";

export default function Navbar() {
  //const [selected, setSelected] = useState("");

  return (
    <HStack className="navbar-container" {...navbarContainer}>
      <Button className="about-route" {...navbarButton}>
        Sobre mí
      </Button>

      <Button className="skills-route" {...navbarButton}>
        Habilidades
      </Button>

      <Button className="projects-route" {...navbarButton}>
        Projectos
      </Button>
    </HStack>
  );
}

//estilos del componente
const navbarContainer = {};

const navbarButton = { colorScheme: "blackAlpha", variant: "outline" };
