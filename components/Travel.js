import React from "react";

export default function Travel() {
    return (
        <div>
            <div className="travel--mainContainer">
                <img src="https://source.unsplash.com/WLxQvbMyfas" className="travel--image" />
                <div className="country--information">
                    <div className="country--headline">
                        <img src="../images/map.png" className="earth--icon" />
                        <h6 className="country--name">JAPAN</h6>
                        <p className="googlemaps--link"><u>View on Google Maps</u></p>
                    </div>
                    <h1 className="travel--destination">Mount Fuji</h1>
                    <h6 className="travel--dates">12 Jan, 2021 - 24 Jan, 2021</h6>
                    <p className="travel--description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet).
                        Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </div >
            <hr className="line--divider" />
        </div>
    )
}