import React from 'react';
import './BasicRevComponent.scss';


const BasicRevComponent = (props) => {
  return (
    <div>
        <h1>BasicRevComponent</h1>
        <h2>Number of orders: {props.applicationData.ordersTotal}</h2>
        <h2>Total amount: ${props.applicationData.totalAmount}</h2>
    </div>
  );
}

export default BasicRevComponent;
