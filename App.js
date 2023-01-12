import React from "react";
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardData from "./cardData";

export default function App() {
    const cards = cardData.map(card => {
        if (card.country || card.liveCount)
            return <Card
                key={card.id}
                img={card.img}
                ratings={card.ratings}
                reviews={card.reviewCount}
                country={card.country}
                lessonTitle={card.lessonTitle}
                cost={card.cost}
                liveCount={card.liveCount}
            />
    }
    )

    return (
        <div>
            <Nav />
            {cardData.map(card => {
                if (card.img === "./images/grid.png")
                    return < Hero key={card.id} img={card.img} />
            })}
            <div className="cards">
                {cards}
            </div>
        </div>
    )
}