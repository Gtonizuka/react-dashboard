import React from 'react';
import './CustomerPlatformComponent.scss';


const CustomerPlatformComponent = (props) => {
  return (
    <div>
        <h1>CustomerPlatformComponent</h1>
        <h2>Total Orders desktop: {props.applicationData.desktopSales}</h2>
        <h2>Total Orders mobile: {props.applicationData.mobileSales}</h2>
        <h2>Total Orders Windows: {props.applicationData.windowsSales}</h2>
        <h2>Total Orders MacOS: {props.applicationData.macOSSales}</h2>
        <h2>Total Orders iOS: {props.applicationData.iOSSales}</h2>
        <h2>Total Orders android: {props.applicationData.androidSales}</h2>
    </div>
  );
}

export default CustomerPlatformComponent;
