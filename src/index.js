import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Routes from "./routes";
import { Provider } from 'react-redux';
import store from './store/configureStore';
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routes>
          <App />
        </Routes>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);