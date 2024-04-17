import React from 'react'
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import PropTypes from "prop-types";

const NewBeer = ({ onHandleAddNewBeer }) => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [url, setUrl] = useState("")
  const [type, setType] = useState("")
  const [available, setAvailable] = useState(false)

  const handleNameEntered = (event) => {
    setName(event.target.value)
  }
  const handlePriceEntered = (event) => {
    setPrice(event.target.value)
  }
  const handleUrlEntered = (event) => {
    setUrl(event.target.value)
  }
  const handleTypeEntered = (event) => {
    setType(event.target.value)
  }
  const handleAvailableEntered = (event) => {
    setAvailable(event.target.value)
  }

  const handleBeerSubmit = (event) => {
    event.preventDefault();
    const BeerData = {

      beerName: name,
      beerStyle: type,
      price: price,
      available: available,
      beerImgUrl: url,

    }

    onHandleAddNewBeer(BeerData);
    setName('');
    setPrice(0);
    setType('');
    setUrl('');
    setAvailable(false);
  }


  const [showForm, setShowForm] = useState(false)

  const handleClick = () => {
    setShowForm(!showForm);
  }

  return (
    <>
      <Button onClick={handleClick}>
        {showForm ? "Cancelar" : "Agregar Cerveza"}
      </Button>
      {showForm ? <Form onSubmit={handleBeerSubmit}>
        <Form.Group controlId="product-name">
          <Form.Label className='text-light'>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder='Name...'
            onChange={handleNameEntered}
            value={name}
          />
        </Form.Group>
        <Form.Group controlId="product-price">
          <Form.Label className='text-light'>Price</Form.Label>
          <Form.Control
            type="number"
            onChange={handlePriceEntered}
            value={price}
          />
        </Form.Group>
        <Form.Group controlId="product-url">
          <Form.Label className='text-light'>Product Url</Form.Label>
          <Form.Control
            type="text"
            placeholder='Url...'
            onChange={handleUrlEntered}
            value={url}
          />
        </Form.Group>
        <Form.Group controlId="product-type">
          <Form.Label className='text-light'>Product Type</Form.Label>
          <Form.Control
            type="text"
            placeholder='Type...'
            onChange={handleTypeEntered}
            value={type}
          />
        </Form.Group>
        <Form.Group controlId="product-availability">
          <Form.Check
            type="checkbox"
            className='text-light'
            label="Available"
            onChange={handleAvailableEntered}
            value={available}
          />
        </Form.Group>

        <Button type='submit' variant='warning' className="mb-3 mt-2 ps-5 pe-5">Add</Button>
      </Form> : ""
      }

    </>
  )
}

export default NewBeer

 NewBeer.propTypes = {
   onHandleAddNewBeer: PropTypes.func.isRequired,
 };