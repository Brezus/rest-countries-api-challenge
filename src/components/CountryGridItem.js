import React from "react";

export default function CountryGridItem({data}) {
    console.log(data)
   return (
        <div className="country-grid-item">
            <h2>{data.name.common}</h2>
            <p>{`Population: ${data.population}`}</p>
            <p>{`Region: ${data.region}`}</p>
            <p>{`Capital: ${data.capital}`}</p>
        </div>
   )
}