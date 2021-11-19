import React, { FC } from "react";
import Hero from "../components/Hero/Hero";
import FormContainer from "../components/FormContainer/FormContainer";

const Home: FC = () => {
    return (
        <>
            <main>
                <Hero />
                <FormContainer />
            </main>
        </>
    );
};

export default Home;
