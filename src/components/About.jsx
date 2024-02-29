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
        "Lideré el apartado Back-end de un equipo de 8 integrantes en el desarrollo de un e-commerce para el sector alimenticio, usando SCRUM con sprints de acuerdo a la fecha de entrega de 4 semanas.",
    },
    {
      title: "AlPasoApp - Al Paso.",
      date: "Abr. 2023",
      description:
        "Desarrollo Freelancer de una página de catálogo menú para un negocio local de comida rápida. Se planeaba agregar Back-end para transformarlo en un e-commerce, pero fue cancelado.",
    },

    {
      title: "Actualmente...",
      description:
        "Me encuentro en busqueda constante de proyectos donde pueda seguir aportando mi valor ✨",
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

                <Box>
                  <StepTitle color="var(--accent-100)">{step.title}</StepTitle>
                  <StepDescription fontSize="12px">{step.date}</StepDescription>
                  <StepDescription {...stepperStyles}>
                    {step.description}
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
  mb: { base: "0", lg: "5rem" },
};

const textCointainerStyles = {
  color: "var(--accent-100)",
  fontSize: { base: "11px", md: "13px" },
};

const spanStiles = {
  color: "var(--accent-200)",
  fontWeight: "bold",
};

const titleStyles = {
  color: "var(--accent-100)",
  fontFamily: ["Helvetica Neue", "sans-serif"],
  fontSize: { base: "1rem", md: "1.5rem" },
  letterSpacing: ".2rem",
  textAlign: "start",
  lineHeight: "1",
  mt: "1rem",
};

const stepperContainer = {
  colorScheme: "orange",
  orientation: "vertical",
  size: "sm",
  height: { base: "auto", lg: "200px" },
  gap: { base: 2, md: 4 },
};

const stepperStyles = {
  display: "block",
  flexDirection: { base: "column", lg: "column" },
  color: "var(--accent-200)",
  fontSize: { base: "10px", md: "12px", lg: "13px" },
};
