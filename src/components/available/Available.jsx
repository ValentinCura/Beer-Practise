import React, { useState } from 'react';
import { beers } from '../data/Data';
import { Button, Card, ListGroup } from 'react-bootstrap';
import Count from '../count/Count';

const Available = () => {
    const conversion = 1000;

    const [filteredBeers, setFilteredBeers] = useState(false);

    const handleAvailableButton = () => {
        setFilteredBeers(!filteredBeers);
    };

    const availableBeers = filteredBeers ? beers.filter(beer => beer.available) : beers;

    return (
        <div>
            <h1 className="text-black">Cervezas: </h1>
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

        </div>

    );
}

export default Available;