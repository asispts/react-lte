import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Form, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavSearch = () => {
  return (
    <Form inline className='ml-3'>
      <InputGroup size='sm'>
        <Input className='form-control-navbar' type='search' placeholder='Search' aria-label='Search' />
        <InputGroupAddon addonType='append'>
          <button className='btn btn-navbar' type='submit'>
            <FontAwesomeIcon icon={faSearch} />
            <span className='d-none'>Search</span>
          </button>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  );
};

export default NavSearch;
