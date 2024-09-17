import { extendTheme } from "@mui/material/styles";

const APP_BAR_HEIGHT = "60px";

const theme = extendTheme({
  heySonCustom: {
    appBarHeight: APP_BAR_HEIGHT,

    palette: {
      highlightColor: "#ce5e46",
    },
  },

  colorSchemes: {
    dark: true,
  },

  components: {},
});

export default theme;
