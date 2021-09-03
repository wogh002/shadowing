import React, { useEffect } from "react";
import Header from "./components/layouts/landing/header";
import Main from "./components/layouts/landing/main";
import Footer from "./components/layouts/landing/footer";
import { useDispatch } from 'react-redux';
import { LOAD_USER_REQUEST } from './reducers/user';
function App() {
  const dispatch = useDispatch();
  useEffect(() => { //새로고침 할때마다 && '/' 경로 유입 될 때마다LOAD_USER 
    dispatch({ type: LOAD_USER_REQUEST });
  }, []);
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
export default App;
