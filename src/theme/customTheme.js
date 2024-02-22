import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    brand: {
      /* Background */
      bg_100: "#eff3f4",
      bg_200: "#f9fafc",
      bg_300: "#ebe9ff",

      /* Primary */
      primary_100: "#f78a1b",
      primary_200: "#fdac21",
      primary_300: "#ffcd33",
      primary_400: "#fef1cc",

      /* Accent */
      accent_100: "#797c83",
      accent_200: "#878789",

      /* Text */
      text_100: "#ffffff",
      text_200: "#c4c3c3",
    },
    //otras personalizaciones de colores
  },
  fonts: {
    title: "Helvetica Neue, sans-serif",
    subtitle: "Roboto",
    body: "Manrope, sans-serif",
  },
  components: {
    Button: {
      buttonProps: {
        colorScheme: "blackAlpha",
        variant: "outline",
        _hover: {
          borderColor: "var(--primary-200)",
          color: "var(--primary-200)",
        },
      },
      copyButtonProps: {
        colorScheme: "green",
        variant: "solid",
      },
    },
    //personalizar más componentes
  },
  //otras configuraciones del tema
});

export default customTheme;
