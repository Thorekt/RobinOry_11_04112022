import ThumbList from "../components/ThumbList";
import bannerPng  from "../assets/home.png";
import Banner from "../components/Banner";
import React from "react";

function Home(){
    const title ="Chez vous, partout et ailleurs";

    return (
        <React.Fragment>
            <Banner imgSrc={bannerPng} imgAlt={title} title={title}/>
            <ThumbList />
        </React.Fragment>
    );
}

export default Home;