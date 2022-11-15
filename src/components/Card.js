import React from "react";

export default function Card(props){

  return (
    <section className="card">
      <img src={props.item.coverImg} alt="/" />
      <div className="card--details">
        <div className="card--location">
          <h4><i className='fa fa-map-marker'></i> {props.item.location}</h4>
          <a href={props.item.view}>View on Google Maps</a>
        </div>
        <h2 className="card--destination">{props.item.destination}</h2>
        <p className="card--date">{props.item.date}</p>
        <p className="card--description">{props.item.description}</p>
      </div>
    </section>
  )
}