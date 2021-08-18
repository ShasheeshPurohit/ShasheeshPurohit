import "./Navbar.css"

export default function Navbar(){
    return(
    <nav class="navbar navbar-dark bg-dark navbar-cust">
         <div class="container-fluid">
             <a class="navbar-brand" href="#">
             <i class="fas fa-laptop-code laptop-nav"></i>
            </a>
            <ul className="account-links">
                <li className="account-link"><a className="github-nav social-link" href="https://github.com/ShasheeshPurohit"><i className="fab fa-github"></i></a></li>
                <li className="account-link"><a className="linkedin social-link" href="https://www.linkedin.com/in/shasheeshpurohit/" ><i className="fab fa-linkedin"></i> </a></li>
                <li className="account-link"><a className="twitter social-link" href="https://twitter.com/shasheeshcodes"><i className="fab fa-twitter"></i></a></li>
                <li className="account-link"><a className="youtube social-link" href="https://www.youtube.com/channel/UCcw-crd9Glh46E3LvGyx4kw"><i className="fab fa-youtube"></i></a></li>
            </ul>
        </div>
    </nav>
    );
}