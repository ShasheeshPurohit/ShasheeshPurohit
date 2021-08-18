import "./Footer.css"

export default function Footer(){
    return (
        <footer className="container-fluid">
             <div className="contact">
                 <p>Contact:
                     <br/>
                     shasheesh.purohit15@gmail.com
                     <br/>
                   +91-8769287338</p>
             </div>
             <ul className="footer-links">
             <li className="footer-link"><a className="github-nav social-link" href="https://github.com/ShasheeshPurohit"><i className="fab fa-github"></i></a></li>
                <li className="footer-link"><a className="linkedin social-link" href="https://www.linkedin.com/in/shasheeshpurohit/" ><i className="fab fa-linkedin"></i> </a></li>
                <li className="footer-link"><a className="twitter social-link" href="https://twitter.com/shasheeshcodes"><i className="fab fa-twitter"></i></a></li>
                <li className="footer-link"><a className="youtube social-link" href="https://www.youtube.com/channel/UCcw-crd9Glh46E3LvGyx4kw"><i className="fab fa-youtube"></i></a></li>
             </ul>
        </footer>
    );
}