import React from "react";
import tum from "../../assets/tum.jpg"

function Card() {
  return <div>    <div className="container">
  <div className="card">
      <img src={tum} alt=""/>
      <div className="rating">
          <i className='bx bx-star'></i>
          <i className='bx bx-star'></i>
          <i className='bx bx-star'></i>
          <i className='bx bx-star'></i>
          <i className='bx bx-star'></i>
      </div>
  <div className="details">
      <h1>JavaScript for beginners</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Ut quibusdam tempora similique perspiciatis vero eaque!</p>
      <hr/>
      <div className="btn">
          <i className='bx bx-bookmark'></i>
      </div>
  </div>
</div>
</div>
</div>;
}

export default Card;
