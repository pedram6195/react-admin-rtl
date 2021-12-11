import {
  createMuiTheme,
  jssPreset,
  StylesProvider
} from "@material-ui/core/styles";
import { create } from "jss";
import rtl from "jss-rtl";

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export const theme = createMuiTheme({
  direction: "rtl",
  typography: {
    fontFamily: [
      "Regular",
      "UltraLight",
      "Light",
      "Medium",
      "Bold",
      "Black"
    ].join(",")
  }
});

export const RTLProvider = ({ children }) => (
  <StylesProvider jss={jss}>{children}</StylesProvider>
);
