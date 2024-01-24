import React, { Component } from "react";
import "./TestimonialStyles.css";

export default class Testimonial extends Component {
  render() {
    const { image, content, name, age } = this.props;
    return (
      <div>
        <div class="card testimonial_card">
          <div>
            <i class="fa fa-quote-left" aria-hidden="true"></i>
            <br />
            <p>{content}</p>
            <i class="fa fa-quote-right" aria-hidden="true"></i>
          </div>
          <div>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
          </div>
          <hr />
          <img src={image} alt={name} />
          <p>
            <strong>{name}</strong> <br />
            <small>Age: {age}</small>
          </p>
        </div>
      </div>
    );
  }
}
