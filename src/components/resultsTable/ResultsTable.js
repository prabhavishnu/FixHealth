import React, { Component } from "react";
import "./ResultsTableStyles.css";

export default class ResultsTable extends Component {
  state = {
    specializations: [
      "Back and Neck Pain",
      "Knee and Ankle Pain",
      "Should and Elbow Pain",
      "Neurological",
      "Sports Injury",
    ],
    selectedDoctor: {},
  };

  getRandomSpecialization = () => {
    const list = this.state.specializations;
    return list[Math.floor(Math.random() * list.length)];
  };

  render() {
    const { data = [], city = "Bangalore" } = this.props;
    console.log({ data });
    return (
      <div>
        <div className="modal_confirmation">
          <div
            class="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    Consultation Confirmation
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  Your Consultation with Dr.{" "}
                  {this.state.selectedDoctor.name?.first} Confirmed!
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-dismiss="modal"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <table class="table table-dark">
          <thead>
            <tr className="text-start">
              <th>Doctor</th>
              <th>Expertise</th>
              <th>City</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((doctor) => (
              <tr className="doctors_list_item">
                <td className="text-start">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <img src={doctor.picture.thumbnail} />
                      <div className="doctors_list_item_name">
                        <p>
                          {"Dr. "} {doctor.name.first} {doctor.name.last}
                        </p>
                        <small>
                          Experience: {parseInt(doctor.dob.age / 3)}+ years
                        </small>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-start doctors_list_item_field">
                  {this.getRandomSpecialization()}
                </td>
                <td className="text-start">Bangalore</td>
                <td className="text-start">
                  <button
                    className="results_table_select_btn"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    onClick={() => this.setState({ selectedDoctor: doctor })}
                  >
                    Select
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {this.props.backButton()}
      </div>
    );
  }
}
