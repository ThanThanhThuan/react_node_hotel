import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <div className="hero-wrap" style={{ backgroundImage: "url('/images/bg_3.jpg')" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text d-flex align-itemd-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
                            <div className="text">
                                <p className="breadcrumbs mb-2"><span className="mr-2"><Link to="/">Home</Link></span> <span>About Us</span></p>
                                <h1 className="mb-4 bread">About Harbor Lights Hotel</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <span className="subheading">Welcome to Harbor Lights Hotel</span>
                            <h2 className="mb-4">You'll Never Want To Leave</h2>
                        </div>
                    </div>
                    <div className="row d-flex">
                        <div className="col-md pr-md-1 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services py-4 d-block text-center">
                                <div className="d-flex justify-content-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="flaticon-reception-bell"></span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading mb-3">Friendly Service</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md px-md-1 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services active py-4 d-block text-center">
                                <div className="d-flex justify-content-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="flaticon-serving-dish"></span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading mb-3">Get Breakfast</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md px-md-1 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services py-4 d-block text-center">
                                <div className="d-flex justify-content-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="flaticon-car"></span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading mb-3">Transfer Services</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md px-md-1 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services py-4 d-block text-center">
                                <div className="d-flex justify-content-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="flaticon-spa"></span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading mb-3">Suits &amp; SPA</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md pl-md-1 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services py-4 d-block text-center">
                                <div className="d-flex justify-content-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="ion-ios-bed"></span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading mb-3">Cozy Rooms</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section ftco-wrap-about ftco-no-pt ftco-no-pb">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-7 order-md-last d-flex">
                            <div className="img img-1 mr-md-2 ftco-animate" style={{ backgroundImage: "url('/images/about-1.jpg')" }}></div>
                            <div className="img img-2 ml-md-2 ftco-animate" style={{ backgroundImage: "url('/images/about-2.jpg')" }}></div>
                        </div>
                        <div className="col-md-5 wrap-about pb-md-3 ftco-animate pr-md-5 pb-md-5 pt-md-4">
                            <div className="heading-section mb-4 my-5 my-md-0">
                                <span className="subheading">About Harbor Lights Hotel</span>
                                <h2 className="mb-4">Harbor Lights Hotel the Most Recommended Hotel All Over the World</h2>
                            </div>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p><Link to="/rooms" className="btn btn-secondary rounded">Reserve Your Room Now</Link></p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimony-section">
                <div className="container">
                    <div className="row no-gutters ftco-animate justify-content-center">
                        <div className="col-md-5 d-flex">
                            <div className="testimony-img aside-stretch-2" style={{ backgroundImage: "url('/images/testimony-img.jpg')" }}></div>
                        </div>
                        <div className="col-md-7 py-5 pl-md-5">
                            <div className="py-md-5">
                                <div className="heading-section ftco-animate mb-4">
                                    <span className="subheading">Testimony</span>
                                    <h2 className="mb-0">Happy Customer</h2>
                                </div>
                                <div className="carousel-testimony owl-carousel ftco-animate">
                                    <div className="item">
                                        <div className="testimony-wrap pb-4">
                                            <div className="text">
                                                <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                            </div>
                                            <div className="d-flex">
                                                <div className="user-img" style={{ backgroundImage: "url('/images/person_1.jpg')" }}></div>
                                                <div className="pos ml-3">
                                                    <p className="name">Gerald Hodson</p>
                                                    <span className="position">Businessman</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Additional items would be here */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="instagram ftco-section ftco-no-pb">
                <div className="container-fluid">
                    <div className="row no-gutters justify-content-center pb-5">
                        <div className="col-md-7 text-center heading-section ftco-animate">
                            <span className="subheading">Photos</span>
                            <h2><span>Instagram</span></h2>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <div key={num} className="col-sm-12 col-md ftco-animate">
                                <a href={`/images/insta-${num}.jpg`} className="insta-img image-popup" style={{ backgroundImage: `url('/images/insta-${num}.jpg')` }}>
                                    <div className="icon d-flex justify-content-center">
                                        <span className="icon-instagram align-self-center"></span>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;