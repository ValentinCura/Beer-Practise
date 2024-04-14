import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NewBeer({ onSubmit }) {
  const [beerName, setBeerName] = useState('');
  const [beerStyle, setBeerStyle] = useState('');
  const [price, setPrice] = useState(0);
  const [available, setAvailable] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Llama a la función onSubmit pasando los datos del formulario
    onSubmit({
      beerName,
      beerStyle,
      price: parseFloat(price),
      available,
      imageUrl,
    });

    // Reinicia los campos del formulario después del envío
    setBeerName('');
    setBeerStyle('');
    setPrice(0);
    setAvailable(false);
    setImageUrl('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="beerName">
        <Form.Label>Nombre de la Cerveza</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el nombre de la cerveza"
          value={beerName}
          onChange={(e) => setBeerName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="beerStyle">
        <Form.Label>Estilo de la Cerveza</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el estilo de la cerveza"
          value={beerStyle}
          onChange={(e) => setBeerStyle(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Precio en dolar</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ingrese el precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="imageUrl">
        <Form.Label>URL de la Imagen</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese la URL de la imagen"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="available">
        <Form.Check
          type="checkbox"
          label="Disponible"
          checked={available}
          onChange={(e) => setAvailable(e.target.checked)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Agregar Cerveza
      </Button>
    </Form>
  );
}

export default NewBeer;