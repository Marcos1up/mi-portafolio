//importaciones externas
import { HStack, Text, VStack } from "@chakra-ui/react";

export default function About() {
  return (
    <HStack className="about-container">
      <VStack>
        <Text>
          Me llamo Marcos Soria, un apasionado desarrollador de software con
          inclinación hacia el Back-End y experiencia en
          <Text as="span">
            {" "}
            la gestión de proyectos, enfocándome en el progreso y la innovación
            tecnológica.
          </Text>
        </Text>
        <Text>
          <Text as="span">
            He liderado proyectos destacados como El Paso App y Heladitos App
          </Text>
          . Estas experiencias me han permitido dominar mis habilidades como la
          capacidad de trabajo en equipo, perseverancia y resiliencia.
        </Text>

        <Text>
          Aspiro a unirme a retos que prueben mis habilidades y promuevan el
          avance tecnológico contribuyendo a proyectos desafiantes.{" "}
          <Text as="span">
            Estoy listo para llevar mi experiencia a nuevos horizontes y crecer
            profesionalmente.
          </Text>
        </Text>
      </VStack>
    </HStack>
  );
}

//estilos del componente
