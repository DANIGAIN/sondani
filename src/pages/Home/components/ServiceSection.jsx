import React, { useState ,useEffect } from 'react'
import Slider from 'react-slick'
import bd from '../../../assets/frontend/img/blood_drop.png';
import { submitOderHandeler, getBlods } from '../../../api/bladApi';

export default function ServiceSection({ setOrders, orders }) {
  const [blods, setBlods] = useState([]);
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    getBlods().then((data) => setBlods(data))
  }, [])

  return (
    <section className="bg-theme-blue">
      <div className="service-section">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="text-white text-uppercase">our service</h2>
              <Slider {...settings} >

                {blods.map((blod, ind) => (

                  <div className="item" key={ind}>
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={bd}

                        alt="Card image cap"
                        style={{ width: 80, height: 80 }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Blood analysis</h5>
                        <p><strong>provider name: </strong>{blod.name}</p>
                        <p>
                          <strong>group : </strong>{blod.group}
                        </p>
                        <p>
                          <strong>price : </strong>{blod.price} $
                        </p>
                        <p>for details:</p>
                        {/* <p>{blod.info}</p> */}
                        <a href="tel:+880 177 249 538">{blod.phone}</a><br />
                        <a href="#">
                          <button type="button" className="btn"

                            onClick={() => submitOderHandeler(blod, setOrders, orders)}
                          >
                            Make A Booking
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}

              </Slider>
            </div>
          </div>
          {/* <div class="row">
        <div class="card-deck d-flex">
          
          <div class="card">
            <img class="card-img-top" src="frontend/img/blood_drop.png" alt="Card image cap" style="width: 80px;
            height: 80px;">
            <div class="card-body">
              <h5 class="card-title">Blood analysis</h5>
              <p>1 test included</p>
              <p><strong>report:</strong>Same day</p>
              <p><strong>price: </strong>799 tk</p>
              <p>for details:</p>
              <a href="tel:+880 177 249 538">+880 177 249 538</a>
              <a href="#">
                <button type="button" class="btn">Make A Booking</button>
              </a>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="frontend/img/blood_drop.png" alt="Card image cap" style="width: 80px;
            height: 80px;">
            <div class="card-body">
              <h5 class="card-title">Blood analysis</h5>
              <p>1 test included</p>
              <p><strong>report:</strong>Same day</p>
              <p><strong>price: </strong>799 tk</p>
              <p>for details:</p>
              <a href="tel:+880 177 249 538">+880 177 249 538</a>
              <a href="#">
                <button type="button" class="btn">Make A Booking</button>
              </a>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="frontend/img/blood_drop.png" alt="Card image cap" style="width: 80px;
            height: 80px;">
            <div class="card-body">
              <h5 class="card-title">Blood analysis</h5>
              <p>1 test included</p>
              <p><strong>report:</strong>Same day</p>
              <p><strong>price: </strong>799 tk</p>
              <p>for details:</p>
              <a href="tel:+880 177 249 538">+880 177 249 538</a>
              <a href="#">
                <button type="button" class="btn">Make A Booking</button>
              </a>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="frontend/img/blood_drop.png" alt="Card image cap" style="width: 80px;
            height: 80px;">
            <div class="card-body">
              <h5 class="card-title">Blood analysis</h5>
              <p>1 test included</p>
              <p><strong>report:</strong>Same day</p>
              <p><strong>price: </strong>799 tk</p>
              <p>for details:</p>
              <a href="tel:+880 177 249 538">+880 177 249 538</a>
              <a href="#">
                <button type="button" class="btn">Make A Booking</button>
              </a>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="frontend/img/blood_drop.png" alt="Card image cap" style="width: 80px;
            height: 80px;">
            <div class="card-body">
              <h5 class="card-title">Blood analysis</h5>
              <p>1 test included</p>
              <p><strong>report:</strong>Same day</p>
              <p><strong>price: </strong>799 tk</p>
              <p>for details:</p>
              <a href="tel:+880 177 249 538">+880 177 249 538</a>
              <a href="#">
                <button type="button" class="btn">Make A Booking</button>
              </a>
            </div>
          </div>
        </div>
  
        <div class=" col-1 mt-lg-5 mb-lg-5 text-center">
          <a href="#">
            <button type="button" class="btn btn-success">view all</button>
          </a>
        </div>
  
        
  
      </div> */}
        </div>
      </div>
    </section>

  )
}
