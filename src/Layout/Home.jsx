import React from 'react';
import Banner from '../Component/Banner';
import BlogCards from '../Component/BlogCards';
import Newsletter from '../Component/Newsletter';
import Recommended from '../Component/Recommended';
import ReviewSection from '../Component/ReviewSection';
import AboutUs from '../Component/AboutUs';
import ContactUs from '../Component/ContactUs';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <BlogCards></BlogCards>
            <Newsletter></Newsletter>
            <Recommended></Recommended>
            <ReviewSection></ReviewSection>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </>
    );
};

export default Home;