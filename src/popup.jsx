import React from 'react';
import { useEffect } from 'react';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Pop = (props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
        props.closePopup();
    }, 2000);
    return () => clearTimeout(timer);
}, [props]);
    if (!props.pop) return null;
    return (
        <div className="popup1">
        <div className="popup">
          <i className="fa fa-times" aria-hidden="true" onClick={props.closePopup}></i>
          <h1>You win!</h1>
        </div>
      </div>
    );
};

export default Pop;
