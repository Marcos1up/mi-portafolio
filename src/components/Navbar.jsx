//importaciones externas
//import { useState } from "react";
import { Button, HStack } from "@chakra-ui/react";

export default function Navbar() {
  //const [selected, setSelected] = useState("");

  return (
    <HStack className="navbar-container">
      <Button
        className="about-route"
        colorScheme="blackAlpha"
        variant="outline"
      >
        Sobre mí
      </Button>
      <Button
        className="skills-route"
        colorScheme="blackAlpha"
        variant="outline"
      >
        Habilidades
      </Button>
      <Button
        className="experience-route"
        colorScheme="blackAlpha"
        variant="outline"
      >
        Experiencia
      </Button>
      <Button
        className="projects-route"
        colorScheme="blackAlpha"
        variant="outline"
      >
        Projectos
      </Button>
    </HStack>
  );
}

//estilos del componente
