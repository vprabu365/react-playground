import React from "react";

export default function Card({ img, ratings, reviews, country, lessonTitle, cost }) {
    return (
        <div className="card--section">
            <img src={img} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="star--icon" />
                <span>{ratings}</span>
                <span> ({reviews}) • </span>
                <span>{country}</span>
            </div>
            <p className="lesson--title">{lessonTitle}</p>
            <span className="lesson-cost"><strong>From {cost}</strong> <p> / person</p></span>
        </div >
    )
}