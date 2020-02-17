import React from 'react';
import './PaymentTypeComponent.scss';

import BoxComponent from '../BoxComponent/BoxComponent'


const PaymentTypeComponent = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h2>Payment Statistics for {props.dayOfTheMonth}:</h2>
        </div>
        <div className="col-md-3">
          <BoxComponent description={'Paypal'} number={props.applicationData.paypalSales}/> 
        </div>
        <div className="col-md-3">
          <BoxComponent description={'ApplePay'} number={props.applicationData.applePaySales}/>  
        </div>
        <div className="col-md-3">
          <BoxComponent description={'Card'} number={props.applicationData.cardSales}/> 
        </div>
      </div>
    </div>
  );
}

export default PaymentTypeComponent;
