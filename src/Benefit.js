import React from "react";
import "./Benefit.css";
import {useStateValue} from './StateProvider'

function Benefit({imgUrl,title,paragraph}) {
  return (
    <div className="benefit">
      <div className="product">
        
        <img src={imgUrl} alt="" />
      </div>
      <div className="para">
        <h1>{title}</h1>
        <p >
        {paragraph}
        </p>
        <div className="gap"></div>
        <hr />
      </div>
    </div>
  );
}

export default Benefit;
