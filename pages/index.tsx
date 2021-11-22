import React, { FC } from "react";
import Hero from "../components/Hero/Hero";
import FormContainer from "../components/FormContainer/FormContainer";
import Statistics from "../components/Statistics/Statistics";
import Boost from "../components/Boost/Boost";

const Home: FC = () => {
    return (
        <>
            <main className="acitve">
                <Hero />
                <FormContainer />
                <Statistics />
                <Boost />
            </main>
        </>
    );
};

export default Home;
