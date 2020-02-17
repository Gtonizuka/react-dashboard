import React from "react";
import "./BasicRevComponent.scss";
import "../../shared/progressBarCircle.scss";

import BoxComponent from "../BoxComponent/BoxComponent";

const BasicRevComponent = props => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h2>Basic Revenue Statistics for {props.dayOfTheMonth}:</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <BoxComponent
            description={"Orders"}
            number={props.applicationData.ordersTotal}
          />
        </div>
        <div className="col-md-3">
          <BoxComponent
            description={"Total Earnings"}
            number={`$${props.applicationData.totalAmount}`}
          />
        </div>
        <div className="col-md-3">
          <div className="box">
            <div className="box__inner">
              <p>Target Revenue</p>
              <div className="set-size charts-container">
                <div className="pie-wrapper progress-95 style-2">
                  <span className="label">
                    95<span className="smaller">%</span>
                  </span>
                  <div className="pie">
                    <div className="left-side half-circle"></div>
                    <div className="right-side half-circle"></div>
                  </div>
                  <div className="shadow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicRevComponent;
