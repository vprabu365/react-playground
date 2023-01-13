import React from "react";

export default function props(props) {
    console.log(props)
    let badgeText
    if (props.liveCount === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.country === "Online") {
        badgeText = "ONLINE"
    }

    return (
        < div className="props--section" >
            <div className="badge--container">
                <img src={`../images/${props.img}`} className="props--image" />

                {badgeText && <div className="sold--badge">{badgeText}</div>}
            </div>
            <div className="props--stats">
                <img src="../images/star.png" className="star--icon" />
                <span>{props.ratings}</span>
                <span> ({props.reviewCount}) • </span>
                <span>{props.country}</span>
            </div>
            <p className="lesson--title">{props.lessonTitle}</p>
            <span className="lesson-cost"><span className="bold">From {props.cost}</span> /person</span>
        </div >
    )
}