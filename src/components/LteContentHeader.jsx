import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from 'reactstrap';

const propTypes = {
  title: PropTypes.string.isRequired,
};

const LteContentHeader = ({ title }) => {
  return (
    <section className='content-header'>
      <Container fluid>
        <Row className='mb-2'>
          <Col sm='6'>
            <h1 className='m-0'>{title}</h1>
          </Col>
          <Col sm='6'>
            <Breadcrumb className='float-sm-right'>
              <BreadcrumbItem>
                <Link to='/'>Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{title}</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

LteContentHeader.propTypes = propTypes;

export default LteContentHeader;
