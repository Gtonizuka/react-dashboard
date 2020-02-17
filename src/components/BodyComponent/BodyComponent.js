import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from "react-router-dom/Route";

import "./BodyComponent.scss";
import AppData from "../../static/data_f.json";

import DatePickerCustomComponent from "../DatePickerCustomComponent/DatePickerCustomComponent";
import BasicRevComponent from "../BasicRevComponent/BasicRevComponent";
import CustomerPlatformComponent from "../CustomerPlaformComponent/CustomerPlatformComponent";
import PaymentTypeComponent from "../PaymentTypeComponent/PaymentTypeComponent";

const BodyComponent = () => {
  const [applicationData, setApplicationData] = useState({
    ordersTotal: 0,
    totalAmount: 0,
    desktopSales: 0,
    mobileSales: 0,
    iOSSales: 0,
    androidSales: 0,
    windowsSales: 0,
    macOSSales: 0,
    paypalSales: 0,
    applePaySales: 0,
    cardSales: 0
  });

  const [dayOfTheMonth, setDayOfTheMonth] = useState("1-1-2020");

  // Set app state on init
  useEffect(() => {
    setAppState(dayOfTheMonth);
  }, []);

  const setAppState = date => {
    const filtered = AppData.days.filter(data => data.date === date);

    let prices = [],
      platform = [],
      os = [],
      paymentPlatform = [];
    let ordersTotal;
    // Get all ids
    filtered.map(el => {
      ordersTotal = el.ordersTotal;
      el.orders.map(entry => {
        if (entry.price) {
          prices.push(entry.price);
        }
        if (entry.platform) {
          platform.push(entry.platform);
        }
        if (entry.os) {
          os.push(entry.os);
        }
        if (entry.payment) {
          paymentPlatform.push(entry.payment);
        }
      });
    });

    const totalAmount = prices.reduce((a, b) => a + b, 0);

    const desktopSales = platform.filter(el => el == "desktop").length;
    const mobileSales = platform.filter(el => el == "mobile").length;

    const iOSSales = os.filter(el => el == "iOS").length;
    const androidSales = os.filter(el => el == "android").length;
    const windowsSales = os.filter(el => el == "windows").length;
    const macOSSales = os.filter(el => el == "macOS").length;

    const paypalSales = paymentPlatform.filter(el => el == "paypal").length;
    const applePaySales = paymentPlatform.filter(el => el == "applePay").length;
    const cardSales = paymentPlatform.filter(el => el == "card").length;

    // // set state
    setApplicationData({
      ordersTotal,
      totalAmount,
      desktopSales,
      mobileSales,
      iOSSales,
      androidSales,
      windowsSales,
      macOSSales,
      paypalSales,
      applePaySales,
      cardSales
    });
  };

  const getCalendarDate = datePicked => {
    let formatted_date =
      datePicked.getMonth() +
      1 +
      "-" +
      datePicked.getDate() +
      "-" +
      datePicked.getFullYear();
    setDayOfTheMonth(formatted_date);
    setAppState(formatted_date);
  };

  let monthTotal = 0;

  return (
    <div className="container">
      <header className="App-header">
        <h1>January 2020 metrics</h1>
        {AppData.days.map(data => {
          monthTotal = monthTotal + data.ordersTotal;
        })}
        <h2>Total number of orders for January 2020: {monthTotal}</h2>
      </header>
      <DatePickerCustomComponent getCalendarDate={getCalendarDate} />
      <h3>Data for: {dayOfTheMonth}</h3>
      <Router>
        <div className="nav">
          <ul className="nav__navbar">
            <li>
              <Link to="/">BasicRevComponent</Link>
            </li>
            <li>
              <Link to="/customer">CustomerPlatformComponent</Link>
            </li>
            <li>
              <Link to="/payment">PaymentTypeComponent</Link>
            </li>
          </ul>
          <Route
            path="/"
            exact
            render={props => (
              <BasicRevComponent {...props} applicationData={applicationData} />
            )}
          />
          <Route
            path="/customer"
            render={props => (
              <CustomerPlatformComponent
                {...props}
                applicationData={applicationData}
              />
            )}
          />
          <Route
            path="/payment"
            render={props => (
              <PaymentTypeComponent
                {...props}
                applicationData={applicationData}
              />
            )}
          />
        </div>
      </Router>
    </div>
  );
};

export default BodyComponent;
