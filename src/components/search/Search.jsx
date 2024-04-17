import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import PropTypes from "prop-types";

const Search = ({onSearchValue}) => {

    const [searchValue, setSearchValue] = useState("")


    const handleSearchBeer = (event) => {
        event.preventDefault();
        console.log(searchValue);
        onSearchValue(searchValue);
        setSearchValue('');
    }

    return (
        <Form className='d-flex' >
            <Form.Group className='w-100' controlId="formBasicSearch">
              <Form.Control
                type="text"
                placeholder="Buscar cerveza por nombre"
                value = {searchValue}
                onChange={(e) => setSearchValue(e.target.value)} 
                
              />
            </Form.Group>
            <Button  variant="primary" type='onSubmit' onClick={handleSearchBeer} >
              Buscar
            </Button>
          </Form>
    )
}

export default Search
Search.propTypes = {
    onSearchValue: PropTypes.func.isRequired,
  };