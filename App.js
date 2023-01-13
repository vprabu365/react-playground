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
                {...card}
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