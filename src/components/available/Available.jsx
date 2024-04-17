import React, { useState } from 'react';
import { beers } from '../data/Data';
import { Button, Card, ListGroup } from 'react-bootstrap';
import Count from '../count/Count';
import NewBeer from '../newBeer/NewBeer'
import Search from '../search/Search'
const Available = () => {
  const conversion = 1000;



  const [totalBeers, setTotalBeers] = useState(beers)

  const handleAddNewProduct = (newBeer) => {
    const newProduct = {
      id: Math.random().toString(),
      ...newBeer,
    }
    setOldBeers((prevState) => [...prevState, newProduct]);
  }
  const [filteredBeers, setFilteredBeers] = useState(false);

  const handleAvailableButton = () => {
    setFilteredBeers(!filteredBeers);

  };

  const [oldBeers, setOldBeers] = useState(totalBeers);
  const availableBeers = filteredBeers ? totalBeers.filter(beer => beer.available) : totalBeers;


  const SearchValue = (searchItem) => {

    console.log(searchItem);
    console.log(totalBeers);
    if (searchItem !== '') {
      const fBeers = availableBeers.filter(
        (fBeer) =>
          fBeer.beerName.toLowerCase().includes(searchItem.toLowerCase()) ||
          fBeer.beerStyle.toLowerCase().includes(searchItem.toLowerCase())
      );
      setOldBeers(fBeers)
    }
    else setOldBeers(totalBeers)


    //setTotalBeers(searchItem ? fBeers : availableBeers);
  };

  //console.log(availableBeers);
  return (

    <div>
      <Search onSearchValue={SearchValue} />
      <h1 className="text-light">Cervezas: </h1>
      <div className="d-flex flex-wrap">
        {filteredBeers ? (
          <div className="d-flex flex-wrap">
            {
              oldBeers.filter(beer => beer.available).map(beer => (
                <Card key={beer.id} className='m-1 d-flex flex-row' style={{ width: '380px' }}>
                  <Card.Img
                    height={170}
                    variant="top"
                    src={beer.beerImgUrl}
                  />
                  <Card.Body>
                    <Card.Title>{beer.beerName}</Card.Title>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>{beer.beerStyle}</ListGroup.Item>
                      <ListGroup.Item>{beer.price * conversion}</ListGroup.Item>
                      <ListGroup.Item>{beer.available ? 'Disponible' : 'No disponible'}</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              ))}
          </div>
        ) : (
          <div className="d-flex flex-wrap">
            {oldBeers.map(beer => (
              <Card key={beer.id} className='m-1 d-flex flex-row' style={{ width: '380px' }}>
                <Card.Img
                  height={170}
                  variant="top"
                  src={beer.beerImgUrl}
                />
                <Card.Body>
                  <Card.Title>{beer.beerName}</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>{beer.beerStyle}</ListGroup.Item>
                    <ListGroup.Item>{beer.price * conversion}</ListGroup.Item>
                    <ListGroup.Item>{beer.available ? 'Disponible' : 'No disponible'}</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}


      </div>

      <Button className="btn btn-secondary m-3" onClick={handleAvailableButton}>Filtrar solo disponible</Button>
      <Count beers={availableBeers} />
      <NewBeer onHandleAddNewBeer={handleAddNewProduct} />

    </div>

  );
}

export default Available;