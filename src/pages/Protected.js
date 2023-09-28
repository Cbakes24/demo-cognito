import React from 'react';
import Container from '../layout/Container'
import ProtectedRoute from './ProtectedRoute'

function Protected() {
  return (
    <Container>
      <h1>Protected route</h1>
    </Container>
  );
}

export default ProtectedRoute(Protected)
