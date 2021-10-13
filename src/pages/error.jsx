import React from 'react';
import Header from '../components/layouts/landing/header';
import Footer from '../components/layouts/landing/footer';
import PageNotFound from '../components/layouts/error/pageNotFound';
const Error = () => (
    <>
        <Header />
        <PageNotFound />
        <Footer />
    </>
);
export default Error;