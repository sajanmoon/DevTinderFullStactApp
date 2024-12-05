import React from "react";

const Usercard = ({ user }) => {
  const { firstName, lastName, age, about, gender } = user;
  console.log(user);

  return (
    <div className="card bg-base-300 w-96 shadow-xl mx-auto">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}!</h2>
        <p>{age + " " + gender}</p>
        <p>{about}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Intrested</button>
        </div>
      </div>
    </div>
  );
};

export default Usercard;
