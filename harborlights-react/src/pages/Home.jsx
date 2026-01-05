import { useState, useEffect } from 'react'; // Import hooks
import { Link } from 'react-router-dom';
import BookingForm from '../components/BookingForm';

const Home = () => {
    const [featuredRooms, setFeaturedRooms] = useState([]);

    // Fetch rooms on load
    useEffect(() => {
        fetch('http://localhost:5000/api/rooms')
            .then(res => res.json())
            .then(data => {
                // Optional: limit to 6 rooms or show all
                setFeaturedRooms(data);
            })
            .catch(err => console.error(err));
    }, []);
    return (
        <>
            <div className="hero">
                <section className="home-slider owl-carousel">
                    <div className="slider-item" style={{ backgroundImage: "url('/images/bg_1.jpg')" }}>
                        <div className="overlay"></div>
                        <div className="container">
                            <div className="row no-gutters slider-text align-items-center justify-content-end">
                                <div className="col-md-6 ftco-animate">
                                    <div className="text">
                                        <h2>More than a hotel... an experience</h2>
                                        <h1 className="mb-3">Hotel for the whole family, all year round.</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-item" style={{ backgroundImage: "url('/images/bg_2.jpg')" }}>
                        <div className="overlay"></div>
                        <div className="container">
                            <div className="row no-gutters slider-text align-items-center justify-content-end">
                                <div className="col-md-6 ftco-animate">
                                    <div className="text">
                                        <h2>Harbor Lights Hotel &amp; Resort</h2>
                                        <h1 className="mb-3">It feels like staying in your own home.</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="ftco-booking ftco-section ftco-no-pt ftco-no-pb">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-12">
                            <section className="ftco-booking ftco-section ftco-no-pt ftco-no-pb">
                                <div className="container">
                                    <div className="row no-gutters">
                                        <div className="col-lg-12">
                                            <BookingForm />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>

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
                                    {/* Item 1 */}
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
                                    {/* Add other items as needed */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section ftco-no-pb ftco-room">
                <div className="container-fluid px-0">
                    <div className="row no-gutters justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
                            <span className="subheading">Harbor Lights Rooms</span>
                            <h2 className="mb-4">Hotel Master's Rooms</h2>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        {/* Map through the rooms fetched from DB */}
                        {featuredRooms.map((room, index) => (
                            <div className="col-lg-6" key={room.id}>
                                <div className="room-wrap d-md-flex ftco-animate">
                                    {/* Logic to alternate image position based on index (Left/Right) */}
                                    <a href="#" className={`img ${index % 2 !== 0 ? 'order-md-last' : ''}`} style={{ backgroundImage: `url('${room.image_url}')` }}></a>
                                    <div className={`half ${index % 2 !== 0 ? 'right-arrow' : 'left-arrow'} d-flex align-items-center`}>
                                        <div className="text p-4 text-center">
                                            <p className="star mb-0"><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span></p>
                                            <p className="mb-0"><span className="price mr-1">${room.price}</span> <span className="per">per night</span></p>
                                            <h3 className="mb-3"><Link to={`/rooms/${room.slug}`}>{room.name}</Link></h3>
                                            <p className="pt-1">
                                                {/* THIS IS THE UPDATED DYNAMIC LINK */}
                                                <Link to={`/rooms/${room.slug}`} className="btn-custom px-3 py-2 rounded">
                                                    View Details <span className="icon-long-arrow-right"></span>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="ftco-section ftco-menu bg-light">
                <div className="container-fluid px-md-4">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <span className="subheading">Restaurant</span>
                            <h2>Restaurant</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-xl-4 d-flex">
                            <div className="pricing-entry rounded d-flex ftco-animate">
                                <div className="img" style={{ backgroundImage: "url('/images/menu-1.jpg')" }}></div>
                                <div className="desc p-4">
                                    <div className="d-md-flex text align-items-start">
                                        <h3><span>Grilled Crab with Onion</span></h3>
                                        <span className="price">$20.00</span>
                                    </div>
                                    <div className="d-block">
                                        <p>A small river named Duden flows by their place and supplies</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Add more menu items here */}
                    </div>
                </div>
            </section>

            {/* Instagram Section (Reusable) */}
            <section className="instagram">
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

export default Home;