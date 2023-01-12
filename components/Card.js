import React from "react";

export default function Card({ img, liveCount, ratings, reviews, country, lessonTitle, cost }) {
    return (
        < div className="card--section" >
            <div className="badge--container">
                <img src={`../images/${img}`} className="card--image" />
                {/* {liveCount === 1 && <img src="../images/sold.png" className="soldout--icon" />} */}
                {liveCount === 1 && <div className="sold--badge">SOLD OUT</div>}
            </div>
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