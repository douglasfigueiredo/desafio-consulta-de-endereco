import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 600px;
  min-width: 420px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Header = styled.div`
  width: 100%;
  background: #ededed;
  padding: 30px;

  p {
    font-size: 20px;
  }
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;

  span {
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
  }

  button {
    height: 40px;
    padding: 0 10px;
    background: #5ba6de;
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
    border: 0;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background: #2379ba;
    }
  }
`;
