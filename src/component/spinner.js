import React, { Component } from "react";
import loader from "./loading.gif";
export class spinner extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
}

export default spinner;
