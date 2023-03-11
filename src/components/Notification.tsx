import React, { FC } from "react";

//TODO add fecth to user notifications

interface ItemProps {
  title: string;
  time: string;
  description: string;
  image: string;
}

const Item: FC<ItemProps> = ({ title, time, description, image }) => (
  <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
    <img src={image} alt="user" className="w40 position-absolute left-0" />
    <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
      {title} <span className="text-grey-400 font-xsssss fw-600 float-right m-1">{time}</span>
    </h5>
    <h6 className="text-grey-500 fw-500 font-xssss lh-4">{description}</h6>
  </div>
);

const Notification: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <div
      className={`dropdown-menu p-4 right-0 rounded-xxl border-0 shadow-lg ${isOpen ? " show" : ""}`}
      aria-labelledby="dropdownMenu3"
    >
      <h4 className="fw-700 font-xss mb-4">Notificaciones</h4>
      <Item
        title={"Test"}
        description={"You have a pending notification"}
        time={"2 Minutes Ago"}
        image={"https://picsum.photos/100/100"}
      />
    </div>
  );
};

export default Notification;
