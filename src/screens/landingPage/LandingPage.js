import React, { Component } from "react";
import Navbar from "../../components/navBar/Navbar";
import bgImg from "../../assets/Group 7.png";
import "./LandingPageStyles.css";
import ServicesCard from "../../components/servicesCard/ServicesCard";
import consultImg from "../../assets/consult.png";
import diagImg from "../../assets/diag.png";
import monitorImg from "../../assets/monitor.png";
import tretImg from "../../assets/treat.png";
import heroImg from "../../assets/heroImg.png";
import BookingForm from "../../components/bookingForm/BookingForm";
import workImg from "../../assets/workImg.jpg";
import Nishith from "../../assets/Nishith.webp";
import Rashmi from "../../assets/Rashmi.webp";
import Deep from "../../assets/Deep.webp";
import Nasir from "../../assets/Nasir.webp";

import Testimonial from "../../components/testimonials/Testimonial";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing_page_main_bg">
        <Navbar />
        <img
          src={heroImg}
          alt="background image"
          className="landing_page_background_img"
        />
        <div className="hero_image_stats_div">
          <div className="d-flex justify-content-around">
            <div className="hero_image_stats_data">
              <h1>
                <strong>20000+</strong>
              </h1>
              <h5>Patients</h5>
            </div>
            <div className="hero_image_stats_data">
              <h1>
                <strong>1 Lakh+</strong>
              </h1>
              <h5>Sessions</h5>
            </div>
            <div className="hero_image_stats_data">
              <h1>
                <strong>9.6/10</strong>
              </h1>
              <h5>Rating</h5>
            </div>
          </div>
        </div>
        <div className="landing_page_part2">
          <h3 className="landing_page_part2_h2">
            Expert Guidance at Your Fingertips
          </h3>
          <div className="landing_page_service_cards">
            <ServicesCard
              title="Consultations"
              subtext="1-on-1 consultation with Experienced Doctors"
              img={consultImg}
            />
            <ServicesCard
              title="Diagnosis"
              subtext=" In-depth examination from Certified Physiotherapists"
              img={diagImg}
            />
            <ServicesCard
              title="Treatment Plan"
              subtext="Collaborative development of a plan to address the health issue."
              img={tretImg}
            />
            <ServicesCard
              title="Monitoring Progress"
              subtext="Putting the treatment plan into action"
              img={monitorImg}
            />
          </div>
        </div>
        <div className="landing_page_part3">
          <div className="row">
            <div className="col-4">
              <img className="landing_part3_workImg" src={workImg} alt="img" />
            </div>
            <div className="col-8 landing_booking_form_box">
              <h1 className="landing_page_part3_h2">
                Book Your Consultation Now!
              </h1>

              <BookingForm />
            </div>
          </div>
        </div>
        <div className="landing_page_part4">
          <h2>
            <strong>Testimonials</strong>
          </h2>
          <div className="landing_page_testimonials_container">
            <Testimonial
              image={Nishith}
              content="Your assesment method is very good and patient support resolves issues promptly"
              name="Nishith Patel"
              age="66"
            />
            <Testimonial
              image={Rashmi}
              content="Quality, pocket friendly & consistent care is what FIx health stands for"
              name="Rashmi Seth"
              age="43"
            />
            <Testimonial
              image={Deep}
              content="They worked around time zone varations to accomodate my schedule"
              name="Pranjal Deep"
              age="29"
            />
            <Testimonial
              image={Nasir}
              content="6 month with Fix health was Less than one month of my insurance company"
              name="Dr. Nasir"
              age="64"
            />
          </div>
        </div>
      </div>
    );
  }
}
