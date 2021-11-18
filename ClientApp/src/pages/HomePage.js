import React from "react"
import '../styles/StyleSheet.css';
import StarWhiteLogo from "../assets/images/Star-shlWit.png";
class HomePage extends React.Component {
    render() {
        return (
            <>
                <div class="containerHome">
                    <div class="text">
                        <h1>Welkom op de Star-Shl web-app</h1>
                        <p>Op deze website kan je informatie vinden over bloedprikken en de dichtsbijzijnde locaties van Star-Shl </p>
                    </div>
                </div>
                <div class="inner-container">
                    <p style={{paddingBottom: "15px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt dolor sed diam ullamcorper aliquet. Phasellus bibendum enim quis commodo commodo. Nullam facilisis bibendum tincidunt. Quisque iaculis magna id velit lobortis pretium. Cras at mi eu mauris luctus porta dapibus at erat. Sed vehicula tincidunt risus, vel ornare purus. Nam egestas lacus sed velit volutpat, non maximus enim dignissim. Vestibulum quis risus finibus, condimentum arcu a, accumsan erat. Nam lacinia neque nec urna molestie, quis suscipit quam eleifend. Aenean nisl lacus, mollis vel nibh quis, sollicitudin finibus ligula.</p>
                    <p style={{paddingBottom: "15px"}}>In id quam et turpis cursus feugiat. Nam dapibus fringilla massa, et volutpat lacus ultricies sed. Nam ullamcorper gravida nisl, sit amet gravida ligula interdum ac. Nunc quis lectus commodo, mattis quam at, malesuada arcu. In eu magna odio. Donec id mi vel mauris auctor fermentum vitae a odio. Duis eu vulputate neque, consequat condimentum sapien. In eu lacus imperdiet, pharetra erat vel, euismod diam.</p>
                </div>
                
                
                <footer>
                    <div class="footerPaddingTop footerPaddingBot">
                        <img src={StarWhiteLogo} class="footerImage" />
                        <div class="social-wrapper">
                            <p>Placeholder for images</p>
                            <a href="https://www.facebook.com/Star-shl-255051755175942">
                                F
                            </a>
                            <a href="https://twitter.com/StarSHL_">
                                T
                            </a>
                            <a href="https://www.linkedin.com/company/18022929/">
                                L
                            </a>
                        </div>
                        <p class="footerPaddingTop footerPaddingBot">
                            <strong>
                            Etten-Leur
                            </strong>
                            <br/>
                            Bredaseweg 165, 4872 LA
                            <br/>
                            Postbus 228, 4870 AE
                        </p>
                        <p class="footerPaddingBot">
                            <strong>
                                Etten-Leur
                            </strong>
                            <br />
                            Bredaseweg 165, 4872 LA
                            <br />
                            Postbus 228, 4870 AE
                        </p>
                    </div>
                </footer>
            </>
        )     
    }
}

export default HomePage;