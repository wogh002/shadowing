import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Routes from "./routes";
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routes>
        <App />
      </Routes>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

