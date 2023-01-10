import React from "react";
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardData from "./cardData";
export default function App() {
    return (
        <div>
            <Nav />
            <Hero />
            <div className="cards">
                {cardData.map(card =>
                    <Card
                        img={card.img}
                        ratings={card.ratings}
                        reviews={card.reviewCount}
                        country={card.country}
                        lessonTitle={card.lessonTitle}
                        cost={card.cost}
                    />
                )}
            </div>
        </div>
    )
}