import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/rooms')
            .then(res => res.json())
            .then(data => setRooms(data));
    }, []);


    return (
        <>
            <div className="hero-wrap" style={{ backgroundImage: "url('/images/bg_3.jpg')" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text d-flex align-itemd-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
                            <div className="text">
                                <p className="breadcrumbs mb-2"><span className="mr-2"><Link to="/">Home</Link></span> <span>Rooms</span></p>
                                <h1 className="mb-4 bread">Rooms</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section ftco-no-pb ftco-room">
                <div className="container-fluid px-0">
                    <div className="row no-gutters justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <span className="subheading">Harbor Lights Rooms</span>
                            <h2 className="mb-4">Hotel Master's Rooms</h2>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        {rooms.map((room, index) => (
                            <div className="col-lg-6" key={room.id}>
                                <div className="room-wrap d-md-flex ftco-animate fadeInUp ftco-animated">
                                    {/* Alternate image position based on index if desired */}
                                    <a href="#" className={`img ${index % 2 !== 0 ? 'order-md-last' : ''}`} style={{ backgroundImage: `url('${room.image_url}')` }}></a>
                                    <div className={`half ${index % 2 !== 0 ? 'right-arrow' : 'left-arrow'} d-flex align-items-center`}>
                                        <div className="text p-4 text-center">
                                            <p className="star mb-0"><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span></p>
                                            <p className="mb-0"><span className="price mr-1">${room.price}</span> <span className="per">per night</span></p>
                                            <h3 className="mb-3"><Link to={`/rooms/${room.slug}`}>{room.name}</Link></h3>
                                            <p className="pt-1"><Link to={`/rooms/${room.slug}`} className="btn-custom px-3 py-2 rounded">View Details <span className="icon-long-arrow-right"></span></Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Rooms;