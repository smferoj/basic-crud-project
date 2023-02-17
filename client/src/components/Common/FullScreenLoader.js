import React from 'react';
import loader from "../../assets/img/spinner.svg"

export const FullScreenLoader = () => {
  return (
     <div className="ProcessingDiv">
        <div className="center-screen">
            <img className = "loader-size"src={loader} alt="loader" />
        </div>
     </div>
  )
}
