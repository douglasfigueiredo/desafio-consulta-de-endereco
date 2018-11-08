import React from 'react';
import { Container, Header, Form } from './styles';

const Main = () => (
  <Container>
    <Header>
      <p>Consultar</p>
      <Form>
        <span>CEP</span>
        <input type="text" placeholder="Insira o CEP" />
        <button type="submit">Buscar</button>
      </Form>
    </Header>
  </Container>
);

export default Main;
