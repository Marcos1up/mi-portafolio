//importaciones externas
import {
  HStack,
  Text,
  VStack,
  Heading,
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

export default function About() {
  const steps = [
    {
      title: "HeladitosApp - Henry Bootcamp.",
      date: "Oct. 2022 - Nov. 2022",
      description:
        "Lideré el apartado Back-end de un equipo de 8 integrantes en el ",
      description2:
        "desarrollo de un e-commerce para el sector alimenticio, usando",
      description3:
        " SCRUM con sprints de acuerdo a la fecha de entrega de 4 semanas.",
    },
    {
      title: "AlPasoApp - Al Paso.",
      date: "Abr. 2023",
      description:
        "Desarrollo Freelancer de una página de catálogo menú para un ",
      description2:
        "negocio local de comida rápida. Se planeaba agregar Back-end",
      description3: " para transformarlo en un e-commerce, pero fue cancelado.",
    },

    {
      title: "Actualmente...",
      description: "Me encuentro en busqueda constante de proyectos donde ",
      description2: "pueda seguir aportando mi valor ✨",
    },
  ];

  //useSteps() es un hook de chakraui
  const { activeStep } = useSteps({
    index: 2,
    count: steps.length,
  });

  return (
    <VStack id="about" className="about-container" {...aboutContainer}>
      <VStack className="text-container" {...textCointainerStyles}>
        <Text>
          Me llamo Marcos Soria, un apasionado desarrollador de software con
          inclinación hacia el BackEnd y experiencia en la
          <Text as="span" {...spanStiles}>
            {" "}
            gestión de proyectos, enfocándome en el progreso y la innovación
            tecnológica.
          </Text>
        </Text>
        <Text>
          <Text as="span" {...spanStiles}>
            He liderado proyectos destacados como El Paso App y Heladitos App
          </Text>
          . Estas experiencias me han permitido dominar mis habilidades como la
          capacidad de trabajo en equipo, perseverancia y resiliencia.
        </Text>

        <Text>
          Aspiro a unirme a retos que prueben mis habilidades y promuevan el
          avance tecnológico contribuyendo a proyectos desafiantes.{" "}
          <Text as="span" {...spanStiles}>
            Estoy listo para llevar mi experiencia a nuevos horizontes y crecer
            profesionalmente.
          </Text>
        </Text>
      </VStack>

      <VStack className="experience-container">
        <Heading as="h1" className="experience-title" {...titleStyles}>
          💼 Experiencia
        </Heading>

        <HStack className="experience-stepper" p={5}>
          <Stepper index={activeStep} {...stepperContainer}>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus complete={<StepIcon />} />
                </StepIndicator>

                <Box flexShrink="0">
                  <StepTitle color="var(--accent-100)">{step.title}</StepTitle>
                  <StepDescription fontSize="12px">{step.date}</StepDescription>
                  <StepDescription color="var(--accent-200)">
                    {step.description}
                  </StepDescription>
                  <StepDescription color="var(--accent-200)">
                    {step.description2}
                  </StepDescription>
                  <StepDescription color="var(--accent-200)" mb="10px">
                    {step.description3}
                  </StepDescription>
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </HStack>
      </VStack>
    </VStack>
  );
}

//estilos del componente
const aboutContainer = {
  display: "flex",
  flexDirection: "column",
};

const textCointainerStyles = {
  color: "var(--accent-100)",
  fontSize: "15px",
};

const spanStiles = {
  color: "var(--accent-200)",
  fontWeight: "bold",
};

const titleStyles = {
  color: "var(--accent-100)",
  fontFamily: ["Helvetica Neue", "sans-serif"],
  fontSize: "1.5rem",
  letterSpacing: ".2rem",
  textAlign: "start",
  lineHeight: "1",
  mt: "1rem",
};

const stepperContainer = {
  colorScheme: "orange",
  orientation: "vertical",
  size: "md",
  height: "300px",
  gap: "0",
};
