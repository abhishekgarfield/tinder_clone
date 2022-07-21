import appstore from "../images/appstore.webp"
import playstore from "../images/playstore2.jpg"

const Footer=()=>{
    return(
        <>
            <footer>
                <div className="foot_cont">
                    <ul>
                        <li><b>ABOUT Tinder</b></li>
                        <li>Who we are</li>
                        <li>Blog</li>
                        <li>Work with us</li>
                        <li>Investor relatiosn</li>
                        <li>Report fraud</li>
                    </ul>
                </div>
                <div className="foot_cont">
                    <ul>
                        <li><b>ZOMAVERSE</b></li>
                        <li>Tinder</li>
                        <li>Feeding India</li>
                        <li>Hyperpure</li>
                        <li>Tinderland</li>
                    </ul>
                </div>
                <div className="foot_cont">
                    <ul>
                        <li><b>FOR RESTAURANTS</b></li>
                        <li>Partner with us</li>
                        <li>Apps for you</li>
                    </ul>
                    <ul>
                        <li><b> FOR ENTERPRISES</b></li>
                        <li>Tinder for work</li>
                    </ul>
                </div>
                <div className="foot_cont">
                    <ul>
                        <li><b>LEARN MORE</b></li>
                        <li>Privacy</li>
                        <li>Security</li>
                        <li>Terms</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
                <div className="foot_cont" id="social_link">
                    <ul>
                        <li><b>SOCIAL LINKS</b></li>
                        <li><i className="fa fa-linkedin"></i>
                            <i className="fa fa-instagram"></i>
                            <i className="fa fa-twitter"></i>
                            <i className="fa fa-youtube"></i>
                            <i className="fa fa-facebook"></i>
                        </li>
                        <li><img src={appstore} alt="apple"/></li>
                        <li><img src={playstore} alt="apple"/></li>
                    </ul>
                </div>
                <hr style={{clear:"both"}}></hr>
                <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and
                    Content Policies. All trademarks are properties of their respective owners.
                    2021-2022  &copy; abhishekgarfield Ltd. All rights reserved.</p>
            </footer>
        </>
    );
}

export default Footer