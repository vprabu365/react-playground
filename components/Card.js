import React from "react";

export default function Card() {
    return (
        <section className="card--section">
            <img src="../images/kat.jpeg" className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="star--icon" />
                <span className="card--ratings">5.0</span>
                <span className="reviews">(6) • </span>
                <span className="country">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes
            </p>
            <span><span className="cost">From $136</span> / person</span>
        </section>
    )
}