import React from "react";

export default function Hero({ img }) {
    return (
        <section className="hero--section">
            <img src={img} className="hero--image" />
            <h1 className="hero--headline">Online Experiences</h1>
            <p className="hero--content">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}