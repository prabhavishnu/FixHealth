import React, { Component } from "react";
import "./ResultsTableStyles.css";

export default class ResultsTable extends Component {
  state = {
    selectedDoctor: {},
  };
  render() {
    const { data = [], city = "" } = this.props;
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
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">City</th>
              <th scope="col">Contact</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((doctor, idx) => (
              <tr className="align-middle">
                <th scope="row">{idx + 1}</th>
                <td>
                  {doctor.name.title} {doctor.name.first} {doctor.name.last}
                </td>
                <td>{doctor.gender}</td>
                <td>{city}</td>
                <td>{doctor.phone}</td>
                <td>
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
