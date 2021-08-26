import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Routes from "./routes";
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routes>
        <Provider store={configureStore}>
          <App />
        </Provider>
      </Routes>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

