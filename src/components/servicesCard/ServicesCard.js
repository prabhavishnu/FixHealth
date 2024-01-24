import React, { Component } from "react";
import "./ServicesCardStyles.css";
export default class ServicesCard extends Component {
  render() {
    const { img, title, subtext } = this.props;
    return (
      <div class="card services_card">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text ">{subtext}</p>
        </div>
      </div>
    );
  }
}
