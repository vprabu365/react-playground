import React from "react";
import Nav from "./components/Nav"
import Travel from "./components/Travel"
import data from "./data";

export default function App() {
    return (
        <div>
            <Nav />
            {data.map(travel =>
                <Travel
                    key={travel.id}
                    {...travel}
                />
            )
            }
        </div>
    )
}