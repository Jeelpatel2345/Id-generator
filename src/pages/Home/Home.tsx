import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/hero";
import Features from "../../components/home/Features";
import FormatCards from "../../components/home/FormatCards";
import CTA from "../../components/home/CTA";
import Footer from "../../components/layout/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <FormatCards />
            <CTA />
            <Footer />
        </>
    );
};

export default Home;