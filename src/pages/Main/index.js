import React, { Component } from 'react';
import { Container, Header, Form } from './styles';

import api from '../../services/api';

import SearchResult from '../../components/SearchResult';

export default class Main extends Component {
  state = {
    loading: false,
    inputCep: '',
    searchResult: [],
    searchError: false,
    changed: false,
  };

  handleResult = async (e) => {
    const { inputCep } = this.state;

    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { data: result } = await api.get(`/${inputCep}/json/unicode/`);
      this.setState({
        inputCep: '',
        searchResult: [result],
        searchError: false,
        changed: true,
      });
    } catch (err) {
      this.setState({ searchError: true, searchResult: [], changed: false });
    } finally {
      this.setState({ loading: false });
    }
  };

  clearResult = () => {
    this.setState({ searchResult: [], changed: false });
  }

  render() {
    const {
      searchResult, inputCep, loading, changed, searchError,
    } = this.state;

    return (
      <Container>
        <Header>
          <p>Consultar</p>
          <Form withError={searchError} onSubmit={this.handleResult}>
            <span className="cep">CEP</span>
            <input
              type="text"
              placeholder="Insira o CEP"
              value={inputCep}
              onChange={e => this.setState({ inputCep: e.target.value })}
            />
            <button type="submit">
              {loading ? (
                <i className="fa fa-spinner fa-pulse" />
              ) : (
                <span className="txt-button">Buscar</span>
              )}
            </button>
          </Form>
        </Header>
        {changed ? (
          <SearchResult
            results={searchResult}
            clearResult={this.clearResult}
          />
        ) : (
          <span />
        )}
      </Container>
    );
  }
}
