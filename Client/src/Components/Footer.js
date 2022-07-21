import appstore from "../images/appstore.webp"
import playstore from "../images/playstore2.jpg"

const Footer = () => {
    return (
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
                <p>Single people, listen up: If you’re looking for love, want to start dating, or just keep it casual,
                    you need to be on Tinder. With over 55 billion matches made, it’s the place to be to meet your next
                    best match. Let’s be real, the dating landscape looks very different today, as most people are
                    meeting online. With Tinder, the world’s most popular free dating app, you have millions of other
                    single people at your fingertips and they’re all ready to meet someone like you. Whether you’re
                    straight or in the LGBTQIA community, Tinder’s here to bring you all the sparks.
                </p>
                <p>
                    There really is something for everyone on Tinder. Want to get into a relationship? You got it.
                    Trying to find some new friends? Say no more. New kid on campus and looking to make the most of your
                    college experience? Tinder U’s got you covered. Tinder isn’t your average dating site — it’s the
                    most diverse dating app, where adults of all backgrounds and experiences are invited to make
                    connections, memories, and everything in between.
                </p>
                <p>
                    There really is something for everyone on Tinder. Want to get into a relationship? You got it.
                    Trying to find some new friends? Say no more. New kid on campus and looking to make the most of your
                    college experience? Tinder U’s got you covered. Tinder isn’t your average dating site — it’s the
                    most diverse dating app, where adults of all backgrounds and experiences are invited to make
                    connections, memories, and everything in between.
                </p>
                <hr style={{clear: "both"}}></hr>
                <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and
                    Content Policies. All trademarks are properties of their respective owners.
                    2021-2022  &copy; abhishekgarfield Ltd. All rights reserved.</p>
            </footer>
        </>
    );
}

export default Footer