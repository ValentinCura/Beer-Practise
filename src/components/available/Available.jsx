import React, { useState } from 'react';
import { beers as initialBeers } from '../data/Data';
import { Button, Card, ListGroup } from 'react-bootstrap';
import Count from '../count/Count';
import NewBeer from '../newBeer/NewBeer';

const Available = () => {
  const conversion = 1000;
  const [beers, setBeers] = useState(initialBeers);
  const [filteredBeers, setFilteredBeers] = useState(false);
  const [showNewBeerForm, setShowNewBeerForm] = useState(false); // Estado para controlar la visibilidad del formulario

  const handleAvailableButton = () => {
    setFilteredBeers(!filteredBeers);
  };

  const handleNewBeerSubmit = (formData) => {
    const newBeer = {
      id: beers.length + 9, // Genera un ID único a partir de 9
      beerName: formData.beerName,
      beerStyle: formData.beerStyle,
      price: formData.price,
      available: formData.available,
      beerImgUrl: formData.imageUrl,
    };

    setBeers([...beers, newBeer]);
    console.log('Nueva cerveza agregada:', newBeer);

    // Oculta el formulario después de agregar la cerveza
    setShowNewBeerForm(false);
  };

  return (
    <div>
      <h1 className="text-black">Cervezas: </h1>
      <div className="d-flex flex-wrap">
        {beers.map(beer => (
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

      <Button className="btn btn-secondary m-3" onClick={handleAvailableButton}>
        {filteredBeers ? 'Mostrar Todas' : 'Filtrar Disponibles'}
      </Button>
      <Count beers={beers} />

      {/* Botón para mostrar/ocultar el formulario de agregar cerveza */}
      <Button className="btn btn-primary m-3" onClick={() => setShowNewBeerForm(!showNewBeerForm)}>
        {showNewBeerForm ? 'Cancelar' : 'Agregar Cerveza'}
      </Button>

      {/* Renderiza el formulario NewBeer si showNewBeerForm es verdadero */}
      {showNewBeerForm && (
        <div>
          <h1>Formulario Nueva Cerveza</h1>
          <NewBeer onSubmit={handleNewBeerSubmit} />
        </div>
      )}
    </div>
  );
};

export default Available;
