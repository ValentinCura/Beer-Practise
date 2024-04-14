import React from 'react';
import PropTypes from "prop-types";

const Count = ({beers}) => {
    const redBeerCount = beers.filter(beer => beer.beerStyle === "Red").length;
    const ipaBeerCount = beers.filter(beer => beer.beerStyle === "IPA").length;

  return (
    <div className="text-black">
        <h2>Recuento de Cervezas: </h2>
        <p>Cantidad de cervezas Rojas: {redBeerCount}</p>
        <p>Cantidad de cervezas IPA: {ipaBeerCount}</p>
    </div>
  )
}

Count.propTypes ={
    beers: PropTypes.array
}

export default Count