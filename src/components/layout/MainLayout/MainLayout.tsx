import { Outlet } from "react-router";
// import Footer from "../components/Footer/Footer";
// import SocialLinks from "../components/SocialLinks/SocialLinks";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import Header from "../../ui/Header/Header";
import Footer from "../../ui/Footer/Footer";

export default function MainLayout() {
    return (
        <>
            <ScrollToTop />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />

            {/* <SocialLinks variant="floating" /> */}
        </>
    );
}