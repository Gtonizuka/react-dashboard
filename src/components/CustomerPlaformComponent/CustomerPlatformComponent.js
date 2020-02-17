import React from "react";
import "./CustomerPlatformComponent.scss";
import BoxComponent from "../BoxComponent/BoxComponent";

import PieChart from "react-minimal-pie-chart";

const CustomerPlatformComponent = props => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h2>Platform Statistics for {props.dayOfTheMonth}:</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <BoxComponent
            description={"Desktop"}
            number={props.applicationData.desktopSales}
          />
        </div>
        <div className="col-md-3">
          <BoxComponent
            description={"Mobile"}
            number={props.applicationData.mobileSales}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <div className="box box--large">
            <div className="box__inner">
              <span className="box--pie_label">
                iOS <span class="box--pie__color orange"></span>
              </span>
              <span className="box--pie_label">
                Android <span class="box--pie__color blue"></span>
              </span>
              <PieChart
                animate={true}
                animationDuration={500}
                animationEasing="ease-out"
                cx={50}
                cy={50}
                data={[
                  {
                    color: "#E38627",
                    title: "iOS",
                    value: props.applicationData.iOSSales
                  },
                  {
                    color: "#1E90FF",
                    title: "Android",
                    value: props.applicationData.androidSales
                  }
                ]}
                label
                labelPosition={50}
                labelStyle={{
                  fill: "#121212",
                  fontFamily: "sans-serif",
                  fontSize: "5px"
                }}
                lengthAngle={360}
                lineWidth={100}
                onClick={undefined}
                onMouseOut={undefined}
                onMouseOver={undefined}
                paddingAngle={0}
                radius={50}
                rounded={false}
                startAngle={0}
                viewBoxSize={[50, 50]}
              />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="box box--large">
            <div className="box__inner">
              <span className="box--pie_label">
                Windows <span class="box--pie__color green"></span>
              </span>
              <span className="box--pie_label">
                MacOS <span class="box--pie__color gray"></span>
              </span>
              <PieChart
                animate={true}
                animationDuration={500}
                animationEasing="ease-out"
                cx={50}
                cy={50}
                data={[
                  {
                    color: "#50B711",
                    title: "Windows",
                    value: props.applicationData.windowsSales
                  },
                  {
                    color: "#AAAAAA",
                    title: "MacOS",
                    value: props.applicationData.macOSSales
                  }
                ]}
                label
                labelPosition={50}
                labelStyle={{
                  fill: "#121212",
                  fontFamily: "sans-serif",
                  fontSize: "5px"
                }}
                lengthAngle={360}
                lineWidth={100}
                onClick={undefined}
                onMouseOut={undefined}
                onMouseOver={undefined}
                paddingAngle={0}
                radius={50}
                rounded={false}
                startAngle={0}
                viewBoxSize={[50, 50]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerPlatformComponent;
