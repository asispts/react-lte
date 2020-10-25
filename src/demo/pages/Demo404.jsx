import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { Link } from 'react-router-dom';
import LteContentHeader from '../../components/LteContentHeader';
import LteText from '../../components/LteText';
import LteContent from '../../components/LteContent';

const Demo404 = () => {
  return (
    <>
      <LteContentHeader title='404 Error Page' />
      <LteContent>
        <div className='error-page'>
          <LteText tag='h2' color='warning' className='headline'>
            404
          </LteText>

          <div className='error-content'>
            <h3>
              <FontAwesomeIcon icon={faExclamationTriangle} className='text-warning' />
              <span> Oops! Page not found.</span>
            </h3>
            <p>
              <span>We could not find the page you were looking for. Meanwhile, you may </span>
              <Link to='/'>may return to dashboard</Link>
              <span> or try using the search form.</span>
            </p>

            <Form className='search-form'>
              <InputGroup>
                <Input type='text' placeholder='Search' />
                <InputGroupAddon addonType='append'>
                  <Button type='submit' name='submit' color='warning'>
                    <FontAwesomeIcon icon={faSearch} />
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </Form>
          </div>
        </div>
      </LteContent>
    </>
  );
};

export default Demo404;
