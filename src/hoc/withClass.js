import React from "react";
// import classes from '../Car/Car.css'

const withClass = (Component, className) => {
  return props => {
    return(
      <div className={className}>
        <Component {...props} />
      </div>
    )
  }
};
export default withClass;
