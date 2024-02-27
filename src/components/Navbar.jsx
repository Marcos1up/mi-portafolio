//importaciones externas
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Button, HStack } from "@chakra-ui/react";

export default function Navbar({ setActiveComponent }) {
  Navbar.propTypes = {
    setActiveComponent: PropTypes.func.isRequired,
  };

  const [active, setActive] = useState("About");
  const containerRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({});

  const handleSetActiveComponent = (component) => {
    setActiveComponent(component);
    setActive(component);
  };

  useEffect(() => {
    const activeBtn = containerRef.current.querySelector(
      `.${active.toLowerCase()}-route`
    );
    if (activeBtn) {
      const { offsetLeft, clientWidth, clientHeight } = activeBtn;
      setUnderlineStyle({
        left: `${offsetLeft}px`,
        width: `${clientWidth}px`,
        height: `${clientHeight}px`,
        backgroundColor: "var(--primary-100)",
        borderRadius: "8px",
        opacity: "25%",
        bottom: "0",
        position: "absolute",
        transition: "all 0.3s ease",
      });
    }
  }, [active]);

  return (
    <HStack
      className="navbar-container"
      ref={containerRef}
      {...navbarContainer}
    >
      <Button
        className="about-route"
        variant={active === "About" ? "solid" : "outline"}
        onClick={() => handleSetActiveComponent("About")}
        {...navbarButton}
      >
        Sobre mí
      </Button>

      <Button
        className="skills-route"
        variant={active === "Skills" ? "solid" : "outline"}
        onClick={() => handleSetActiveComponent("Skills")}
        {...navbarButton}
      >
        Habilidades
      </Button>

      <Button
        className="projects-route"
        variant={active === "Projects" ? "solid" : "outline"}
        onClick={() => handleSetActiveComponent("Projects")}
        {...navbarButton}
      >
        Proyectos
      </Button>
      <Box style={underlineStyle} />
    </HStack>
  );
}

//estilos del componente
const navbarContainer = {
  spacing: 4,
  position: "relative",
};

const navbarButton = {
  colorScheme: "WhiteAlpha",
  color: "var(--primary-200)",
  borderColor: "var(--primary-200)",
  minW: "118px",
};
