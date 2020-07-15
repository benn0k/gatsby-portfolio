import React from "react";
import Nav from '../components/nav';
import PageWrapper from "../components/pagewrapper";
import Title from "../components/title";
import Bio from "../components/bio";
import Carousel from "../components/carousel";
import Skills from "../components/skills";
import Footer from "../components/footer";

export default function About() {
    return (
        <div>
            <Nav />
            <PageWrapper>
                <Title name="About" />
                <div style={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap`, justifyContent: `space-between` }}>
                    <Bio />
                    <Carousel/>
                    <Skills />
                </div>
            </PageWrapper>
            <Footer />
        </div>
    );
}