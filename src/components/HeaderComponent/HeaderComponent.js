import React from 'react';
import './HeaderComponent.scss';


const HeaderComponent = (props) => {
  return (
    <header>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Admin Dashboard</h1>
                </div>
            </div>
        </div>
    </header>
  );
}

export default HeaderComponent;
