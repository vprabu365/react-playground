import React from "react";

export default function Card({ img, liveCount, ratings, reviews, country, lessonTitle, cost }) {
    let badgeText
    if (liveCount === 0) {
        badgeText = "SOLD OUT"
    }
    else if (country === "Online") {
        badgeText = "ONLINE"
    }

    return (
        < div className="card--section" >
            <div className="badge--container">
                <img src={`../images/${img}`} className="card--image" />

                {badgeText && <div className="sold--badge">{badgeText}</div>}
                {console.log(badgeText)}
            </div>
            <div className="card--stats">
                <img src="../images/star.png" className="star--icon" />
                <span>{ratings}</span>
                <span> ({reviews}) • </span>
                <span>{country}</span>
            </div>
            <p className="lesson--title">{lessonTitle}</p>
            <span className="lesson-cost"><span className="bold">From {cost}</span> /person</span>
        </div >
    )
}