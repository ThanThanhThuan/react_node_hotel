import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const RoomSingle = () => {
    const { slug } = useParams(); // Get slug from URL
    const [room, setRoom] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/rooms/${slug}`)
            .then(res => res.json())
            .then(data => setRoom(data))
            .catch(err => console.error(err));
    }, [slug]);

    if (!room) return <div className="text-center p-5">Loading Room Details...</div>;

    return (
        <>
            <div className="hero-wrap" style={{ backgroundImage: "url('/images/bg_3.jpg')" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text d-flex align-itemd-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
                            <div className="text">
                                <p className="breadcrumbs mb-2">
                                    <span className="mr-2"><Link to="/">Home</Link></span>
                                    <span className="mr-2"><Link to="/rooms">Rooms</Link></span>
                                    <span>{room.name}</span>
                                </p>
                                <h1 className="mb-4 bread">Room Details</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-md-12 ftco-animate fadeInUp ftco-animated">
                                    {/* Image Slideshow (Static for now, or use room.image_url) */}
                                    <div className="room-img" style={{ backgroundImage: `url('${room.image_url}')` }}></div>
                                </div>
                                <div className="col-md-12 room-single mt-4 mb-5 ftco-animate fadeInUp ftco-animated">
                                    <h2 className="mb-4">{room.name} <span>- ({room.available_quantity} Available rooms)</span></h2>
                                    <p>Description text goes here...</p>
                                    <div className="d-md-flex mt-5 mb-5">
                                        <ul className="list">
                                            <li><span>Max Adults:</span> {room.max_adults} Persons</li>
                                            <li><span>Size:</span> {room.size}</li>
                                        </ul>
                                        <ul className="list ml-md-5">
                                            <li><span>View:</span> {room.view_type}</li>
                                            <li><span>Bed:</span> {room.bed_count}</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-12 properties-single ftco-animate mb-5 mt-4">
                                    <h4 className="mb-4">Review &amp; Ratings</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <form method="post" className="star-rating">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                                        <p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i> 100 Ratings</span></p>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck2" />
                                                    <label className="form-check-label" htmlFor="exampleCheck2">
                                                        <p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star-o"></i> 30 Ratings</span></p>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck3" />
                                                    <label className="form-check-label" htmlFor="exampleCheck3">
                                                        <p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star-o"></i><i className="icon-star-o"></i> 5 Ratings</span></p>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck4" />
                                                    <label className="form-check-label" htmlFor="exampleCheck4">
                                                        <p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star-o"></i><i className="icon-star-o"></i><i className="icon-star-o"></i> 0 Ratings</span></p>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck5" />
                                                    <label className="form-check-label" htmlFor="exampleCheck5">
                                                        <p className="rate"><span><i className="icon-star"></i><i className="icon-star-o"></i><i className="icon-star-o"></i><i className="icon-star-o"></i><i className="icon-star-o"></i> 0 Ratings</span></p>
                                                    </label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="col-lg-4 sidebar ftco-animate pl-md-5">
                            <div className="sidebar-box">
                                <form action="#" className="search-form">
                                    <div className="form-group">
                                        <span className="icon ion-ios-search"></span>
                                        <input type="text" className="form-control" placeholder="Search..." />
                                    </div>
                                </form>
                            </div>
                            <div className="sidebar-box ftco-animate">
                                <div className="categories">
                                    <h3>Categories</h3>
                                    <li><a href="#">Properties <span>(12)</span></a></li>
                                    <li><a href="#">Home <span>(22)</span></a></li>
                                    <li><a href="#">House <span>(37)</span></a></li>
                                    <li><a href="#">Villa <span>(42)</span></a></li>
                                    <li><a href="#">Apartment <span>(14)</span></a></li>
                                    <li><a href="#">Condominium <span>(140)</span></a></li>
                                </div>
                            </div>

                            <div className="sidebar-box ftco-animate">
                                <h3>Recent Blog</h3>
                                <div className="block-21 mb-4 d-flex">
                                    <a className="blog-img mr-4" style={{ backgroundImage: "url('/images/image_1.jpg')" }}></a>
                                    <div className="text">
                                        <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                        <div className="meta">
                                            <div><a href="#"><span className="icon-calendar"></span> Oct 30, 2019</a></div>
                                            <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                                            <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-21 mb-4 d-flex">
                                    <a className="blog-img mr-4" style={{ backgroundImage: "url('/images/image_2.jpg')" }}></a>
                                    <div className="text">
                                        <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                        <div className="meta">
                                            <div><a href="#"><span className="icon-calendar"></span> Oct 30, 2019</a></div>
                                            <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                                            <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-21 mb-4 d-flex">
                                    <a className="blog-img mr-4" style={{ backgroundImage: "url('/images/image_3.jpg')" }}></a>
                                    <div className="text">
                                        <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                        <div className="meta">
                                            <div><a href="#"><span className="icon-calendar"></span> Oct 30, 2019</a></div>
                                            <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                                            <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="sidebar-box ftco-animate">
                                <h3>Tag Cloud</h3>
                                <div className="tagcloud">
                                    <a href="#" className="tag-cloud-link">dish</a>
                                    <a href="#" className="tag-cloud-link">menu</a>
                                    <a href="#" className="tag-cloud-link">food</a>
                                    <a href="#" className="tag-cloud-link">sweet</a>
                                    <a href="#" className="tag-cloud-link">tasty</a>
                                    <a href="#" className="tag-cloud-link">delicious</a>
                                    <a href="#" className="tag-cloud-link">desserts</a>
                                    <a href="#" className="tag-cloud-link">drinks</a>
                                </div>
                            </div>

                            <div className="sidebar-box ftco-animate">
                                <h3>Paragraph</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RoomSingle;