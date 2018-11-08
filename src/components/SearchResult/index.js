import React from 'react';

import Maps from '../Maps';

import { Container } from './styles';

const SearchResult = () => (
  <Container>
    <h2>Rua Miguel Mentem</h2>
    <p>Vila Guilherme</p>
    <p>São Paulo - SP</p>
    <p>02050-010</p>
    <Maps positionCenter="Rua Miguel Mentem" />
  </Container>
);

export default SearchResult;
