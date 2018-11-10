import React from 'react';

import Maps from '../Maps';

import { Container } from './styles';

const SearchResult = ({ results, clearResult }) => (
  <Container>
    {results.map(result => (
      <div className="content-result" key={result.cep}>
        <div className="result-header">
          <div className="controls">
            <a href className="btn-close" onClick={clearResult}>
              <i className="fa fa-close" />
            </a>
          </div>
          <div className="result-text">
            <h2>{result.logradouro}</h2>
            <p>{result.bairro}</p>
            <p>{result.localidade} - {result.uf}</p>
            <p>{result.cep}</p>
          </div>
        </div>
        {`${result.logradouro}, ${result.bairro}, ${result.localidade}`}
        <Maps positionCenter={`${result.logradouro}, ${result.bairro}, ${result.localidade}`} />
      </div>
    ))}
  </Container>
);

export default SearchResult;
