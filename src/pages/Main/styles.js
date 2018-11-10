import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  font-family: Arial, Helvetica, sans-serif;

  @media screen and (max-width: 599px) {
    margin: 0!important;
  }
`;

export const Header = styled.div`
  width: 100%;
  background: #ededed;
  padding: 30px;
  p {
    font-size: 20px;
  }
  @media screen and (max-width: 599px) {
    padding: 15px;
    p {
      font-size: 14px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;

  span.cep {
    color: #444;
    font-size: 22px;
  }

  input {
    flex: 1;
    height: 40px;
    padding: 0 10px;
    margin: 0 10px;
    background: #FFF;
    border: 0;
    border-radius: 3px;
    font-size: 14px;
    color #444;

    border: ${({ withError }) => (withError ? '2px solid #F00' : 0)};

  }

  button {
    width: 70px;
    height: 40px;
    padding: 0 10px;
    background: #5ba6de;
    font-size: 14px;
    font-weight: bold;
    border: 0;
    border-radius: 3px;
    cursor: pointer;

    span.txt-button, i {
      color: #FFF;
    }

    &:hover {
      background: #2379ba;
    }
  }

  @media screen and (max-width: 599px) {
    span.cep {
      font-size: 13px;
    }
    input {
      height: 30px;
      padding: 0 10px;
      font-size: 13px;
    }
    button {
      width: 70px;
      height: 30px;
      font-size: 13px;
    }
  }

`;
