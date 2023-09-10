import React from 'react'
import BulidingImage from '../../../assets/frontend/img/building.png';

export default function AboutSection() {
  return (
    <section>
  <div className="about-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h3 className="text-center">We provide the best medical care</h3>
          <h2 className="text-center">About us</h2>
        </div>
        <div className="col-lg-6">
          <img src={BulidingImage} alt="no image" />
        </div>
        <div className="col-lg-6">
          <div className="card-body">
            <p className="card-title">
              We are committed to provide affordable services, without any
              compromise on the quality of service so that you are able to
              remain happy.
            </p>
            <p>
              <strong>Name:</strong>Sondhani Diagnostic center{" "}
            </p>
            <p>
              <strong>Established: </strong>2nd may, 2005
            </p>
            <p>
              <strong>founder :</strong>dr. jone doe
            </p>
            <p>
              <strong>committee: </strong>shandhani development organisation
            </p>
            <p>
              <strong>President:</strong>dr. jone doe
            </p>
            <p>
              <strong>Address :</strong>opposite of 250 Bed hospital, sonadanga,
              khulna, bangladesh
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
