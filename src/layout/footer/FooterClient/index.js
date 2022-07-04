import FooterBottom from "./FooterBottom";
import FooterCenter from "./FooterCenter";
import FooterTop from "./FooterTop";

function FooterClient() {
    return (
        <>
            <footer className="footer">
                <div className="container-plugin">
                    <FooterTop/>
                    <FooterCenter/>
                    <FooterBottom/>
                </div>
            </footer>
        </>
    );
}

export default FooterClient;