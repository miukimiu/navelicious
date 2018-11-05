import React from "react";
import { injectGlobal, ThemeProvider } from "styled-components";
import theme from "./config/theme";
import NavExample from "./components/NavExample";
import Api from "./components/Api";

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600');

  body {
    font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <NavExample />
      <Api />
    </React.Fragment>
  </ThemeProvider>
);

export default App;
