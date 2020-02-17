import React from 'react';
import './PaymentTypeComponent.scss';


const PaymentTypeComponent = (props) => {
  return (
    <div>
        <h1>PaymentTypeComponent</h1>
        <h2>Paypal total: {props.applicationData.paypalSales}</h2>
        <h2>ApplePay total: {props.applicationData.applePaySales}</h2>
        <h2>Card total: {props.applicationData.cardSales}</h2>
    </div>
  );
}

export default PaymentTypeComponent;
