import Banner from "../../../../shared/components/Banner";
import AboutIngredient from "./AboutIngredient";
import AboutIntro from "./AboutIntro";
import AboutStep from "./AboutStep";
import AboutReviewer from "./AboutReviewer";
import AboutSlideImg from "./AboutSlideImg";
import { useEffect } from "react";

function About() {
    useEffect(() => {
        window.scrollTo({top: 0});
    },[])
    return (
        <>
            <section className="about">
                <Banner title="About" />
                <AboutIntro/>
                <AboutStep/>
                <AboutIngredient/>
                <AboutReviewer/>
                <AboutSlideImg/>
            </section>
        </>
    );
}

export default About;