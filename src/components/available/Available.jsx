import React, { useState } from 'react';
import { beers } from '../data/Data';
import { Button, Card, ListGroup } from 'react-bootstrap';
import Count from '../count/Count';
import NewBeer from '../newBeer/NewBeer'
const Available = () => {
    const conversion = 1000;

    
    
    const [totalBeers, setTotalBeers] = useState(beers)
    
    const  handleAddNewProduct = (newBeer) =>{
      const newProduct = {
        id: Math.random().toString(),
        ...newBeer,
    }
      setTotalBeers((prevState) => [...prevState, newProduct]);
    }
    const [filteredBeers, setFilteredBeers] = useState(false);

    const handleAvailableButton = () => {
        setFilteredBeers(!filteredBeers);
        
    };
    
    const availableBeers = filteredBeers ? totalBeers.filter(beer => beer.available) : totalBeers;
    return (
        <div>
            <h1 className="text-light">Cervezas: </h1>
            <div className="d-flex flex-wrap">
                {availableBeers.map(beer => (
                    <Card key={beer.id} className='m-1 d-flex flex-row' style={{ width: '380px' }}>
                        <Card.Img
                            height={170}
                            variant="top"
                            src={beer.beerImgUrl}>
                        </Card.Img>
                        <Card.Body >
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

            <Button className="btn btn-secondary m-3" onClick={handleAvailableButton}>Filtrar solo disponible</Button>
            <Count beers={availableBeers} />
            <NewBeer onHandleAddNewBeer = {handleAddNewProduct}/>

        </div>

    );
}

export default Available;