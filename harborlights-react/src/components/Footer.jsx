const Footer = () => {
    return (
        <footer className="ftco-footer ftco-section img" style={{ backgroundImage: "url('/images/bg_4.jpg')" }}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Harbor Lights</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...</p>
                            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                                <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                                <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
                            </ul>
                        </div>
                    </div>
                    {/* ... Add other columns here from footer HTML ... */}
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>Copyright &copy; {new Date().getFullYear()} All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;