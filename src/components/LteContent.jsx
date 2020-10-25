import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

const defaultProps = {
  children: null,
};

const LteContent = ({ children }) => {
  return (
    <section className='content'>
      <Container fluid>{children}</Container>
    </section>
  );
};

LteContent.propTypes = propTypes;
LteContent.defaultProps = defaultProps;

export default LteContent;
