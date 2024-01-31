import React, { Component } from "react";
import { Stepper } from "react-form-stepper";
import "./BookingFormStyles.css";
import axios from "axios";
import ResultsTable from "../resultsTable/ResultsTable";
// import "dotenv/config";
export default class BookingForm extends Component {
  state = {
    name: "",
    phone: "",
    age: "",
    company: "",
    city: "",
    complaint: "",
    currentstep: 0,
    results: [],
    prevExperience: false,
  };

  getDoctorResults = async () => {
    try {
      const results = await axios.get(
        `https://main--subtle-dasik-41a586.netlify.app//.netlify/functions/api/doctors?city=${this.state.city}`
      );
      this.setState({ results: results.data });
      console.log(results);
      this.incrementStep();
    } catch (error) {
      console.error(error);
    }
  };

  incrementStep = () => {
    this.setState({ currentstep: this.state.currentstep + 1 });
  };

  getNextButton = (isEnabled) => {
    const okButtonHandler =
      this.state.currentstep === 3 ? this.getDoctorResults : this.incrementStep;

    return (
      <button
        className="booking_form_next_btn"
        onClick={() => okButtonHandler()}
        disabled={!isEnabled}
      >
        {this.state.currentstep >= 3 ? "Confirm" : "Next"}
      </button>
    );
  };

  getBackButton = () => {
    return (
      <button
        className="booking_form_back_btn"
        onClick={() => {
          this.setState({ currentstep: this.state.currentstep - 1 });
        }}
      >
        Back
      </button>
    );
  };
  getStepForm = () => {
    const { currentstep, results } = this.state;
    switch (currentstep) {
      case 0:
        return (
          <ContactDetailsForm
            changeHandler={this.changeHandler}
            nextButton={this.getNextButton}
            data={this.state}
          />
        );

      case 1:
        return (
          <PersonalInformation
            changeHandler={this.changeHandler}
            nextButton={this.getNextButton}
            backButton={this.getBackButton}
            data={this.state}
          />
        );
      case 2:
        return (
          <ChiefComplaints
            changeHandler={this.changeHandler}
            nextButton={this.getNextButton}
            backButton={this.getBackButton}
            data={this.state}
          />
        );
      case 3:
        return (
          <ReviewData
            data={this.state}
            backButton={this.getBackButton}
            submitButton={this.getNextButton}
          />
        );
      case 4:
        return (
          <ResultsTable
            data={results}
            backButton={this.getBackButton}
            city={this.state.city}
          />
        );
    }
  };

  changeHandler = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const stepStyle = {
      completedBgColor: "#695B7A",
      activeTextColor: "#FFFFFF",
      activeBgColor: "#B386EC",
      inactiveTextColor: "#000000",
    };
    return (
      <div>
        <Stepper
          steps={[
            { label: "Contact Details " },
            { label: "Personal Information" },
            { label: "Chief Complaints" },
            { label: "Review Information" },
            { label: "Get Available Doctors" },
          ]}
          activeStep={this.state.currentstep}
          styleConfig={stepStyle}
        />
        {this.getStepForm()}
      </div>
    );
    // }
  }
}

class ContactDetailsForm extends Component {
  render() {
    const { name, phone } = this.props.data;
    return (
      <div className="form_container">
        <div class="mb-3 form_input_container">
          <label for="exampleFormControlInput1" class="form-label">
            Name*
          </label>
          <input
            onChange={this.props.changeHandler}
            type="text"
            class="form-control "
            name="name"
            placeholder="E.g. Raju Rastogi"
            value={name}
            required={true}
          />
        </div>
        <div class="mb-3 form_input_container">
          <label for="exampleFormControlInput1" class="form-label">
            Phone Number*
          </label>
          <input
            onChange={this.props.changeHandler}
            type="tel"
            class="form-control"
            name="phone"
            placeholder="E.g. 907965**20"
            value={phone}
            required={true}
          />
        </div>
        <div className="booking_form_footer_buttons_1">
          {this.props.nextButton(name !== "" && phone !== "")}
        </div>
      </div>
    );
  }
}
class PersonalInformation extends Component {
  render() {
    const { age, city, company } = this.props.data;
    return (
      <div className="form_container">
        <div class="mb-3 form_input_container">
          <label for="exampleFormControlInput1" class="form-label">
            Age
          </label>
          <input
            onChange={this.props.changeHandler}
            type="number"
            class="form-control"
            name="age"
            placeholder="E.g. 24"
            value={age}
          />
        </div>
        <div class="mb-3 form_input_container">
          <label for="exampleFormControlInput1" class="form-label">
            City
          </label>
          <input
            onChange={this.props.changeHandler}
            type="text"
            class="form-control"
            name="city"
            placeholder="E.g. Jabalpur"
            value={city}
          />
        </div>
        <div class="mb-3 form_input_container">
          <label for="exampleFormControlInput1" class="form-label">
            Company
          </label>
          <input
            onChange={this.props.changeHandler}
            type="text"
            class="form-control"
            name="company"
            placeholder="E.g. Goldman Sachs"
            value={company}
          />
        </div>
        <div className="booking_form_footer_buttons_std">
          {this.props.backButton()}
          {this.props.nextButton(age !== "" && city !== "" && company !== "")}
        </div>
      </div>
    );
  }
}
class ChiefComplaints extends Component {
  render() {
    const { complaint, age, prevExperience } = this.props.data;
    return (
      <div className="form_container">
        <div class="mb-3 form_input_container">
          <label for="exampleFormControlInput1" class="form-label">
            Please let us Know your primary complaints?
          </label>
          <textarea
            onChange={this.props.changeHandler}
            class="form-control"
            name="complaint"
            placeholder="What kind of pain you have and where?"
            value={complaint}
          />
        </div>
        {age > 40 && (
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value={prevExperience}
              onChange={this.props.changeHandler}
              name="prevExperience"
            />
            <label class="form-check-label">
              Do you have any previous experiences with physiotherapy?
            </label>
          </div>
        )}
        <div className="booking_form_footer_buttons_std">
          {this.props.backButton()}
          {this.props.nextButton(complaint !== "")}
        </div>
      </div>
    );
  }
}
class ReviewData extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="booking_review">
        <h6>
          <strong>Name:</strong> &nbsp; {data.name}
        </h6>
        <h6>
          <strong>Phone Number:</strong> &nbsp;
          {data.phone}
        </h6>
        <h6>
          <strong>Age:</strong> &nbsp; {data.age}
        </h6>
        <h6>
          <strong>City:</strong> &nbsp; {data.city}
        </h6>
        <h6>
          <strong>Company:</strong> &nbsp; {data.company}
        </h6>
        <h6>
          <strong>Complaints:</strong> &nbsp;
          {data.complaint}
        </h6>
        <div className="booking_form_footer_buttons_std">
          {this.props.backButton()}
          {this.props.submitButton(true)}
        </div>
      </div>
    );
  }
}
