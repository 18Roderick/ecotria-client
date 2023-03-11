import React, { Component } from "react";

const eventsList = [
  {
    date: "13",
    month: "APR",
    status: "bg-warning",
    name: "Meeting with clients",
    location: "41 madison ave, floor 24 new work, NY 10010",
  },
  {
    date: "22",
    month: "APR",
    status: "bg-primary",
    name: "Developer Programe",
    location: "41 madison ave, floor 24 new work, NY 10010",
  },
  {
    date: "30",
    month: "APR",
    status: "bg-success",
    name: "Aniversary Event",
    location: "41 madison ave, floor 24 new work, NY 10010",
  },
];

class Events extends Component {
  render() {
    return (
      <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
        <div className="card-body d-flex align-items-center p-4">
          <h4 className="fw-700 mb-0 font-xssss text-grey-900">Events</h4>
          <a href="/defaultevent" className="fw-600 ms-auto font-xssss text-primary">
            See all
          </a>
        </div>
        {eventsList.map((value, index) => (
          <div key={index} className="card-body d-flex pt-0 ps-4 pe-4 pb-3 overflow-hidden">
            <div className={`bg-success me-2 p-3 rounded-xxl ${value.status}`}>
              <h4 className="fw-700 font-lg ls-3 lh-1 text-white mb-0">
                <span className="ls-1 d-block font-xsss text-white fw-600">{value.month}</span>
                {value.date}
              </h4>
            </div>
            <h4 className="fw-700 text-grey-900 font-xssss mt-2">
              {value.name}{" "}
              <span className="d-block font-xsssss fw-500 mt-1 lh-4 text-grey-500">{value.location}</span>{" "}
            </h4>
          </div>
        ))}
      </div>
    );
  }
}

export default Events;
