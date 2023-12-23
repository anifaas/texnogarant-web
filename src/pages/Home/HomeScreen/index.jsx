import Contact from "../ContactUs"
import Footer from "../Footer"
import HeroSection from "../HeroSection"
import News from "../News"
import OurProduct from "../OurProducts"
import PartersIntro from "../Partners"
export default function Home() {
    return(
        <>
            <HeroSection />
            <OurProduct />
            <News/>
            <PartersIntro/>
            <Contact/>
            <Footer />
        </>
    )
}