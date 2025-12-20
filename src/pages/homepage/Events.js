import { useState } from "react";

export default function Events() {
  const events = [
    {
      date: "05",
      month: "August",
      time: "11:00 - 14:00",
      title:
        "Formation of the organizational structure of the company in the face of uncertainty.",
      format: "Online master-class",
      button: "View more",
    },

    {
      date: "24",
      month: "July",
      time: "11:00 - 12:30",
      title: "Building a customer service department. Best Practices.",
      format: "Online lecture",
      button: "View more",
    },

    {
      date: "16",
      month: "July",
      time: "10:00 - 13:00",
      title:
        "How to apply methods of speculative design in practice. Worldbuilding prototyping.",
      format: "Online workshop",
      button: "View more",
    },
  ];
  const eventsname = [
    "Online master-class",
    "Online lecture",
    "Online workshop",
  ];
  const [filtered, setFiltered] = useState(events);
  return (
    <div className="events_block">
      <div className="text">
        <h4>OUR EVENTS</h4>
        <h1>Lectures & Workshops</h1>
      </div>
      <div className="events">
        <select
          onChange={(e) => {
            if (e.target.value === "All") {
              setFiltered(events);
            } else {
              let myArray = events.filter(
                (item) => item.format === e.target.value
              );
              setFiltered(myArray);
            }
          }}
        >
          <option>All</option>
          {eventsname.map((ev) => (
            <option>{ev}</option>
          ))}
        </select>
        {filtered.map((event) => {
          return (
            <div className="event" key={event.title}>
              <div className="time">
                <span className="event_date">{event.date}</span>
              </div>
              <div className="event_time">
                <span>{event.month}</span>
                <h3>{event.time}</h3>
              </div>

              <div className="title">
                <span>{event.title}</span>
                <h3>{event.format}</h3>
              </div>
              <button>{event.button}</button>
            </div>
          );
        })}
      </div>
      <div className="more">
        <span>Do You Want More?</span>
        <button>Explore All Events</button>
      </div>
    </div>
  );
}
