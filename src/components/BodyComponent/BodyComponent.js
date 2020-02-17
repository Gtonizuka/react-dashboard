import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from "react-router-dom/Route";

import "./BodyComponent.scss";
import AppData from "../../static/data_f.json";

import DatePickerCustomComponent from "../DatePickerCustomComponent/DatePickerCustomComponent";
import BasicRevComponent from "../BasicRevComponent/BasicRevComponent";
import CustomerPlatformComponent from "../CustomerPlaformComponent/CustomerPlatformComponent";
import PaymentTypeComponent from "../PaymentTypeComponent/PaymentTypeComponent";

import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import DevicesIcon from '@material-ui/icons/Devices';
import PaymentIcon from '@material-ui/icons/Payment';

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
      <label>
        <span className="datepicker--label">Select date:</span>
      <DatePickerCustomComponent getCalendarDate={getCalendarDate} />
      </label>
      <Router>
        <div className="row-container">
        <div className="row no-gutters">
          <div className="col"> 
          <span className="nav-item">
              <Link to="/"><AccountBalanceWalletIcon /> Basic Revenue</Link>
          </span>
            </div>
          <div className="col"> <span className="nav-item"><Link to="/customer"><DevicesIcon/> Customer Platform</Link></span></div>
          <div className="col"> <span className="nav-item"><Link to="/payment"><PaymentIcon /> Payments</Link></span></div>
        </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="box">
              <div className="box__inner">
                  {AppData.days.map(data => {
                monthTotal = monthTotal + data.ordersTotal;
              })}
              <p>Total Orders January 2020 </p><span className="number--big"> {monthTotal}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Route
            path="/"
            exact
            render={props => (
              <BasicRevComponent {...props} applicationData={applicationData} dayOfTheMonth={dayOfTheMonth}/>
            )}
          />
          <Route
            path="/customer"
            render={props => (
              <CustomerPlatformComponent
                {...props}
                applicationData={applicationData}
                dayOfTheMonth={dayOfTheMonth}
              />
            )}
          />
          <Route
            path="/payment"
            render={props => (
              <PaymentTypeComponent
                {...props}
                applicationData={applicationData}
                dayOfTheMonth={dayOfTheMonth}
              />
            )}
          />
        </div>
      </Router>
    </div>
  );
};

export default BodyComponent;
