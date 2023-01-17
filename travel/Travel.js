import React from "react";
import data from "../../data";
export default function Travel({ pic, countryName, mapLink, destinationPlace, dates, description }) {

    const display = data.pop();
    const result = display.id === 1
    return (
        <div>
            <div className="travel--mainContainer">
                <img src={pic} className="travel--image" />
                <div className="country--information">
                    <div className="country--headline">
                        <img src="../images/map.png" className="earth--icon" />
                        <h6 className="country--name">{countryName}</h6>
                        <a className="googlemaps--link" href={mapLink}><u>View on Google Maps</u></a>
                    </div>
                    <h1 className="travel--destination">{destinationPlace}</h1>
                    <h6 className="travel--dates">{dates}</h6>
                    <p className="travel--description">{description}</p>
                </div>
            </div >
            {!result && <hr className="line--divider" />}
        </div>
    )
}